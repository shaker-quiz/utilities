export const RegistrationLineups: readonly ["Main", "Reserve"];
export function getRegistrationLineup(value: RegistrationLineup | (typeof RegistrationLineupShape)[RegistrationLineup]): any;
/** @type {Record<RegistrationLineup, Pick<RegistrationTable, 'is_reserve'>>} */
declare let RegistrationLineupShape: Record<RegistrationLineup, Pick<RegistrationTable, "is_reserve">>;
export {};
