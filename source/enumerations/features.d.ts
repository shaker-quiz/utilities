export const Features: {
    Checkin: "Checkin";
    City: "City";
    Game: "Game";
    Registration: "Registration";
    Theme: "Theme";
    User: "User";
    Venue: "Venue";
};
export const FeatureKindPathnames: {
    Checkin: {
        readonly Unit: "/checkin";
        readonly Set: "/checkins";
    };
    City: {
        readonly Unit: "/cities/:city?";
        readonly Set: "/cities";
    };
    Game: {
        readonly Unit: "/games/:game?";
        readonly Set: "/games";
    };
    Registration: {
        readonly Unit: "/registrations/:registration?";
        readonly Set: "/registrations";
    };
    Theme: {
        readonly Unit: "/themes/:theme?";
        readonly Set: "/theme";
    };
    User: {
        readonly Unit: "/users/:user?";
        readonly Set: "/users";
    };
    Venue: {
        readonly Unit: "/venues/:venue?";
        readonly Set: "/venues";
    };
};
export const FeatureServiceDefaults: {
    Checkin: "Users";
    City: "Locations";
    Game: "Games";
    Registration: "Games";
    Theme: "Games";
    User: "Users";
    Venue: "Locations";
};
export const FeatureServiceNetworkOrigins: {
    Checkin: {
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
    };
    City: {
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
    };
    Game: {
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
    };
    Registration: {
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
    };
    Theme: {
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
    };
    User: {
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
    };
    Venue: {
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
    };
};
