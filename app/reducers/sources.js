const INITIAL_STATE = []

let sourcesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_SOURCES':
      return action.sources
    default:
      return state
  }
}

export default sourcesReducer
