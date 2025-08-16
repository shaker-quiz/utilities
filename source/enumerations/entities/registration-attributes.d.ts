export const RegistrationAttributes: readonly ["Alone", "Birthday", "Newcomer", "Public"];
export function getRegistrationAttributes(value: RegistrationAttribute[] | Partial<Pick<RegistrationTable, "is_alone" | "is_birthday" | "is_extensible" | "is_first">>): any;
