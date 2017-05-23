const redux = require('redux')

import categoryReducer from './category'
import categoriesReducer from './categories'

let reducer = redux.combineReducers({
  category: categoryReducer,
  categories: categoriesReducer

})

export default reducer
