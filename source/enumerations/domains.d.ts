export namespace Domains {
    let City: "City";
    let Game: "Game";
    let Registration: "Registration";
    let Theme: "Theme";
    let User: "User";
    let Venue: "Venue";
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
