type EndpointHandler = (
  request: Request,
  checkin: ScopeRoleResponse['GET/Checkin/Unit'][Role],
  pattern: URLPatternResult,
) => any