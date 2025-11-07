export var Phase = /** @type {const} */ ({
  'Idle': 'Idle',
  'Loading': 'Loading',
  'Loaded': 'Loaded',
  'Aborted': 'Aborted',
  'Failed': 'Failed',
})

export var Phases = [
  Phase['Idle'],
  Phase['Loading'],
  Phase['Loaded'],
  Phase['Aborted'],
  Phase['Failed'],
]

export var PhaseTitle = {
  [Phase['Idle']]: 'Простой',
  [Phase['Loading']]: 'В процессе',
  [Phase['Loaded']]: 'Завершено',
  [Phase['Aborted']]: 'Оборвано',
  [Phase['Failed']]: 'Ошибка',
}

export var PhaseIcon = {
  [Phase['Idle']]: 'hero/outline/clock',
  [Phase['Loading']]: 'hero/outline/clock',
  [Phase['Loaded']]: 'hero/outline/check',
  [Phase['Aborted']]: 'hero/outline/signal-slash',
  [Phase['Failed']]: 'hero/outline/x-mark',
}
