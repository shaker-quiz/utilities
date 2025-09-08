export var Phase = /** @type {const} */ ({
  'Idle': 'Idle',
  'Loading': 'Loading',
  'Loaded': 'Loaded',
  'Aborted': 'Aborted',
  'Failed': 'Failed',
})

export var Phases = Object.values(Phase)

export var PhaseWieght = {
  [Phase.Idle]: 0,
  [Phase.Loading]: 1,
  [Phase.Loaded]: 2,
  [Phase.Aborted]: 3,
  [Phase.Failed]: 4,
}

export var PhaseTitle = {
  [Phase.Idle]: 'Простой',
  [Phase.Loading]: 'В процессе',
  [Phase.Loaded]: 'Завершено',
  [Phase.Aborted]: 'Оборвано',
  [Phase.Failed]: 'Ошибка',
}

/** @type {Record<Phase, Icon>} */
export var PhaseIcon = {
  [Phase.Idle]: 'hero/outline/clock',
  [Phase.Loading]: 'hero/outline/clock',
  [Phase.Loaded]: 'hero/outline/check',
  [Phase.Aborted]: 'hero/outline/x-mark',
  [Phase.Failed]: 'hero/outline/x-mark',
}

export var PhaseColor = {
  [Phase.Idle]: 'text-default',
  [Phase.Loading]: 'text-default',
  [Phase.Loaded]: 'text-success',
  [Phase.Aborted]: 'text-warning',
  [Phase.Failed]: 'text-danger',
}
