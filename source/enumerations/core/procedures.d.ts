export const Procedures: readonly ["Checkin", "Redirect"];
/**
 * @type {Record<Procedure, Icon>}
 */
export const ProcedureIcon: Record<Procedure, Icon>;
/**
 * @type {Record<Procedure, Record<Kind, string>>}
 */
export const ProcedureKindPathname: Record<Procedure, Record<Kind, string>>;
/**
 * @type {Record<Procedure, Record<Method, Set<Requirement>>>}
 */
export const ProcedureMethodRequirements: Record<Procedure, Record<Method, Set<Requirement>>>;
