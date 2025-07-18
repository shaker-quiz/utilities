export const Domains: readonly ["Asset", "User", "Role", "Country", "City", "Venue", "Theme", "ThemeAsset", "Game", "GameAsset", "Registration", "Mailing"];
/**
 * @type {Record<Domain, Icon>}
 */
export const DomainIcon: Record<Domain, Icon>;
export namespace DomainKindPathname {
    namespace User {
        let Unit: "/user/:user?";
        let Set: "/users";
    }
    namespace Role {
        let Unit_1: "/role/:role?";
        export { Unit_1 as Unit };
        let Set_1: "/roles";
        export { Set_1 as Set };
    }
    namespace Country {
        let Unit_2: "/country/:country?";
        export { Unit_2 as Unit };
        let Set_2: "/countries";
        export { Set_2 as Set };
    }
    namespace City {
        let Unit_3: "/city/:city?";
        export { Unit_3 as Unit };
        let Set_3: "/cities";
        export { Set_3 as Set };
    }
    namespace Venue {
        let Unit_4: "/venue/:venue?";
        export { Unit_4 as Unit };
        let Set_4: "/venues";
        export { Set_4 as Set };
    }
    namespace Theme {
        let Unit_5: "/theme/:theme?";
        export { Unit_5 as Unit };
        let Set_5: "/themes";
        export { Set_5 as Set };
    }
    namespace Game {
        let Unit_6: "/game/:game?";
        export { Unit_6 as Unit };
        let Set_6: "/games";
        export { Set_6 as Set };
    }
    namespace Registration {
        let Unit_7: "/registration/:registration?";
        export { Unit_7 as Unit };
        let Set_7: "/registrations";
        export { Set_7 as Set };
    }
    namespace Mailing {
        let Unit_8: "/mailing/:mailing?";
        export { Unit_8 as Unit };
        let Set_8: "/mailings";
        export { Set_8 as Set };
    }
}
export const Procedures: readonly ["Checkin", "Redirect"];
/**
 * @type {Record<Procedure, Icon>}
 */
export const ProcedureIcon: Record<Procedure, Icon>;
export namespace ProcedureKindPathname {
    namespace Checkin {
        let Unit_9: "/checkin";
        export { Unit_9 as Unit };
        let Set_9: "/checkins";
        export { Set_9 as Set };
    }
    namespace Redirect {
        let Unit_10: "/redirect";
        export { Unit_10 as Unit };
        let Set_10: "/redirects";
        export { Set_10 as Set };
    }
}
/**
 * @type {Array<Domain | Procedure>}
 */
export const Features: Array<Domain | Procedure>;
/**
 * @type {Record<Feature, Icon>}
 */
export const FeatureIcon: Record<Feature, Icon>;
export namespace FeatureKindPathname {
    export namespace Checkin_1 { }
    export { Checkin_1 as Checkin };
    export namespace Redirect_1 { }
    export { Redirect_1 as Redirect };
    export namespace User_1 { }
    export { User_1 as User };
    export namespace Role_1 { }
    export { Role_1 as Role };
    export namespace Country_1 { }
    export { Country_1 as Country };
    export namespace City_1 { }
    export { City_1 as City };
    export namespace Venue_1 { }
    export { Venue_1 as Venue };
    export namespace Theme_1 { }
    export { Theme_1 as Theme };
    export namespace Game_1 { }
    export { Game_1 as Game };
    export namespace Registration_1 { }
    export { Registration_1 as Registration };
    export namespace Mailing_1 { }
    export { Mailing_1 as Mailing };
}
/**
 * @type {Array<[feature: Feature, kind: Kind, pathname: string]>}
 */
export const FeatureKindPathnames: Array<[feature: Feature, kind: Kind, pathname: string]>;
/**
 * @type {Array<[feature: Feature, kind: Kind, pattern: URLPattern]>}
 */
export const FeatureKindPatterns: Array<[feature: Feature, kind: Kind, pattern: URLPattern]>;
export function resolvePattern(feature: Feature, kind: Kind): URLPattern;
