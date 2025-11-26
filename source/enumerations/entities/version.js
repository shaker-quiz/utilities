export const Version = Object.freeze({
  'Actual': 'Actual',
  'Legacy': 'Legacy',
})

export const Versions = Object.freeze([
  Version['Actual'],
  Version['Legacy'],
])

export const VersionTitle = Object.freeze({
  [Version['Actual']]: 'Актуальная',
  [Version['Legacy']]: 'Старая',
})

const ValueChatappVersion = Object.freeze({
  'false': Version['Actual'],
  'true': Version['Legacy'],
})

const ChatappVersionShape = Object.freeze({
  [Version['Actual']]: Object.freeze({
    chatapp_legacy: false,
  }),

  [Version['Legacy']]: Object.freeze({
    chatapp_legacy: true,
  }),
})

/** @returns {keyof typeof Version | 'Unknown'} */
export const inferVersion = Object.freeze(value =>
  ValueChatappVersion[value?.chatapp_legacy]
    ?? ValueChatappVersion[value]
    ?? Version[value]
    ?? 'Unknown'
)

/** @returns {typeof ChatappVersionShape[keyof typeof ChatappVersionShape] | { chatapp_legacy: null }} */
export const inferVersionShape = Object.freeze(value =>
  ChatappVersionShape[value]
    ?? { chatapp_legacy: null }
)
