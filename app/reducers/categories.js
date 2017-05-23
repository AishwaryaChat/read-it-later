const INITIAL_STATE = ''

let categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CATEGORY':
      return action.category
    default:
      return state
  }
}

export default categoryReducer
