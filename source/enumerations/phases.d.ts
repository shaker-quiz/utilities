export let Phases: {
  Aborted: 'Aborted'
  Failed: 'Failed'
  Idle: 'Idle'
  Loaded: 'Loaded'
  Loading: 'Loading'
}

export type Phases = typeof Phases

export type PhasesUnion = keyof Phases
