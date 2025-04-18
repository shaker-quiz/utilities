export namespace Procedures {
    let Checkin: "Checkin";
    let Mailing: "Mailing";
}
/**
 * @type {Record<Procedure, Icon>}
 */
export const ProcedureIcons: Record<Procedure, Icon>;
/**
 * @type {Record<Procedure, Record<Kind, string>>}
 */
export const ProcedureKindPathnames: Record<Procedure, Record<Kind, string>>;
/**
 * @type {Record<Procedure, Record<Method, Set<Requirement>>>}
 */
export const ProcedureMethodRequirements: Record<Procedure, Record<Method, Set<Requirement>>>;
