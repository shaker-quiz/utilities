export const EndpointEndpoints = {
  'POST/registration': ['POST/registration', 'PATCH/game/summary'],
  'PATCH/registration': ['PATCH/registration', 'PATCH/game/summary'],
  'DELETE/registration': ['DELETE/registration', 'PATCH/game/summary'],

  'PATCH/registration/status': ['PATCH/registration/status', 'PATCH/game/summary'],
  'PATCH/registration/lineup': ['PATCH/registration/lineup', 'PATCH/game/summary'],

  'PATCH/registrations': ['PATCH/registrations', 'PATCH/games/summary'],
  'PATCH/registrations/status': ['PATCH/registrations/status', 'PATCH/games/summary'],
  'PATCH/registrations/lineup': ['PATCH/registrations/lineup', 'PATCH/games/summary'],

  'PATCH/city': ['PATCH/city', 'PATCH/user/city'],
}

export const RouteParameterModelProperty = {
  'registration': {
    ':registration': 'id',
    ':game': 'event_id',
  },
}
