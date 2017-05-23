const INITIAL_STATE = []

let categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CATEGORIES':
      return action.categories
    default:
      return state
  }
}

export default categoriesReducer
