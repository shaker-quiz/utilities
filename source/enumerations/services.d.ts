export const Services: {
    Admin: "Admin";
    Landing: "Landing";
    MiniApp: "MiniApp";
    Backend: "Backend";
    Games: "Games";
    Locations: "Locations";
    Users: "Users";
};
export const ServiceFeatures: {
    Admin: ("Checkin" | "City" | "Game" | "Registration" | "Theme" | "User" | "Venue")[];
    Landing: ("Game" | "Registration")[];
    MiniApp: ("Game" | "Registration")[];
    Backend: ("Checkin" | "City" | "Game" | "Registration" | "Theme" | "User" | "Venue")[];
    Games: ("Game" | "Registration" | "Theme")[];
    Locations: ("City" | "Venue")[];
    Users: ("Checkin" | "User")[];
};
export const ServiceNetworkOrigins: {
    Admin: {
        Docker: string;
        Public: string;
    };
    Landing: {
        Docker: string;
        Public: string;
    };
    MiniApp: {
        Docker: string;
        Public: string;
    };
    Backend: {
        Docker: string;
        Public: string;
    };
    Games: {
        Docker: string;
        Public: string;
    };
    Locations: {
        Docker: string;
        Public: string;
    };
    Users: {
        Docker: string;
        Public: string;
    };
};
