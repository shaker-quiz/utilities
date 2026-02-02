const Millisecond = 1
const Second = 1_000 * Millisecond
const Minute = 60 * Second
const Hour = 60 * Minute
const Day = 24 * Hour
const Week = 7 * Day

export const Time = Object.freeze(
  /** @type {const} */ ({
    Millisecond,
    Second,
    Minute,
    Hour,
    Day,
    Week,
  }),
)
