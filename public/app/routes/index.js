import React from 'react'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

import App from 'App'
import Main from 'Main'

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Main} />
      </Route>
    </Router>
  )
}

export default Routes
