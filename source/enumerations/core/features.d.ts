export const Domains: readonly ["Asset", "User", "Role", "City", "Venue", "Theme", "ThemeAsset", "Game", "GameAsset", "Registration", "Mailing"];
/**
 * @type {Record<Domains[number], Icon>}
 */
export const DomainIcon: Record<"Asset" | "User" | "Role" | "City" | "Venue" | "Theme" | "ThemeAsset" | "Game" | "GameAsset" | "Registration" | "Mailing", Icon>;
/**
 * @type {Record<Domains[number], Record<Kind, string>>}
 */
export const DomainKindPathname: Record<"Asset" | "User" | "Role" | "City" | "Venue" | "Theme" | "ThemeAsset" | "Game" | "GameAsset" | "Registration" | "Mailing", Record<Kind, string>>;
export const Procedures: readonly ["Checkin", "Redirect"];
/**
 * @type {Record<Procedures[number], Icon>}
 */
export const ProcedureIcon: Record<"Checkin" | "Redirect", Icon>;
/**
 * @type {Record<Procedures[number], Record<Kind, string>>}
 */
export const ProcedureKindPathname: Record<"Checkin" | "Redirect", Record<Kind, string>>;
export const Features: ("Asset" | "User" | "Role" | "City" | "Venue" | "Theme" | "ThemeAsset" | "Game" | "GameAsset" | "Registration" | "Mailing")[];
/**
 * @type {Record<Features[number], Icon>}
 */
export const FeatureIcon: Record<"Asset" | "User" | "Role" | "City" | "Venue" | "Theme" | "ThemeAsset" | "Game" | "GameAsset" | "Registration" | "Mailing", Icon>;
/**
 * @type {Record<Features[number], Record<Kind, string>>}
 */
export const FeatureKindPathname: Record<"Asset" | "User" | "Role" | "City" | "Venue" | "Theme" | "ThemeAsset" | "Game" | "GameAsset" | "Registration" | "Mailing", Record<Kind, string>>;
