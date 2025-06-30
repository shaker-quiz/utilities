export const Features: ("Asset" | "User" | "Role" | "City" | "Venue" | "Theme" | "ThemeAsset" | "Game" | "GameAsset" | "Registration" | "Mailing")[];
/**
 * @type {Record<Feature, Icon>}
 */
export const FeatureIcon: Record<Feature, Icon>;
/**
 * @type {Record<Feature, Record<Kind, string>>}
 */
export const FeatureKindPathname: Record<Feature, Record<Kind, string>>;
/**
 * @type {Record<Feature, Record<Method, Requirement>>}
 */
export const FeatureMethodRequirements: Record<Feature, Record<Method, Requirement>>;
