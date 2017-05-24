import React from 'react'
import {connect} from 'react-redux'
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'

import Navbar from 'Navbar'
import Sources from 'Sources'
import Articles from 'Articles'

class Main extends React.Component {
  render () {
    console.log(this.props)
    let {articles} = this.props
    let Comp = ''
    if (articles.length > 0) {
      Comp = Articles
    } else {
      Comp = Sources
    }
    return (
      <div>
        <Navbar />
        <Comp />
      </div>
    )
  }
}

export default connect((state) => {
  return state
})(Main)
