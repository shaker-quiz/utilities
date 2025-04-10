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
export namespace DomainServiceDefaults {
    let City_3: "Locations";
    export { City_3 as City };
    let Game_3: "Games";
    export { Game_3 as Game };
    let Registration_3: "Games";
    export { Registration_3 as Registration };
    let Theme_3: "Games";
    export { Theme_3 as Theme };
    let User_3: "Users";
    export { User_3 as User };
    let Venue_3: "Locations";
    export { Venue_3 as Venue };
}
export namespace DomainServiceNetworkOrigins {
    export namespace City_4 {
        namespace Backend {
            let Docker: string;
            let Public: string;
        }
        namespace Games {
            let Docker_1: string;
            export { Docker_1 as Docker };
            let Public_1: string;
            export { Public_1 as Public };
        }
        namespace Locations {
            let Docker_2: string;
            export { Docker_2 as Docker };
            let Public_2: string;
            export { Public_2 as Public };
        }
        namespace Users {
            let Docker_3: string;
            export { Docker_3 as Docker };
            let Public_3: string;
            export { Public_3 as Public };
        }
        namespace Admin {
            let Docker_4: string;
            export { Docker_4 as Docker };
            let Public_4: string;
            export { Public_4 as Public };
        }
        namespace Landing {
            let Docker_5: string;
            export { Docker_5 as Docker };
            let Public_5: string;
            export { Public_5 as Public };
        }
        namespace MiniApp {
            let Docker_6: string;
            export { Docker_6 as Docker };
            let Public_6: string;
            export { Public_6 as Public };
        }
    }
    export { City_4 as City };
    export namespace Game_4 {
        export namespace Backend_1 {
            let Docker_7: string;
            export { Docker_7 as Docker };
            let Public_7: string;
            export { Public_7 as Public };
        }
        export { Backend_1 as Backend };
        export namespace Games_1 {
            let Docker_8: string;
            export { Docker_8 as Docker };
            let Public_8: string;
            export { Public_8 as Public };
        }
        export { Games_1 as Games };
        export namespace Locations_1 {
            let Docker_9: string;
            export { Docker_9 as Docker };
            let Public_9: string;
            export { Public_9 as Public };
        }
        export { Locations_1 as Locations };
        export namespace Users_1 {
            let Docker_10: string;
            export { Docker_10 as Docker };
            let Public_10: string;
            export { Public_10 as Public };
        }
        export { Users_1 as Users };
        export namespace Admin_1 {
            let Docker_11: string;
            export { Docker_11 as Docker };
            let Public_11: string;
            export { Public_11 as Public };
        }
        export { Admin_1 as Admin };
        export namespace Landing_1 {
            let Docker_12: string;
            export { Docker_12 as Docker };
            let Public_12: string;
            export { Public_12 as Public };
        }
        export { Landing_1 as Landing };
        export namespace MiniApp_1 {
            let Docker_13: string;
            export { Docker_13 as Docker };
            let Public_13: string;
            export { Public_13 as Public };
        }
        export { MiniApp_1 as MiniApp };
    }
    export { Game_4 as Game };
    export namespace Registration_4 {
        export namespace Backend_2 {
            let Docker_14: string;
            export { Docker_14 as Docker };
            let Public_14: string;
            export { Public_14 as Public };
        }
        export { Backend_2 as Backend };
        export namespace Games_2 {
            let Docker_15: string;
            export { Docker_15 as Docker };
            let Public_15: string;
            export { Public_15 as Public };
        }
        export { Games_2 as Games };
        export namespace Locations_2 {
            let Docker_16: string;
            export { Docker_16 as Docker };
            let Public_16: string;
            export { Public_16 as Public };
        }
        export { Locations_2 as Locations };
        export namespace Users_2 {
            let Docker_17: string;
            export { Docker_17 as Docker };
            let Public_17: string;
            export { Public_17 as Public };
        }
        export { Users_2 as Users };
        export namespace Admin_2 {
            let Docker_18: string;
            export { Docker_18 as Docker };
            let Public_18: string;
            export { Public_18 as Public };
        }
        export { Admin_2 as Admin };
        export namespace Landing_2 {
            let Docker_19: string;
            export { Docker_19 as Docker };
            let Public_19: string;
            export { Public_19 as Public };
        }
        export { Landing_2 as Landing };
        export namespace MiniApp_2 {
            let Docker_20: string;
            export { Docker_20 as Docker };
            let Public_20: string;
            export { Public_20 as Public };
        }
        export { MiniApp_2 as MiniApp };
    }
    export { Registration_4 as Registration };
    export namespace Theme_4 {
        export namespace Backend_3 {
            let Docker_21: string;
            export { Docker_21 as Docker };
            let Public_21: string;
            export { Public_21 as Public };
        }
        export { Backend_3 as Backend };
        export namespace Games_3 {
            let Docker_22: string;
            export { Docker_22 as Docker };
            let Public_22: string;
            export { Public_22 as Public };
        }
        export { Games_3 as Games };
        export namespace Locations_3 {
            let Docker_23: string;
            export { Docker_23 as Docker };
            let Public_23: string;
            export { Public_23 as Public };
        }
        export { Locations_3 as Locations };
        export namespace Users_3 {
            let Docker_24: string;
            export { Docker_24 as Docker };
            let Public_24: string;
            export { Public_24 as Public };
        }
        export { Users_3 as Users };
        export namespace Admin_3 {
            let Docker_25: string;
            export { Docker_25 as Docker };
            let Public_25: string;
            export { Public_25 as Public };
        }
        export { Admin_3 as Admin };
        export namespace Landing_3 {
            let Docker_26: string;
            export { Docker_26 as Docker };
            let Public_26: string;
            export { Public_26 as Public };
        }
        export { Landing_3 as Landing };
        export namespace MiniApp_3 {
            let Docker_27: string;
            export { Docker_27 as Docker };
            let Public_27: string;
            export { Public_27 as Public };
        }
        export { MiniApp_3 as MiniApp };
    }
    export { Theme_4 as Theme };
    export namespace User_4 {
        export namespace Backend_4 {
            let Docker_28: string;
            export { Docker_28 as Docker };
            let Public_28: string;
            export { Public_28 as Public };
        }
        export { Backend_4 as Backend };
        export namespace Games_4 {
            let Docker_29: string;
            export { Docker_29 as Docker };
            let Public_29: string;
            export { Public_29 as Public };
        }
        export { Games_4 as Games };
        export namespace Locations_4 {
            let Docker_30: string;
            export { Docker_30 as Docker };
            let Public_30: string;
            export { Public_30 as Public };
        }
        export { Locations_4 as Locations };
        export namespace Users_4 {
            let Docker_31: string;
            export { Docker_31 as Docker };
            let Public_31: string;
            export { Public_31 as Public };
        }
        export { Users_4 as Users };
        export namespace Admin_4 {
            let Docker_32: string;
            export { Docker_32 as Docker };
            let Public_32: string;
            export { Public_32 as Public };
        }
        export { Admin_4 as Admin };
        export namespace Landing_4 {
            let Docker_33: string;
            export { Docker_33 as Docker };
            let Public_33: string;
            export { Public_33 as Public };
        }
        export { Landing_4 as Landing };
        export namespace MiniApp_4 {
            let Docker_34: string;
            export { Docker_34 as Docker };
            let Public_34: string;
            export { Public_34 as Public };
        }
        export { MiniApp_4 as MiniApp };
    }
    export { User_4 as User };
    export namespace Venue_4 {
        export namespace Backend_5 {
            let Docker_35: string;
            export { Docker_35 as Docker };
            let Public_35: string;
            export { Public_35 as Public };
        }
        export { Backend_5 as Backend };
        export namespace Games_5 {
            let Docker_36: string;
            export { Docker_36 as Docker };
            let Public_36: string;
            export { Public_36 as Public };
        }
        export { Games_5 as Games };
        export namespace Locations_5 {
            let Docker_37: string;
            export { Docker_37 as Docker };
            let Public_37: string;
            export { Public_37 as Public };
        }
        export { Locations_5 as Locations };
        export namespace Users_5 {
            let Docker_38: string;
            export { Docker_38 as Docker };
            let Public_38: string;
            export { Public_38 as Public };
        }
        export { Users_5 as Users };
        export namespace Admin_5 {
            let Docker_39: string;
            export { Docker_39 as Docker };
            let Public_39: string;
            export { Public_39 as Public };
        }
        export { Admin_5 as Admin };
        export namespace Landing_5 {
            let Docker_40: string;
            export { Docker_40 as Docker };
            let Public_40: string;
            export { Public_40 as Public };
        }
        export { Landing_5 as Landing };
        export namespace MiniApp_5 {
            let Docker_41: string;
            export { Docker_41 as Docker };
            let Public_41: string;
            export { Public_41 as Public };
        }
        export { MiniApp_5 as MiniApp };
    }
    export { Venue_4 as Venue };
}
export namespace DomainMethodRequirements {
    export namespace City_5 {
        let DELETE: any;
        let GET: any;
        let OPTIONS: any;
        let PATCH: any;
        let POST: any;
        let PUT: any;
    }
    export { City_5 as City };
    export namespace Game_5 {
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
    export { Game_5 as Game };
    export namespace Registration_5 {
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
    export { Registration_5 as Registration };
    export namespace Theme_5 {
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
    export { Theme_5 as Theme };
    export namespace User_5 {
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
    export { User_5 as User };
    export namespace Venue_5 {
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
    export { Venue_5 as Venue };
}
