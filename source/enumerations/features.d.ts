export const Features: {
    Checkin: "Checkin";
    Redirect: "Redirect";
    '404': "404";
    Exception: "Exception";
    Home: "Home";
    Profile: "Profile";
    User: "User";
    Role: "Role";
    City: "City";
    Venue: "Venue";
    Theme: "Theme";
    Game: "Game";
    Registration: "Registration";
    Mailing: "Mailing";
};
/**
 * @type {Record<Feature, Icon>}
 */
export const FeatureIcons: Record<Feature, Icon>;
/**
 * @type {Record<Feature, Record<Kind, string>>}
 */
export const FeatureKindPathnames: Record<Feature, Record<Kind, string>>;
/**
 * @type {Record<Domain, Service>}
 */
export const DomainServiceDefaults: Record<Domain, Service>;
/**
 * @type {Record<Page, Service>}
 */
export const PageServiceDefaults: Record<Page, Service>;
/**
 * @type {Record<Procedure, Service>}
 */
export const ProcedureServiceDefaults: Record<Procedure, Service>;
/**
 * @type {Record<Feature, Service>}
 */
export const FeatureServiceDefaults: Record<Feature, Service>;
/**
 * @type {Record<Feature, Record<Method, Set<Requirement>>>}
 */
export const FeatureMethodRequirements: Record<Feature, Record<Method, Set<Requirement>>>;
/**
 * @type {Record<Feature, Record<Service, Record<Network, string>>>}
 */
export const FeatureServiceNetworkOrigins: Record<Feature, Record<Service, Record<Network, string>>>;
