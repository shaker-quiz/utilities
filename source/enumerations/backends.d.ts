export namespace Backends {
    let Backend: "Backend";
    let Games: "Games";
    let Locations: "Locations";
    let Users: "Users";
}
export namespace BackendFeatures {
    let Backend_1: ("Checkin" | "City" | "Game" | "Registration" | "Theme" | "User" | "Venue")[];
    export { Backend_1 as Backend };
    let Games_1: ("Game" | "Registration" | "Theme")[];
    export { Games_1 as Games };
    let Locations_1: ("City" | "Venue")[];
    export { Locations_1 as Locations };
    let Users_1: ("Checkin" | "User")[];
    export { Users_1 as Users };
}
export namespace BackendNetworkOrigins {
    export namespace Backend_2 {
        let Docker: string;
        let Public: string;
    }
    export { Backend_2 as Backend };
    export namespace Games_2 {
        let Docker_1: string;
        export { Docker_1 as Docker };
        let Public_1: string;
        export { Public_1 as Public };
    }
    export { Games_2 as Games };
    export namespace Locations_2 {
        let Docker_2: string;
        export { Docker_2 as Docker };
        let Public_2: string;
        export { Public_2 as Public };
    }
    export { Locations_2 as Locations };
    export namespace Users_2 {
        let Docker_3: string;
        export { Docker_3 as Docker };
        let Public_3: string;
        export { Public_3 as Public };
    }
    export { Users_2 as Users };
}
