const redux = require('redux')

import categoriesReducer from './categories'
import categoryReducer from './category'
import sourcesReducer from './sources'
import sourceReducer from './source'
import articlesReducer from './articles'
import articleReducer from './article'

let reducer = redux.combineReducers({
  categories: categoriesReducer,
  sources: sourcesReducer,
  category: categoryReducer,
  source: sourceReducer,
  articles: articlesReducer,
  article: articleReducer
})

export default reducer
