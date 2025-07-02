export const Domains: readonly ["Asset", "User", "Role", "City", "Venue", "Theme", "ThemeAsset", "Game", "GameAsset", "Registration", "Mailing"];
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
export const Features: ("Asset" | "User" | "Role" | "City" | "Venue" | "Theme" | "ThemeAsset" | "Game" | "GameAsset" | "Registration" | "Mailing")[];
/**
 * @type {Record<Feature, Icon>}
 */
export const FeatureIcon: Record<Feature, Icon>;
/**
 * @type {Record<Feature, Record<Kind, string>>}
 */
export const FeatureKindPathname: Record<Feature, Record<Kind, string>>;
