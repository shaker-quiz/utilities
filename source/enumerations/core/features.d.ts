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
export const RoutePathname: {
    readonly users: "/users";
    readonly user: "/users/:user?";
    readonly roles: "/roles";
    readonly role: "/roles/:role?";
    readonly checkins: "/checkins";
    readonly checkin: "/checkins/:checkin?";
    readonly countries: "/countries";
    readonly country: "/countries/:country?";
    readonly currencies: "/currencies";
    readonly currency: "/currencies/:currency?";
    readonly cities: "/cities";
    readonly city: "/cities/:city?";
    readonly venues: "/venues";
    readonly venue: "/venues/:venue?";
    readonly games: "/games";
    readonly 'games/attendance': "/games/attendance";
    readonly 'games/amounts': "/games/amounts";
    readonly game: "/games/:game?";
    readonly 'game/attendance': "/games/:game/attendance";
    readonly themes: "/themes";
    readonly theme: "/themes/:theme?";
    readonly registrations: "/registrations";
    readonly registration: "/registrations/:registration?";
    readonly mailings: "/mailings";
    readonly mailing: "/mailings/:mailing?";
};
export namespace RoutePathParams {
    let users: readonly [];
    let user: readonly [":user?"];
    let roles: readonly [];
    let role: readonly [":role?"];
    let checkins: readonly [];
    let checkin: readonly [":checkin?"];
    let countries: readonly [];
    let country: readonly [":country?"];
    let currencies: readonly [];
    let currency: readonly [":currency?"];
    let cities: readonly [];
    let city: readonly [":city?"];
    let venues: readonly [];
    let venue: readonly [":venue?"];
    let games: readonly [];
    let game: readonly [":game?"];
    let themes: readonly [];
    let theme: readonly [":theme?"];
    let registrations: readonly [];
    let registration: readonly [":registration?"];
    let mailings: readonly [];
    let mailing: readonly [":mailing?"];
}
export namespace RouteSearchParams {
    let users_1: readonly [];
    export { users_1 as users };
    let user_1: readonly [];
    export { user_1 as user };
    let roles_1: readonly [];
    export { roles_1 as roles };
    let role_1: readonly [];
    export { role_1 as role };
    let checkins_1: readonly [];
    export { checkins_1 as checkins };
    let checkin_1: readonly [];
    export { checkin_1 as checkin };
    let countries_1: readonly [];
    export { countries_1 as countries };
    let country_1: readonly [];
    export { country_1 as country };
    let currencies_1: readonly [];
    export { currencies_1 as currencies };
    let currency_1: readonly [];
    export { currency_1 as currency };
    let cities_1: readonly [];
    export { cities_1 as cities };
    let city_1: readonly [];
    export { city_1 as city };
    let venues_1: readonly [];
    export { venues_1 as venues };
    let venue_1: readonly [];
    export { venue_1 as venue };
    let games_1: readonly ["city", "status"];
    export { games_1 as games };
    let game_1: readonly ["city"];
    export { game_1 as game };
    let themes_1: readonly [];
    export { themes_1 as themes };
    let theme_1: readonly [];
    export { theme_1 as theme };
    let registrations_1: readonly ["game", "city"];
    export { registrations_1 as registrations };
    let registration_1: readonly [];
    export { registration_1 as registration };
    let mailings_1: readonly [];
    export { mailings_1 as mailings };
    let mailing_1: readonly [];
    export { mailing_1 as mailing };
}
