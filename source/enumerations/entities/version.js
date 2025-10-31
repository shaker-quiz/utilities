export var Version = /** @type {const} */ ({
  'Actual': 'Actual',
  'Legacy': 'Legacy',
  'Unknown': 'Unknown',
})

export var Versions = Object.values(Version)

export var VersionWeight = {
  [Version['Actual']]: 0,
  [Version['Legacy']]: 1,
  [Version['Unknown']]: 2,
}

export var VersionTitle = {
  [Version['Actual']]: 'Актуальная',
  [Version['Legacy']]: 'Старая',
  [Version['Unknown']]: 'Неизвестно',
}

export var ChatappVersion = {
  [Version['Actual']]: Version['Actual'],
  [Version['Legacy']]: Version['Legacy'],
  [Version['Unknown']]: Version['Unknown'],
}

export var ChatappVersions = Object.values(ChatappVersion)

export var ChatappVersionWeight = {
  [Version['Actual']]: 0,
  [Version['Legacy']]: 1,
  [Version['Unknown']]: 2,
}

export var ChatappVersionShape = /** @type {const} */ ({
  [Version['Actual']]: {
    chatapp_legacy: false,
  },

  [Version['Legacy']]: {
    chatapp_legacy: true,
  },

  [Version['Unknown']]: {
    chatapp_legacy: null,
  },
})

export var ChatappVersionShapes = Object.entries(ChatappVersionShape)

export var getChatappVersion = value => {
  switch (typeof value) {
    case 'object':
      return ChatappVersionShapes
        .find(([, shape]) => shape.chatapp_legacy === value.chatapp_legacy)
        ?.at(0)
        ?? ChatappVersion['Unknown']

    case 'string':
      return value in ChatappVersionShape
        ? ChatappVersionShape[value]
        : ChatappVersionShape[ChatappVersion['Unknown']]

    default:
      return ChatappVersion['Unknown']
  }
}
