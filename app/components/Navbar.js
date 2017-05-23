import React from 'react'
import {connect} from 'react-redux'
import fetch from 'isomorphic-fetch'
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'

const actions = require('../actions')

class Navbar extends React.Component {

  constructor (props) {
    super(props)
    this.handleCategory = this.handleCategory.bind(this)
  }

  componentDidMount () {
    const {dispatch, categories} = this.props
    fetch('/categories')
    .then((data) => data.json())
    .then((data) => dispatch(actions.categories.setCategory(data)))
    .catch((err) => dispatch(actions.categories.setCategory(categories)))
  }

  handleCategory (e) {
    console.log(e.target.innerHTML)
  }

  render () {
    const {categories} = this.props
    return (
      <nav>
        <div className='nav-wrapper'>
          <a href='#' className='brand-logo'>Read-It-Later</a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <a href='#' className='btn dropdown-button' data-activates='dropdown'>Categories</a>
              <ul id='dropdown' className='dropdown-content'>
                {
                  categories.map((cat) => {
                    return (
                      <li onClick={e => { this.handleCategory(e) }} key={cat}>
                        <a href='#'>{cat}</a>
                      </li>
                    )
                  })
                }
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
    categories: state.categories
  }
})(Navbar)
