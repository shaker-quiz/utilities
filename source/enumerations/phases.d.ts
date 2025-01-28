export let Phases: {
  Aborted: 'Aborted'
  Failed: 'Failed'
  Idle: 'Idle'
  Loaded: 'Loaded'
  Loading: 'Loading'
}

type Phases = typeof Phases

type PhasesUnion = keyof Phases
