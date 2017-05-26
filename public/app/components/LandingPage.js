import React from 'react'
import '../../views/styles/main.css'
import {Link} from 'react-router'
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'

class LandingPage extends React.Component {
  render () {
    return (
      <div>
        <LandingNavbar />
        <LandingImage />
      </div>
    )
  }
}

class LandingNavbar extends React.Component {
  render () {
    return (
      <nav>
        <div className='nav-wrapper grey darken-3'>
          <a href='#' className='brand-logo'>Read-It-Later</a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li><Link to='signup'>Sign Up</Link></li>
            <li><Link to='login'>Log In</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

class LandingImage extends React.Component {
  render () {
    return (
      <div className='outer-image-container' />
    )
  }
}

export default LandingPage
