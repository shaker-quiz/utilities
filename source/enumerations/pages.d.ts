export const Pages: {
    readonly '404': "404";
    readonly Exception: "Exception";
    readonly Home: "Home";
    readonly Profile: "Profile";
};
/**
 * @type {Record<Page, Icon>}
 */
export const PageIcons: Record<Page, Icon>;
/**
 * @type {Record<Page, Record<Kind, string>>}
 */
export const PageKindPathnames: Record<Page, Record<Kind, string>>;
/**
 * @type {Record<Page, Record<Method, Set<Requirement>>>}
 */
export const ProcedureMethodRequirements: Record<Page, Record<Method, Set<Requirement>>>;
