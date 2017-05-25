import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import LandingPage from 'LandingPage'
import App from 'App'

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute to='/home' component={LandingPage} />
      </Route>
    </Router>
  )
}

export default Routes
