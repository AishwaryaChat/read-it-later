const redux = require('redux')

import categoryReducer from './categories'

let reducer = redux.combineReducers({
  category: categoryReducer
})

export default reducer
