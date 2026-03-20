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
})

export let ChatappMailingFeature = /** @type {const} */ ({
  'Registration/Created': 'Registration/Created',
  'Registration/Channel/Confirmed': 'Registration/Channel/Confirmed',
  'Registration/Status/Changed': 'Registration/Status/Changed',
  'Registration/Lineup/Changed': 'Registration/Lineup/Changed',
  'Registration/Confirmation': 'Registration/Confirmation',
  'Text': 'Text',
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
})
