const INITIAL_STATE = []

let articlesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_ARTICLES':
      return action.articles
    default:
      return state
  }
}

export default articlesReducer
