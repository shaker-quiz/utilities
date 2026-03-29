export let MailingFeature = /** @type {const} */ ({
  'Registration/Created': 'Registration/Created',
  'Registration/Channel/Confirmed': 'Registration/Channel/Confirmed',
  'Registration/Status/Changed': 'Registration/Status/Changed',
  'Registration/Lineup/Changed': 'Registration/Lineup/Changed',
  'Registration/Confirmation': 'Registration/Confirmation',
  'Registration/Reinstated': 'Registration/Reinstated',
  'Registration/Restored': 'Registration/Restored',
  'Text': 'Text',
})

export let ChatappMailingTemplate = /** @type {const} */ ({
  'Registration/Cancelled': 'Registration/Cancelled',
  'Registration/Channel/Confirmed/Alone/Main': 'Registration/Channel/Confirmed/Alone/Main',
  'Registration/Channel/Confirmed/Alone/Reserve': 'Registration/Channel/Confirmed/Alone/Reserve',
  'Registration/Channel/Confirmed/Team/Main': 'Registration/Channel/Confirmed/Team/Main',
  'Registration/Channel/Confirmed/Team/Reserve': 'Registration/Channel/Confirmed/Team/Reserve',
  'Registration/Confirmation/Alone/Main/Any': 'Registration/Confirmation/Alone/Main/Any',
  'Registration/Confirmation/Alone/Main/Cash': 'Registration/Confirmation/Alone/Main/Cash',
  'Registration/Confirmation/Alone/Reserve/Any': 'Registration/Confirmation/Alone/Reserve/Any',
  'Registration/Confirmation/Alone/Reserve/Cash': 'Registration/Confirmation/Alone/Reserve/Cash',
  'Registration/Confirmation/Team/Main/Any': 'Registration/Confirmation/Team/Main/Any',
  'Registration/Confirmation/Team/Main/Cash': 'Registration/Confirmation/Team/Main/Cash',
  'Registration/Confirmation/Team/Reserve/Any': 'Registration/Confirmation/Team/Reserve/Any',
  'Registration/Confirmation/Team/Reserve/Cash': 'Registration/Confirmation/Team/Reserve/Cash',
  'Registration/Confirmed/Alone': 'Registration/Confirmed/Alone',
  'Registration/Confirmed/Team': 'Registration/Confirmed/Team',
  'Registration/Created/Alone/Main': 'Registration/Created/Alone/Main',
  'Registration/Created/Alone/Reserve': 'Registration/Created/Alone/Reserve',
  'Registration/Created/Team/Main': 'Registration/Created/Team/Main',
  'Registration/Created/Team/Reserve': 'Registration/Created/Team/Reserve',
  'Registration/Promoted/Alone': 'Registration/Promoted/Alone',
  'Registration/Promoted/Team': 'Registration/Promoted/Team',
  'Registration/Reserved/Alone': 'Registration/Reserved/Alone',
  'Registration/Reserved/Team': 'Registration/Reserved/Team',
  'Registration/Reinstated/Alone': 'Registration/Reinstated/Alone',
  'Registration/Reinstated/Team': 'Registration/Reinstated/Team',
  'Registration/Restored/Alone/Main': 'Registration/Restored/Alone/Main',
  'Registration/Restored/Alone/Reserve': 'Registration/Restored/Alone/Reserve',
  'Registration/Restored/Team/Main': 'Registration/Restored/Team/Main',
  'Registration/Restored/Team/Reserve': 'Registration/Restored/Team/Reserve',
})

export let ChatappMailingFeature = /** @type {const} */ ({
  [MailingFeature['Registration/Created']]: MailingFeature['Registration/Created'],
  [MailingFeature['Registration/Channel/Confirmed']]: MailingFeature['Registration/Channel/Confirmed'],
  [MailingFeature['Registration/Status/Changed']]: MailingFeature['Registration/Status/Changed'],
  [MailingFeature['Registration/Lineup/Changed']]: MailingFeature['Registration/Lineup/Changed'],
  [MailingFeature['Registration/Confirmation']]: MailingFeature['Registration/Confirmation'],
  [MailingFeature['Registration/Reinstated']]: MailingFeature['Registration/Reinstated'],
  [MailingFeature['Registration/Restored']]: MailingFeature['Registration/Restored'],
  [MailingFeature['Text']]: MailingFeature['Text'],
})

