import { URLOptions } from "@yurkimus/url";

export namespace Features {
    let Checkin: "Checkin";
    let Cities: "Cities";
    let City: "City";
    let Countries: "Countries";
    let Country: "Country";
    let Exception: "Exception";
    let Game: "Game";
    let Games: "Games";
    let Home: "Home";
    let Region: "Region";
    let Regions: "Regions";
    let Registration: "Registration";
    let Registrations: "Registrations";
    let Theme: "Theme";
    let Themes: "Themes";
    let User: "User";
    let Users: "Users";
    let Venue: "Venue";
    let Venues: "Venues";
}
export namespace ServiceFeatures {
    export let Admin: ("Checkin" | "Games" | "Users" | "Cities" | "City" | "Countries" | "Country" | "Exception" | "Game" | "Home" | "Region" | "Regions" | "Registration" | "Registrations" | "Theme" | "Themes" | "User" | "Venue" | "Venues")[];
    let Games_1: ("Games" | "Game" | "Home" | "Registration" | "Registrations" | "Theme" | "Themes")[];
    export { Games_1 as Games };
    export let Landing: ("Games" | "Exception" | "Game" | "Home" | "Registration")[];
    export let Locations: ("Cities" | "City" | "Countries" | "Country" | "Home" | "Region" | "Regions" | "Venue" | "Venues")[];
    export let MiniApp: ("Games" | "Exception" | "Game" | "Home" | "Registration")[];
    let Users_1: ("Checkin" | "Users" | "Home" | "User")[];
    export { Users_1 as Users };
}
export namespace FeatureKinds {
    let Checkin_1: "Item";
    export { Checkin_1 as Checkin };
    let Cities_1: "List";
    export { Cities_1 as Cities };
    let City_1: "Item";
    export { City_1 as City };
    let Countries_1: "List";
    export { Countries_1 as Countries };
    let Country_1: "Item";
    export { Country_1 as Country };
    let Exception_1: "Item";
    export { Exception_1 as Exception };
    let Game_1: "Item";
    export { Game_1 as Game };
    let Games_2: "List";
    export { Games_2 as Games };
    let Home_1: "Item";
    export { Home_1 as Home };
    let Region_1: "Item";
    export { Region_1 as Region };
    let Regions_1: "List";
    export { Regions_1 as Regions };
    let Registration_1: "Item";
    export { Registration_1 as Registration };
    let Registrations_1: "List";
    export { Registrations_1 as Registrations };
    let Theme_1: "Item";
    export { Theme_1 as Theme };
    let Themes_1: "List";
    export { Themes_1 as Themes };
    let User_1: "Item";
    export { User_1 as User };
    let Users_2: "List";
    export { Users_2 as Users };
    let Venue_1: "Item";
    export { Venue_1 as Venue };
    let Venues_1: "List";
    export { Venues_1 as Venues };
}
export namespace FeaturePathnames {
    let Checkin_2: "/checkin";
    export { Checkin_2 as Checkin };
    let Cities_2: "/cities";
    export { Cities_2 as Cities };
    let City_2: "/city/:city?";
    export { City_2 as City };
    let Countries_2: "/countries";
    export { Countries_2 as Countries };
    let Country_2: "/country/:country?";
    export { Country_2 as Country };
    let Exception_2: "/exception";
    export { Exception_2 as Exception };
    let Game_2: "/game/:game?";
    export { Game_2 as Game };
    let Games_3: "/games";
    export { Games_3 as Games };
    let Home_2: "/";
    export { Home_2 as Home };
    let Region_2: "/region/:region?";
    export { Region_2 as Region };
    let Regions_2: "/regions";
    export { Regions_2 as Regions };
    let Registration_2: "/registration/:registration?";
    export { Registration_2 as Registration };
    let Registrations_2: "/registrations";
    export { Registrations_2 as Registrations };
    let Theme_2: "/theme/:theme?";
    export { Theme_2 as Theme };
    let Themes_2: "/themes";
    export { Themes_2 as Themes };
    let User_2: "/user/:user?";
    export { User_2 as User };
    let Users_3: "/users";
    export { Users_3 as Users };
    let Venue_2: "/venue/:venue?";
    export { Venue_2 as Venue };
    let Venues_2: "/venues";
    export { Venues_2 as Venues };
}
export namespace FeatureMethodRequirements {
    export namespace Checkin_3 {
        let DELETE: any;
        let GET: any;
        let OPTIONS: any;
        let PATCH: any;
        let POST: any;
        let PUT: any;
    }
    export { Checkin_3 as Checkin };
    export namespace Cities_3 {
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
    export { Cities_3 as Cities };
    export namespace City_3 {
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
    export { City_3 as City };
    export namespace Countries_3 {
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
    export { Countries_3 as Countries };
    export namespace Country_3 {
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
    export { Country_3 as Country };
    export namespace Exception_3 {
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
    export { Exception_3 as Exception };
    export namespace Game_3 {
        let DELETE_6: any;
        export { DELETE_6 as DELETE };
        let GET_6: any;
        export { GET_6 as GET };
        let OPTIONS_6: any;
        export { OPTIONS_6 as OPTIONS };
        let PATCH_6: any;
        export { PATCH_6 as PATCH };
        let POST_6: any;
        export { POST_6 as POST };
        let PUT_6: any;
        export { PUT_6 as PUT };
    }
    export { Game_3 as Game };
    export namespace Games_4 {
        let DELETE_7: any;
        export { DELETE_7 as DELETE };
        let GET_7: any;
        export { GET_7 as GET };
        let OPTIONS_7: any;
        export { OPTIONS_7 as OPTIONS };
        let PATCH_7: any;
        export { PATCH_7 as PATCH };
        let POST_7: any;
        export { POST_7 as POST };
        let PUT_7: any;
        export { PUT_7 as PUT };
    }
    export { Games_4 as Games };
    export namespace Home_3 {
        let DELETE_8: any;
        export { DELETE_8 as DELETE };
        let GET_8: any;
        export { GET_8 as GET };
        let OPTIONS_8: any;
        export { OPTIONS_8 as OPTIONS };
        let PATCH_8: any;
        export { PATCH_8 as PATCH };
        let POST_8: any;
        export { POST_8 as POST };
        let PUT_8: any;
        export { PUT_8 as PUT };
    }
    export { Home_3 as Home };
    export namespace Region_3 {
        let DELETE_9: any;
        export { DELETE_9 as DELETE };
        let GET_9: any;
        export { GET_9 as GET };
        let OPTIONS_9: any;
        export { OPTIONS_9 as OPTIONS };
        let PATCH_9: any;
        export { PATCH_9 as PATCH };
        let POST_9: any;
        export { POST_9 as POST };
        let PUT_9: any;
        export { PUT_9 as PUT };
    }
    export { Region_3 as Region };
    export namespace Regions_3 {
        let DELETE_10: any;
        export { DELETE_10 as DELETE };
        let GET_10: any;
        export { GET_10 as GET };
        let OPTIONS_10: any;
        export { OPTIONS_10 as OPTIONS };
        let PATCH_10: any;
        export { PATCH_10 as PATCH };
        let POST_10: any;
        export { POST_10 as POST };
        let PUT_10: any;
        export { PUT_10 as PUT };
    }
    export { Regions_3 as Regions };
    export namespace Registration_3 {
        let DELETE_11: any;
        export { DELETE_11 as DELETE };
        let GET_11: any;
        export { GET_11 as GET };
        let OPTIONS_11: any;
        export { OPTIONS_11 as OPTIONS };
        let PATCH_11: any;
        export { PATCH_11 as PATCH };
        let POST_11: any;
        export { POST_11 as POST };
        let PUT_11: any;
        export { PUT_11 as PUT };
    }
    export { Registration_3 as Registration };
    export namespace Registrations_3 {
        let DELETE_12: any;
        export { DELETE_12 as DELETE };
        let GET_12: any;
        export { GET_12 as GET };
        let OPTIONS_12: any;
        export { OPTIONS_12 as OPTIONS };
        let PATCH_12: any;
        export { PATCH_12 as PATCH };
        let POST_12: any;
        export { POST_12 as POST };
        let PUT_12: any;
        export { PUT_12 as PUT };
    }
    export { Registrations_3 as Registrations };
    export namespace Theme_3 {
        let DELETE_13: any;
        export { DELETE_13 as DELETE };
        let GET_13: any;
        export { GET_13 as GET };
        let OPTIONS_13: any;
        export { OPTIONS_13 as OPTIONS };
        let PATCH_13: any;
        export { PATCH_13 as PATCH };
        let POST_13: any;
        export { POST_13 as POST };
        let PUT_13: any;
        export { PUT_13 as PUT };
    }
    export { Theme_3 as Theme };
    export namespace Themes_3 {
        let DELETE_14: any;
        export { DELETE_14 as DELETE };
        let GET_14: any;
        export { GET_14 as GET };
        let OPTIONS_14: any;
        export { OPTIONS_14 as OPTIONS };
        let PATCH_14: any;
        export { PATCH_14 as PATCH };
        let POST_14: any;
        export { POST_14 as POST };
        let PUT_14: any;
        export { PUT_14 as PUT };
    }
    export { Themes_3 as Themes };
    export namespace User_3 {
        let DELETE_15: any;
        export { DELETE_15 as DELETE };
        let GET_15: any;
        export { GET_15 as GET };
        let OPTIONS_15: any;
        export { OPTIONS_15 as OPTIONS };
        let PATCH_15: any;
        export { PATCH_15 as PATCH };
        let POST_15: any;
        export { POST_15 as POST };
        let PUT_15: any;
        export { PUT_15 as PUT };
    }
    export { User_3 as User };
    export namespace Users_4 {
        let DELETE_16: any;
        export { DELETE_16 as DELETE };
        let GET_16: any;
        export { GET_16 as GET };
        let OPTIONS_16: any;
        export { OPTIONS_16 as OPTIONS };
        let PATCH_16: any;
        export { PATCH_16 as PATCH };
        let POST_16: any;
        export { POST_16 as POST };
        let PUT_16: any;
        export { PUT_16 as PUT };
    }
    export { Users_4 as Users };
    export namespace Venue_3 {
        let DELETE_17: any;
        export { DELETE_17 as DELETE };
        let GET_17: any;
        export { GET_17 as GET };
        let OPTIONS_17: any;
        export { OPTIONS_17 as OPTIONS };
        let PATCH_17: any;
        export { PATCH_17 as PATCH };
        let POST_17: any;
        export { POST_17 as POST };
        let PUT_17: any;
        export { PUT_17 as PUT };
    }
    export { Venue_3 as Venue };
    export namespace Venues_3 {
        let DELETE_18: any;
        export { DELETE_18 as DELETE };
        let GET_18: any;
        export { GET_18 as GET };
        let OPTIONS_18: any;
        export { OPTIONS_18 as OPTIONS };
        let PATCH_18: any;
        export { PATCH_18 as PATCH };
        let POST_18: any;
        export { POST_18 as POST };
        let PUT_18: any;
        export { PUT_18 as PUT };
    }
    export { Venues_3 as Venues };
}
/**
 * @satisfies {Map<Service, Map<Network, string>>}
 */
export const ServiceNetworkOrigins: Map<Service, Map<Network, string>>;
/**
 * @type {Map<Service, Map<Feature, Map<Network, Nullable<(options?: import('@yurkimus/url').URLOptions) => URL>>>>}
 */
export const ServiceFeatureNetworkURLs: Map<Service, Map<Feature, Map<Network, Nullable<(options?: URLOptions) => URL>>>>;
