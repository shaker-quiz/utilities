export namespace Backends {
    let Backend: "Backend";
    let Games: "Games";
    let Locations: "Locations";
    let Users: "Users";
    let Integrations: "Integrations";
}
export namespace BackendFeatures {
    let Backend_1: ("City" | "Game" | "Registration" | "Theme" | "User" | "Venue" | "Checkin")[];
    export { Backend_1 as Backend };
    let Games_1: ("Game" | "Registration" | "Theme")[];
    export { Games_1 as Games };
    let Locations_1: ("City" | "Venue")[];
    export { Locations_1 as Locations };
    let Users_1: ("User" | "Checkin")[];
    export { Users_1 as Users };
    let Integrations_1: any[];
    export { Integrations_1 as Integrations };
}
