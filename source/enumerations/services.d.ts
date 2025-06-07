export const Services: {
    Admin: "Admin";
    Landing: "Landing";
    MiniApp: "MiniApp";
    Backend: "Backend";
    Games: "Games";
    Locations: "Locations";
    Users: "Users";
    Integrations: "Integrations";
};
export const ServiceFeatures: {
    Admin: ("Checkin" | "User" | "City" | "Venue" | "Theme" | "Game" | "Registration" | "404" | "Exception" | "Home" | "Profile")[];
    Landing: ("Game" | "Registration" | "404" | "Exception" | "Home")[];
    MiniApp: ("Game" | "Registration" | "404" | "Exception" | "Home")[];
    Backend: ("Checkin" | "User" | "Role" | "City" | "Venue" | "Theme" | "Game" | "Registration")[];
    Games: ("Theme" | "Game" | "Registration")[];
    Locations: ("City" | "Venue")[];
    Users: ("Checkin" | "User" | "Role")[];
    Integrations: ("Mailing" | "Redirect")[];
};
/** @type {Record<Service, Record<Network, string>>} */
export const ServiceNetworkOrigins: Record<Service, Record<Network, string>>;
