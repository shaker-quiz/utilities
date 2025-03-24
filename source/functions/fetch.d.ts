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
export function useFetch<Feature extends keyof typeof Features, Network extends keyof typeof Networks>(feature: Feature, network: Network): <Role extends keyof typeof Roles>(options: any | undefined, init: RequestInit) => Promise<FetchResults[Feature][RequestMethod][Role]>;
export type ExtensionHooks = "onbefore" | "onfulfilled" | "onrejected";
export type Extensions = WeakMap<Function, Map<ExtensionHooks, Set<Function>>>;
import { Features } from '../enumerations/features.js';
import { Networks } from '../enumerations/networks.js';
import { Roles } from '../enumerations/roles.js';
