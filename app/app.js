import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import {Provider} from 'react-redux'

import Main from 'Main'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
    </Route>
  </Router>,
  document.getElementById('app')
)
