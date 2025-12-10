export const Channel = Object.freeze({
  'vkontakte': 'vkontakte',
  'telegramBot': 'telegramBot',
  'email': 'email',
})

/** @satisfies {Array<keyof typeof Channel>} */
export const Channels = Object.freeze([
  'vkontakte',
  'telegramBot',
  'email',
])

/** @satisfies {Record<keyof typeof Channel, string>} */
export const ChannelTitle = Object.freeze({
  'vkontakte': 'Вконтакте',
  'telegramBot': 'Телеграм',
  'email': 'Электронная почта',
})

/** @satisfies {Record<keyof typeof Channel, string>} */
export const ChannelIcon = Object.freeze({
  'vkontakte': 'brand/solid/vk',
  'telegramBot': 'brand/solid/telegram',
  'email': 'hero/solid/at-symbol',
})
