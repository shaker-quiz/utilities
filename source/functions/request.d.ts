export function parseResponse(response: Response): any;
export function resolveResponse(scope: Scope, [response, value]: [Response, any]): any;
export function scopeRequest<R>(scope: Scope, input: RequestInfo, init: RequestInit): Promise<R>;
