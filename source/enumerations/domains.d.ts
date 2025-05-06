export namespace Domains {
    let User: "User";
    let Role: "Role";
    let City: "City";
    let Venue: "Venue";
    let Theme: "Theme";
    let Game: "Game";
    let Registration: "Registration";
    let Mailing: "Mailing";
}
/**
 * @type {Record<Domain, Icon>}
 */
export const DomainIcons: Record<Domain, Icon>;
/**
 * @type {Record<Domain, Record<Kind, string>>}
 */
export const DomainKindPathnames: Record<Domain, Record<Kind, string>>;
/**
 * @type {Record<Domain, Record<Method, Set<Requirement>>>}
 */
export const DomainMethodRequirements: Record<Domain, Record<Method, Set<Requirement>>>;
