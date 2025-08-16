export const RegistrationStatuses: readonly ["Cancelled", "Confirmed", "Registered"];
export function getRegistrationStatus(value: RegistrationStatus | (typeof RegistrationStatusShape)[RegistrationStatus]): any;
/** @type {Record<RegistrationStatus, Pick<RegistrationTable, 'is_canceled' | 'is_confirm'>>} */
declare let RegistrationStatusShape: Record<RegistrationStatus, Pick<RegistrationTable, "is_canceled" | "is_confirm">>;
export {};
