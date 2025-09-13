export var RegistrationChannel = /** @type {const} */ ({
  'vkontakte': 'vkontakte',
  'telegramBot': 'telegramBot',
  'email': 'email',
})

export var RegistrationChannels = Object.values(RegistrationChannel)

export var RegistrationChannelWeight = {
  [RegistrationChannel.vkontakte]: 0,
  [RegistrationChannel.telegramBot]: 1,
  [RegistrationChannel.email]: 2,
}

export var RegistationChannelTitle = {
  [RegistrationChannel.vkontakte]: 'Вконтакте',
  [RegistrationChannel.telegramBot]: 'Телеграм',
  [RegistrationChannel.email]: 'Электронная почта',
}

/** @type {Record<RegistrationChannel, Icon>} */
export var RegistationChannelIcon = {
  [RegistrationChannel.vkontakte]: 'brand/solid/vk',
  [RegistrationChannel.telegramBot]: 'brand/solid/telegram',
  [RegistrationChannel.email]: 'hero/solid/at-symbol',
}
