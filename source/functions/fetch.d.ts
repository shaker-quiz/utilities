/**
 * @typedef {'onbefore' | 'onfulfilled' | 'onrejected'} ExtensionHooks
 */
/**
 * @typedef {WeakMap<Function, Map<ExtensionHooks, Set<Function>>>} Extensions
 */
/**
 * @type {Extensions}
 */
export const extensions: Extensions;
export function useFetch<S extends Service, F extends typeof import("../enumerations/features.js").ServiceFeatures[S][number], N extends Network>(service: S, feature: F, network: N): <M extends RequestMethod = "GET", R extends Role = "default">(options: import('@yurkimus/url').URLOptions | undefined, init: RequestInit) => Promise<FetchResults[S][F][M][R]>;
export type ExtensionHooks = "onbefore" | "onfulfilled" | "onrejected";
export type Extensions = WeakMap<Function, Map<ExtensionHooks, Set<Function>>>;
