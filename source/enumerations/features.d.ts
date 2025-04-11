export const Features: {
    Checkin: "Checkin";
    '404': "404";
    Exception: "Exception";
    Home: "Home";
    Profile: "Profile";
    City: "City";
    Game: "Game";
    Registration: "Registration";
    Theme: "Theme";
    User: "User";
    Venue: "Venue";
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
 * @type {Record<Domain, Record<Service, Record<Network, string>>>}
 */
export const DomainServiceNetworkOrigins: Record<Domain, Record<Service, Record<Network, string>>>;
/**
 * @type {Record<Page, Record<Service, Record<Network, string>>>}
 */
export const PageServiceNetworkOrigins: Record<Page, Record<Service, Record<Network, string>>>;
/**
 * @type {Record<Procedure, Record<Service, Record<Network, string>>>}
 */
export const ProcedureServiceNetworkOrigins: Record<Procedure, Record<Service, Record<Network, string>>>;
/**
 * @type {Record<Feature, Record<Service, Record<Network, string>>>}
 */
export const FeatureServiceNetworkOrigins: Record<Feature, Record<Service, Record<Network, string>>>;
