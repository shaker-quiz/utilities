export const Constants = Object.freeze({
  /**
   * @see https://www.rfc-editor.org/rfc/rfc9562.html#name-nil-uuid
   */
  NilUuid: '00000000-0000-0000-0000-000000000000',
})

export const Time = Object.freeze(
  /** @type {const} */ ({
    Millisecond: 1,
    Second: 1_000,
    Minute: 60_000,
    Hour: 3_600_000,
    Day: 86_400_000,
    Week: 604_800_000,
  }),
)
