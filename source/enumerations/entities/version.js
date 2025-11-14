export var ChatappVersion = /** @type {const} */ ({
  'Actual': 'Actual',
  'Legacy': 'Legacy',
})

export var ChatappVersions = [
  ChatappVersion['Actual'],
  ChatappVersion['Legacy'],
]

export var VersionTitle = {
  [ChatappVersion['Actual']]: 'Актуальная',
  [ChatappVersion['Legacy']]: 'Старая',
}

var ValueChatappVersion = {
  ['false']: ChatappVersion['Actual'],
  ['true']: ChatappVersion['Legacy'],
}

var ChatappVersionShape = /** @type {const} */ ({
  [ChatappVersion['Actual']]: {
    chatapp_legacy: false,
  },

  [ChatappVersion['Legacy']]: {
    chatapp_legacy: true,
  },
})

/** @returns {keyof typeof ChatappVersion | 'Unknown'} */
export var inferChatappVersion = value =>
  ValueChatappVersion[value?.chatapp_legacy]
    ?? ChatappVersion[value]
    ?? 'Unknown'

/** @returns {typeof ChatappVersionShape[keyof typeof ChatappVersionShape] | { readonly chatapp_legacy: null }} */
export var inferChatappVersionShape = value =>
  ChatappVersionShape[value]
    ?? { chatapp_legacy: null }
