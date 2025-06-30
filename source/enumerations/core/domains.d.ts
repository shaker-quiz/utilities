export const Domains: readonly ["Asset", "User", "Role", "City", "Venue", "Theme", "ThemeAsset", "Game", "GameAsset", "Registration", "Mailing"];
/**
 * @type {Record<Domain, Icon>}
 */
export const DomainIcon: Record<Domain, Icon>;
/**
 * @type {Record<Domain, Record<Kind, string>>}
 */
export const DomainKindPathname: Record<Domain, Record<Kind, string>>;
/**
 * @type {Record<Domain, Record<Method, Set<Requirement>>>}
 */
export const DomainMethodRequirements: Record<Domain, Record<Method, Set<Requirement>>>;