export let ChatappMailingFeatureContextTemplate = /** @type {const} */ ({
  [ChatappMailingFeature['Registration/Created']]: {
    'Alone/Main': ChatappMailingTemplate['Registration/Created/Alone/Main'],
    'Team/Main': ChatappMailingTemplate['Registration/Created/Team/Main'],
    'Alone/Reserve': ChatappMailingTemplate['Registration/Created/Alone/Reserve'],
    'Team/Reserve': ChatappMailingTemplate['Registration/Created/Team/Reserve'],
  },

  [ChatappMailingFeature['Registration/Channel/Confirmed']]: {
    'Alone/Main': ChatappMailingTemplate['Registration/Channel/Confirmed/Alone/Main'],
    'Alone/Reserve': ChatappMailingTemplate['Registration/Channel/Confirmed/Alone/Reserve'],
    'Team/Main': ChatappMailingTemplate['Registration/Channel/Confirmed/Team/Main'],
    'Team/Reserve': ChatappMailingTemplate['Registration/Channel/Confirmed/Team/Reserve'],
  },

  [ChatappMailingFeature['Registration/Status/Changed']]: {
    'Alone/Confirmed': ChatappMailingTemplate['Registration/Confirmed/Alone'],
    'Team/Confirmed': ChatappMailingTemplate['Registration/Confirmed/Team'],
    'Alone/Cancelled': ChatappMailingTemplate['Registration/Cancelled'],
    'Team/Cancelled': ChatappMailingTemplate['Registration/Cancelled'],
  },

  [ChatappMailingFeature['Registration/Lineup/Changed']]: {
    'Alone/Main': ChatappMailingTemplate['Registration/Promoted/Alone'],
    'Team/Main': ChatappMailingTemplate['Registration/Promoted/Team'],
    'Alone/Reserve': ChatappMailingTemplate['Registration/Reserved/Alone'],
    'Team/Reserve': ChatappMailingTemplate['Registration/Reserved/Team'],
  },

  [ChatappMailingFeature['Registration/Confirmation']]: {
    'Alone/Main/Any': ChatappMailingTemplate['Registration/Confirmation/Alone/Main/Any'],
    'Alone/Main/Cash': ChatappMailingTemplate['Registration/Confirmation/Alone/Main/Cash'],
    'Alone/Reserve/Any': ChatappMailingTemplate['Registration/Confirmation/Alone/Reserve/Any'],
    'Alone/Reserve/Cash': ChatappMailingTemplate['Registration/Confirmation/Alone/Reserve/Cash'],
    'Team/Main/Any': ChatappMailingTemplate['Registration/Confirmation/Team/Main/Any'],
    'Team/Main/Cash': ChatappMailingTemplate['Registration/Confirmation/Team/Main/Cash'],
    'Team/Reserve/Any': ChatappMailingTemplate['Registration/Confirmation/Team/Reserve/Any'],
    'Team/Reserve/Cash': ChatappMailingTemplate['Registration/Confirmation/Team/Reserve/Cash'],
  },

  [ChatappMailingFeature['Text']]: {
    'Text': 'Text',
  },

  [ChatappMailingFeature['Registration/Reinstated']]: {
    'Alone': ChatappMailingTemplate['Registration/Reinstated/Alone'],
    'Team':  ChatappMailingTemplate['Registration/Reinstated/Team'],
  },

  [ChatappMailingFeature['Registration/Restored']]: {
    'Alone/Main':    ChatappMailingTemplate['Registration/Restored/Alone/Main'],
    'Alone/Reserve': ChatappMailingTemplate['Registration/Restored/Alone/Reserve'],
    'Team/Main':     ChatappMailingTemplate['Registration/Restored/Team/Main'],
    'Team/Reserve':  ChatappMailingTemplate['Registration/Restored/Team/Reserve'],
  },
})

export let TelegramMailingTemplate = /** @type {const} */ ({
  'Registration/Cancelled/Main': 'Registration/Cancelled/Main',
  'Registration/Cancelled/Reserve': 'Registration/Cancelled/Reserve',
  'Registration/Confirmed/Main': 'Registration/Confirmed/Main',
  'Registration/Created/Main/Basic': 'Registration/Created/Main/Basic',
  'Registration/Created/Main/Celebrant': 'Registration/Created/Main/Celebrant',
  'Registration/Created/Reserve/Basic': 'Registration/Created/Reserve/Basic',
  'Registration/Created/Reserve/Celebrant': 'Registration/Created/Reserve/Celebrant',
  'Registration/Restored/Main/Basic':        'Registration/Restored/Main/Basic',
  'Registration/Restored/Main/Celebrant':    'Registration/Restored/Main/Celebrant',
  'Registration/Restored/Reserve/Basic':     'Registration/Restored/Reserve/Basic',
  'Registration/Restored/Reserve/Celebrant': 'Registration/Restored/Reserve/Celebrant',
})

export let TelegramMailingFeature = /** @type {const} */ ({
  [MailingFeature['Registration/Created']]: MailingFeature['Registration/Created'],
  [MailingFeature['Registration/Status/Changed']]: MailingFeature['Registration/Status/Changed'],
  [MailingFeature['Registration/Restored']]: MailingFeature['Registration/Restored'],
  [MailingFeature['Text']]: MailingFeature['Text'],
})

export let TelegramMailingFeatureContextTemplate = {
  [TelegramMailingFeature['Registration/Created']]: {
    'Main/Basic': TelegramMailingTemplate['Registration/Created/Main/Basic'],
    'Main/Celebrant': TelegramMailingTemplate['Registration/Created/Main/Celebrant'],
    'Reserve/Basic': TelegramMailingTemplate['Registration/Created/Reserve/Basic'],
    'Reserve/Celebrant': TelegramMailingTemplate['Registration/Created/Reserve/Celebrant'],
  },

  [TelegramMailingFeature['Registration/Status/Changed']]: {
    'Confirmed/Main': TelegramMailingTemplate['Registration/Confirmed/Main'],
    'Confirmed/Reserve': null,
    'Cancelled/Main': TelegramMailingTemplate['Registration/Cancelled/Main'],
    'Cancelled/Reserve': TelegramMailingTemplate['Registration/Cancelled/Reserve'],
  },

  [TelegramMailingFeature['Registration/Restored']]: {
    'Main/Basic':        TelegramMailingTemplate['Registration/Restored/Main/Basic'],
    'Main/Celebrant':    TelegramMailingTemplate['Registration/Restored/Main/Celebrant'],
    'Reserve/Basic':     TelegramMailingTemplate['Registration/Restored/Reserve/Basic'],
    'Reserve/Celebrant': TelegramMailingTemplate['Registration/Restored/Reserve/Celebrant'],
  },
}
