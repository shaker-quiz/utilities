type EndpointHandler = (
  request: Request,
  context: {
    url: URL
    checkin: ScopeRoleResponse['GET/Checkin/Unit'][Role]
    pattern: URLPatternResult
  },
) => any
