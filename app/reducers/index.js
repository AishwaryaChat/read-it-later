const redux = require('redux')

import categoryReducer from './category'
import categoriesReducer from './categories'
import sourcesReducer from './sources'

let reducer = redux.combineReducers({
  category: categoryReducer,
  categories: categoriesReducer,
  sources: sourcesReducer
})

export default reducer
