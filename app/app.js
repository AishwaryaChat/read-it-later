import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
const redux = require('redux')
import {Route, Router, IndexRoute, hashHistory} from 'react-router'

import reducer from './reducers'
import Routes from './routes'
// import Sources from 'Sources'
// import Articles from 'Articles'

const INITIAL_STATE = {
  category: 'general',
  categories: [],
  sources: [],
  source: '',
  articles: []
}

let store = createStore(reducer, INITIAL_STATE, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app')
)
