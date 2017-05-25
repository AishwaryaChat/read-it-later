import React from 'react'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

import App from 'App'
import LandingPage from 'LandingPage'
import Signup from 'Signup'
import Login from 'Login'
import Main from 'Main'

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={LandingPage} />
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
        <Route path='/main' component={Main} />
      </Route>
    </Router>
  )
}

export default Routes
