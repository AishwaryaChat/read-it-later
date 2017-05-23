import React from 'react'
import {connect} from 'react-redux'
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'

class Navbar extends React.Component {
  render () {
    return (
      <nav>
        <div className='nav-wrapper'>
          <a href='#' className='brand-logo'>Read-It-Later</a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <a href='#' className='btn dropdown-button' data-activates='dropdown'>Categories</a>
              <ul id='dropdown' className='dropdown-content'>
                <li><a href='#'>General</a></li>
                <li className='divider' />
                <li><a href='#!'>Business</a></li>
                <li className='divider' />
                <li><a href='#'>Sports</a></li>
                <li className='divider' />
                <li><a href='#'>Bollywood</a></li>
              </ul>
            </li>
            <li><a href='#'>Saved Articles</a></li>
            <li><a href='#'>Settings</a></li>
            <li><a href='#'>Logout</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default connect((state) => {
  return {
    category: state.category
  }
})(Navbar)
