export const Domains: readonly ["User", "Role", "Country", "Currency", "City", "Venue", "Theme", "Game", "Registration", "Mailing"];
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
export namespace RoutePathname {
    let users: "/users";
    let user: "/users/:user?";
    let roles: "/roles";
    let role: "/roles/:role?";
    let checkins: "/checkins";
    let checkin: "/checkins/:checkin?";
    let countries: "/countries";
    let country: "/countries/:country?";
    let currencies: "/currencies";
    let currency: "/currencies/:currency?";
    let cities: "/cities";
    let city: "/cities/:city?";
    let venues: "/venues";
    let venue: "/venues/:venue?";
    let games: "/games";
    let game: "/games/:game?";
    let themes: "/themes";
    let theme: "/themes/:theme?";
    let registrations: "/registrations";
    let registration: "/registrations/:registration?";
    let mailings: "/mailings";
    let mailing: "/mailings/:mailing?";
}
export namespace RoutePathParams {
    let users_1: readonly [];
    export { users_1 as users };
    let user_1: readonly [":user?"];
    export { user_1 as user };
    let roles_1: readonly [];
    export { roles_1 as roles };
    let role_1: readonly [":role?"];
    export { role_1 as role };
    let checkins_1: readonly [];
    export { checkins_1 as checkins };
    let checkin_1: readonly [":checkin?"];
    export { checkin_1 as checkin };
    let countries_1: readonly [];
    export { countries_1 as countries };
    let country_1: readonly [":country?"];
    export { country_1 as country };
    let currencies_1: readonly [];
    export { currencies_1 as currencies };
    let currency_1: readonly [":currency?"];
    export { currency_1 as currency };
    let cities_1: readonly [];
    export { cities_1 as cities };
    let city_1: readonly [":city?"];
    export { city_1 as city };
    let venues_1: readonly [];
    export { venues_1 as venues };
    let venue_1: readonly [":venue?"];
    export { venue_1 as venue };
    let games_1: readonly [];
    export { games_1 as games };
    let game_1: readonly [":game?"];
    export { game_1 as game };
    let themes_1: readonly [];
    export { themes_1 as themes };
    let theme_1: readonly [":theme?"];
    export { theme_1 as theme };
    let registrations_1: readonly [];
    export { registrations_1 as registrations };
    let registration_1: readonly [":registration?"];
    export { registration_1 as registration };
    let mailings_1: readonly [];
    export { mailings_1 as mailings };
    let mailing_1: readonly [":mailing?"];
    export { mailing_1 as mailing };
}
export namespace RouteSearchParams {
    let users_2: readonly [];
    export { users_2 as users };
    let user_2: readonly [];
    export { user_2 as user };
    let roles_2: readonly [];
    export { roles_2 as roles };
    let role_2: readonly [];
    export { role_2 as role };
    let checkins_2: readonly [];
    export { checkins_2 as checkins };
    let checkin_2: readonly [];
    export { checkin_2 as checkin };
    let countries_2: readonly [];
    export { countries_2 as countries };
    let country_2: readonly [];
    export { country_2 as country };
    let currencies_2: readonly [];
    export { currencies_2 as currencies };
    let currency_2: readonly [];
    export { currency_2 as currency };
    let cities_2: readonly [];
    export { cities_2 as cities };
    let city_2: readonly [];
    export { city_2 as city };
    let venues_2: readonly [];
    export { venues_2 as venues };
    let venue_2: readonly [];
    export { venue_2 as venue };
    let games_2: readonly ["city", "status"];
    export { games_2 as games };
    let game_2: readonly ["city"];
    export { game_2 as game };
    let themes_2: readonly [];
    export { themes_2 as themes };
    let theme_2: readonly [];
    export { theme_2 as theme };
    let registrations_2: readonly ["game", "city"];
    export { registrations_2 as registrations };
    let registration_2: readonly [];
    export { registration_2 as registration };
    let mailings_2: readonly [];
    export { mailings_2 as mailings };
    let mailing_2: readonly [];
    export { mailing_2 as mailing };
}
