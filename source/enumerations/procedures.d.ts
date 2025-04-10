export namespace Procedures {
    let Checkin: "Checkin";
}
export namespace ProcedureIcons {
    let Checkin_1: "arrow-right-end-on-rectangle";
    export { Checkin_1 as Checkin };
}
export namespace ProcedureKindPathnames {
    export namespace Checkin_2 {
        let Unit: "/checkin";
        let Set: "/checkins";
    }
    export { Checkin_2 as Checkin };
}
export namespace ProcedureServiceDefaults {
    let Checkin_3: "Users";
    export { Checkin_3 as Checkin };
}
export namespace ProcedureServiceNetworkOrigins {
    export namespace Checkin_4 {
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
    export { Checkin_4 as Checkin };
}
export namespace ProcedureMethodRequirements {
    export namespace Checkin_5 {
        let DELETE: any;
        let GET: any;
        let OPTIONS: any;
        let PATCH: any;
        let POST: any;
        let PUT: any;
    }
    export { Checkin_5 as Checkin };
}
