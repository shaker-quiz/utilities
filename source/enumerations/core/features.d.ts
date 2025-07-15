export const Domains: readonly ["Asset", "User", "Role", "City", "Venue", "Theme", "ThemeAsset", "Game", "GameAsset", "Registration", "Mailing"];
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
    namespace City {
        let Unit_2: "/city/:city?";
        export { Unit_2 as Unit };
        let Set_2: "/cities";
        export { Set_2 as Set };
    }
    namespace Venue {
        let Unit_3: "/venue/:venue?";
        export { Unit_3 as Unit };
        let Set_3: "/venues";
        export { Set_3 as Set };
    }
    namespace Theme {
        let Unit_4: "/theme/:theme?";
        export { Unit_4 as Unit };
        let Set_4: "/themes";
        export { Set_4 as Set };
    }
    namespace Game {
        let Unit_5: "/game/:game?";
        export { Unit_5 as Unit };
        let Set_5: "/games";
        export { Set_5 as Set };
    }
    namespace Registration {
        let Unit_6: "/registration/:registration?";
        export { Unit_6 as Unit };
        let Set_6: "/registrations";
        export { Set_6 as Set };
    }
    namespace Mailing {
        let Unit_7: "/mailing/:mailing?";
        export { Unit_7 as Unit };
        let Set_7: "/mailings";
        export { Set_7 as Set };
    }
}
export const Procedures: readonly ["Checkin", "Redirect"];
/**
 * @type {Record<Procedure, Icon>}
 */
export const ProcedureIcon: Record<Procedure, Icon>;
export namespace ProcedureKindPathname {
    namespace Checkin {
        let Unit_8: "/checkin";
        export { Unit_8 as Unit };
        let Set_8: "/checkins";
        export { Set_8 as Set };
    }
    namespace Redirect {
        let Unit_9: "/redirect";
        export { Unit_9 as Unit };
        let Set_9: "/redirects";
        export { Set_9 as Set };
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
