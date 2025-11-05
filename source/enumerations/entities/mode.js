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

export const ModeNumberGenderTranslation = {
  ru: {
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
