export namespace Domains {
    let City: "City";
    let Game: "Game";
    let Registration: "Registration";
    let Theme: "Theme";
    let User: "User";
    let Venue: "Venue";
}
export namespace DomainIcons {
    let City_1: "building-office";
    export { City_1 as City };
    let Game_1: "newspaper";
    export { Game_1 as Game };
    let Registration_1: "user-group";
    export { Registration_1 as Registration };
    let Theme_1: "document-text";
    export { Theme_1 as Theme };
    let User_1: "users";
    export { User_1 as User };
    let Venue_1: "map-pin";
    export { Venue_1 as Venue };
}
export namespace DomainKindPathnames {
    export namespace City_2 {
        let Unit: "/cities/:city?";
        let Set: "/cities";
    }
    export { City_2 as City };
    export namespace Game_2 {
        let Unit_1: "/games/:game?";
        export { Unit_1 as Unit };
        let Set_1: "/games";
        export { Set_1 as Set };
    }
    export { Game_2 as Game };
    export namespace Registration_2 {
        let Unit_2: "/registrations/:registration?";
        export { Unit_2 as Unit };
        let Set_2: "/registrations";
        export { Set_2 as Set };
    }
    export { Registration_2 as Registration };
    export namespace Theme_2 {
        let Unit_3: "/themes/:theme?";
        export { Unit_3 as Unit };
        let Set_3: "/theme";
        export { Set_3 as Set };
    }
    export { Theme_2 as Theme };
    export namespace User_2 {
        let Unit_4: "/users/:user?";
        export { Unit_4 as Unit };
        let Set_4: "/users";
        export { Set_4 as Set };
    }
    export { User_2 as User };
    export namespace Venue_2 {
        let Unit_5: "/venues/:venue?";
        export { Unit_5 as Unit };
        let Set_5: "/venues";
        export { Set_5 as Set };
    }
    export { Venue_2 as Venue };
}
export namespace DomainMethodRequirements {
    export namespace City_3 {
        let DELETE: any;
        let GET: any;
        let OPTIONS: any;
        let PATCH: any;
        let POST: any;
        let PUT: any;
    }
    export { City_3 as City };
    export namespace Game_3 {
        let DELETE_1: any;
        export { DELETE_1 as DELETE };
        let GET_1: any;
        export { GET_1 as GET };
        let OPTIONS_1: any;
        export { OPTIONS_1 as OPTIONS };
        let PATCH_1: any;
        export { PATCH_1 as PATCH };
        let POST_1: any;
        export { POST_1 as POST };
        let PUT_1: any;
        export { PUT_1 as PUT };
    }
    export { Game_3 as Game };
    export namespace Registration_3 {
        let DELETE_2: any;
        export { DELETE_2 as DELETE };
        let GET_2: any;
        export { GET_2 as GET };
        let OPTIONS_2: any;
        export { OPTIONS_2 as OPTIONS };
        let PATCH_2: any;
        export { PATCH_2 as PATCH };
        let POST_2: any;
        export { POST_2 as POST };
        let PUT_2: any;
        export { PUT_2 as PUT };
    }
    export { Registration_3 as Registration };
    export namespace Theme_3 {
        let DELETE_3: any;
        export { DELETE_3 as DELETE };
        let GET_3: any;
        export { GET_3 as GET };
        let OPTIONS_3: any;
        export { OPTIONS_3 as OPTIONS };
        let PATCH_3: any;
        export { PATCH_3 as PATCH };
        let POST_3: any;
        export { POST_3 as POST };
        let PUT_3: any;
        export { PUT_3 as PUT };
    }
    export { Theme_3 as Theme };
    export namespace User_3 {
        let DELETE_4: any;
        export { DELETE_4 as DELETE };
        let GET_4: any;
        export { GET_4 as GET };
        let OPTIONS_4: any;
        export { OPTIONS_4 as OPTIONS };
        let PATCH_4: any;
        export { PATCH_4 as PATCH };
        let POST_4: any;
        export { POST_4 as POST };
        let PUT_4: any;
        export { PUT_4 as PUT };
    }
    export { User_3 as User };
    export namespace Venue_3 {
        let DELETE_5: any;
        export { DELETE_5 as DELETE };
        let GET_5: any;
        export { GET_5 as GET };
        let OPTIONS_5: any;
        export { OPTIONS_5 as OPTIONS };
        let PATCH_5: any;
        export { PATCH_5 as PATCH };
        let POST_5: any;
        export { POST_5 as POST };
        let PUT_5: any;
        export { PUT_5 as PUT };
    }
    export { Venue_3 as Venue };
}
