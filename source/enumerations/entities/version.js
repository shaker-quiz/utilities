export const Version = Object.freeze({
  'Latest': 'Latest',
  'Legacy': 'Legacy',
})

export const Versions = Object.freeze([
  Version['Latest'],
  Version['Legacy'],
  'Unknown',
])

export const VersionTitle = Object.freeze({
  [Version['Latest']]: 'Актуальная',
  [Version['Legacy']]: 'Старая',
  ['Unknown']: 'Неизвестно',
})

/** @returns {keyof typeof Version | 'Unknown'} */
export const inferVersion = Object.freeze(value =>
  Version[value?.chatapp_version]
    ?? Version[value]
    ?? 'Unknown'
)
