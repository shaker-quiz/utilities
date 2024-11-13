import { HttpMethods } from '@yurkimus/http-methods'

import { Environment } from 'source/environment.js'
import { readMessage } from 'source/http.js'
import { url } from 'source/url.js'

/**
 * @param {Request} request
 */
export let authorize = request =>
  Promise
    .resolve(request)
    .then(request =>
      Promise.all([
        request,
        fetch(
          url({
            base: `http://${Deno.env.get(Environment.CheckinContainer)}/`,
            pathname: 'authorization',
          }),
          {
            method: HttpMethods.Get,
            headers: new Headers([
              ['Authorization', request.headers.get('Authorization')],
            ]),
          },
        ),
      ])
    )
    .then(([request, response]) =>
      Promise.all([
        request,
        readMessage(response),
      ])
    )
    .then(([request, [response, body]]) => {
      switch (response.status) {
        case 200:
          return [request, body]

        default:
          throw response
      }
    })
