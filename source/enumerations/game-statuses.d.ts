export namespace GameStatuses {
    let APPROVED: "APPROVED";
    let ARCHIVE: "ARCHIVE";
    let CLOSED: "CLOSED";
    let FINISHED: "FINISHED";
    let FORINVITES: "FORINVITES";
    let MODERATION: "MODERATION";
    let PUBLISHED: "PUBLISHED";
    let REJECTED: "REJECTED";
    let IS_RESERVE: "IS_RESERVE";
}
export namespace RoleGameStatuses {
    export let admin: ("APPROVED" | "ARCHIVE" | "CLOSED" | "FINISHED" | "FORINVITES" | "MODERATION" | "PUBLISHED" | "REJECTED" | "IS_RESERVE")[];
    export let organizer: ("APPROVED" | "ARCHIVE" | "CLOSED" | "FINISHED" | "FORINVITES" | "PUBLISHED" | "IS_RESERVE")[];
    let _default: any[];
    export { _default as default };
}
