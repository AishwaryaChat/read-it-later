import React from 'react'
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'

import Navbar from 'Navbar'

export default class Main extends React.Component {
  render () {
    return (
      <div>
        <Navbar />
      </div>
    )
  }
}