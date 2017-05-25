import React from 'react'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

import App from 'App'
import LandingPage from 'LandingPage'
import Signup from 'Signup'
import Login from 'Login'

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={LandingPage} />
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
      </Route>
    </Router>
  )
}

export default Routes
