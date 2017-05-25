import React from 'react'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

import App from 'App'
import LandingPage from 'LandingPage'
import Signup from 'Signup'

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={LandingPage} />
        <Route path='/signup' component={Signup} />
      </Route>
    </Router>
  )
}

export default Routes
