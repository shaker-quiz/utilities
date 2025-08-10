export const Domains: readonly ["User", "Role", "Country", "Currency", "City", "Venue", "Theme", "Game", "Registration"];
/**
 * @type {Record<Domain, Icon>}
 */
export const DomainIcon: Record<Domain, Icon>;
/**
 * @type {Record<Domain, Record<Kind, string>>}
 */
export const DomainKindPathname: Record<Domain, Record<Kind, string>>;
export const Procedures: readonly ["Checkin", "Redirect"];
/**
 * @type {Record<Procedure, Icon>}
 */
export const ProcedureIcon: Record<Procedure, Icon>;
/**
 * @type {Record<Procedure, Record<Kind, string>>}
 */
export const ProcedureKindPathname: Record<Procedure, Record<Kind, string>>;
/**
 * @type {Array<Domain | Procedure>}
 */
export const Features: Array<Domain | Procedure>;
/**
 * @type {Record<Feature, Icon>}
 */
export const FeatureIcon: Record<Feature, Icon>;
/**
 * @type {Record<Feature, Record<Kind, string>>}
 */
export const FeatureKindPathname: Record<Feature, Record<Kind, string>>;
/**
 * @type {Array<[feature: Feature, kind: Kind, pathname: string]>}
 */
export const FeatureKindPathnames: Array<[feature: Feature, kind: Kind, pathname: string]>;
/**
 * @type {Array<[feature: Feature, kind: Kind, pattern: URLPattern]>}
 */
export const FeatureKindPatterns: Array<[feature: Feature, kind: Kind, pattern: URLPattern]>;
export function getPathname(feature: Feature, kind: Kind): string;
export function getPattern(feature: Feature, kind: Kind): any;
