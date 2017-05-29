const INITIAL_STATE = {}

let articleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'saveArticle':
      return action.article
    default:
      return state
  }
}

export default articleReducer
