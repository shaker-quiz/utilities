export const Phase = Object.freeze({
  'Idle': 'Idle',
  'Loading': 'Loading',
  'Loaded': 'Loaded',
  'Aborted': 'Aborted',
  'Failed': 'Failed',
})

export const Phases = Object.freeze([
  Phase['Idle'],
  Phase['Loading'],
  Phase['Loaded'],
  Phase['Aborted'],
  Phase['Failed'],
])

export const PhaseTitle = Object.freeze({
  [Phase['Idle']]: 'Простой',
  [Phase['Loading']]: 'В процессе',
  [Phase['Loaded']]: 'Завершено',
  [Phase['Aborted']]: 'Оборвано',
  [Phase['Failed']]: 'Ошибка',
})

export const PhaseIcon = Object.freeze({
  [Phase['Idle']]: 'hero/outline/clock',
  [Phase['Loading']]: 'hero/outline/clock',
  [Phase['Loaded']]: 'hero/outline/check',
  [Phase['Aborted']]: 'hero/outline/signal-slash',
  [Phase['Failed']]: 'hero/outline/x-mark',
})
