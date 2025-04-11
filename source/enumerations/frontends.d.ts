export namespace Frontends {
    let Admin: "Admin";
    let Landing: "Landing";
    let MiniApp: "MiniApp";
}
export namespace FrontendFeatures {
    let Admin_1: any[];
    export { Admin_1 as Admin };
    let Landing_1: ("Game" | "Registration" | "404" | "Exception" | "Home")[];
    export { Landing_1 as Landing };
    let MiniApp_1: ("Game" | "Registration" | "404" | "Exception" | "Home")[];
    export { MiniApp_1 as MiniApp };
}
export namespace FrontendNetworkOrigins {
    export namespace Admin_2 {
        let Docker: string;
        let Public: string;
    }
    export { Admin_2 as Admin };
    export namespace Landing_2 {
        let Docker_1: string;
        export { Docker_1 as Docker };
        let Public_1: string;
        export { Public_1 as Public };
    }
    export { Landing_2 as Landing };
    export namespace MiniApp_2 {
        let Docker_2: string;
        export { Docker_2 as Docker };
        let Public_2: string;
        export { Public_2 as Public };
    }
    export { MiniApp_2 as MiniApp };
}
