import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import reducer from './reducers'
import Main from 'Main'

const INITIAL_STATE = {
  category: 'general'
}
let store = createStore(reducer, INITIAL_STATE)

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app')
)
