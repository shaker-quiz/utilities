import { HttpMethods } from '@yurkimus/http-methods'

import { readMessage } from './http.js'

/**
 * @param {URL} url
 * @param {Request} request
 */
export let authorize = (url, request) =>
  Promise
    .resolve(request)
    .then(request => [
      request,
      fetch(
        url,
        {
          method: HttpMethods.Get,
          headers: new Headers([
            ['Authorization', request.headers.get('Authorization')],
          ]),
        },
      ),
    ])
    .then(Promise.all.bind(Promise))
    .then(([request, response]) => [
      request,
      readMessage(response),
    ])
    .then(Promise.all.bind(Promise))
    .then(([request, [response, body]]) => {
      switch (response.status) {
        case 200:
          return [request, body]

        default:
          throw response
      }
    })
