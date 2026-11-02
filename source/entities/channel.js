export const Channel = Object.freeze({
  Email: 'Email',
  Telegram: 'Telegram',
  Vkontakte: 'Vkontakte',
})

export const Channels = Object.freeze(Object.values(Channel))

export const ChannelRouteParamValue = Object.freeze({
  email: 'email',
  telegram: 'telegram',
  vkontakte: 'vkontakte',
})

export const ChannelRouteParamValues = Object.freeze(Object.values(ChannelRouteParamValue))

export const ChannelRouteParamChannel = Object.freeze({
  [ChannelRouteParamValue.email]: Channel.Email,
  [ChannelRouteParamValue.telegram]: Channel.Telegram,
  [ChannelRouteParamValue.vkontakte]: Channel.Vkontakte,
})

export const ChannelRouteParamChannels = Object.freeze(Object.values(ChannelRouteParamChannel))
