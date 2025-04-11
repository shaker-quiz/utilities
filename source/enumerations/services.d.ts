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
    Admin: ("City" | "Game" | "Registration" | "Theme" | "User" | "Venue" | "Checkin" | "404" | "Exception" | "Home" | "Profile")[];
    Landing: ("Game" | "Registration" | "404" | "Exception" | "Home")[];
    MiniApp: ("Game" | "Registration" | "404" | "Exception" | "Home")[];
    Backend: ("City" | "Game" | "Registration" | "Theme" | "User" | "Venue" | "Checkin")[];
    Games: ("Game" | "Registration" | "Theme")[];
    Locations: ("City" | "Venue")[];
    Users: ("User" | "Checkin")[];
};
/** @type {Record<Service, Record<Network, string>>} */
export const ServiceNetworkOrigins: Record<Service, Record<Network, string>>;
