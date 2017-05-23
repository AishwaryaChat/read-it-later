import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
const redux = require('redux')

import reducer from './reducers'
import Main from 'Main'

const INITIAL_STATE = {
  category: 'general',
  categories: [],
  sources: []
}

let store = createStore(reducer, INITIAL_STATE, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app')
)
