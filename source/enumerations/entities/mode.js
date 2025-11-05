export var Mode = /** @type {const} */ ({
  'Any': 'Any',
  'None': 'None',
  'Single': 'Single',
  'Many': 'Many',
  'All': 'All',
  'Known': 'Known',
  'Unknown': 'Unknown',
})

export var Modes = [
  Mode['Any'],
  Mode['None'],
  Mode['Single'],
  Mode['Many'],
  Mode['All'],
  Mode['Known'],
  Mode['Unknown'],
]

export var ModeModes = {
  [Mode['Any']]: [
    Mode['Any'],
    Mode['None'],
    Mode['Single'],
    Mode['Many'],
    Mode['All'],
    Mode['Known'],
    Mode['Unknown'],
  ],

  [Mode['None']]: [
    Mode['None'],
  ],

  [Mode['Single']]: [
    Mode['Single'],
  ],

  [Mode['Many']]: [
    Mode['Many'],
  ],

  [Mode['All']]: [
    Mode['All'],
  ],

  [Mode['Known']]: [
    Mode['Known'],
  ],

  [Mode['Unknown']]: [
    Mode['Unknown'],
  ],
}

export var ModeIcon = {
  [Mode['Any']]: 'hero/outline/square-2-stack',
  [Mode['None']]: 'hero/outline/x-mark',
  [Mode['Single']]: 'hero/outline/no-symbol',
  [Mode['Many']]: 'hero/outline/no-symbol',
  [Mode['All']]: 'hero/outline/no-symbol',
  [Mode['Known']]: 'hero/outline/check',
  [Mode['Unknown']]: 'hero/outline/no-symbol',
}

export var ModeNumberGenderTitle = {
  singular: {
    masculine: {
      [Mode['Any']]: 'Любой',
      [Mode['None']]: 'Пуст',
      [Mode['Single']]: 'Один',
      [Mode['Many']]: 'Много',
      [Mode['All']]: 'Все',
      [Mode['Known']]: 'Назначено',
      [Mode['Unknown']]: 'Неизвестно',
    },

    feminine: {
      [Mode['Any']]: 'Любая',
      [Mode['None']]: 'Пусто',
      [Mode['Single']]: 'Одна',
      [Mode['Many']]: 'Много',
      [Mode['All']]: 'Все',
      [Mode['Known']]: 'Назначено',
      [Mode['Unknown']]: 'Неизвестно',
    },

    neuter: {
      [Mode['Any']]: 'Любое',
      [Mode['None']]: 'Пусто',
      [Mode['Single']]: 'Одно',
      [Mode['Many']]: 'Много',
      [Mode['All']]: 'Все',
      [Mode['Known']]: 'Назначено',
      [Mode['Unknown']]: 'Неизвестно',
    },
  },

  plural: {
    masculine: {},

    feminine: {},

    indeterminate: {
      [Mode['Any']]: 'Любые',
      [Mode['None']]: 'Пусто',
      [Mode['Single']]: 'Один',
      [Mode['Many']]: 'Много',
      [Mode['All']]: 'Все',
      [Mode['Known']]: 'Назначено',
      [Mode['Unknown']]: 'Неизвестно',
    },
  },
}

/**
 * @returns {keyof typeof Mode}
 */
export var inferMode = value => {
  switch (typeof value) {
    case 'string':
      return value in Mode ? Mode[value] : Mode['Unknown']

    case 'object':
      return inferMode(value?.mode)

    default:
      return Mode['Unknown']
  }
}
