const INITIAL_STATE = []

let sourceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_SOURCE':
      return action.source
    default:
      return state
  }
}

export default sourceReducer
