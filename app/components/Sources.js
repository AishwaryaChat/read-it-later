import React from 'react'
import {connect} from 'react-redux'
import fetch from 'isomorphic-fetch'
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'

const actions = require('../actions')

class Sources extends React.Component {

  componentWillMount () {
    let {category, dispatch, sources} = this.props
    fetch(`/fetchSources/${category}`)
    .then((data) => data.json())
    .then((data) => dispatch(actions.sources.setSources(data)))
    .catch((err) => dispatch(actions.sources.setSources(sources)))
  }

  render () {
    console.log(this.props)
    let {sources} = this.props
    let description = ''
    return (
      <div>
        <div className='row'>
          {
            sources.map((src) => {
              if (src.description.length >= 50) {
                description = src.description.substring(0, 50) + '...'
              } else {
                description = src.description
              }
              return (
                <div className='col s12 m6' key={src.name}>
                  <div className='card blue-grey darken-1'>
                    <div className='card-content white-text'>
                      <span className='card-title'>{src.name}</span>
                      <p>{description}</p>
                    </div>
                    <div className='card-action'>
                      <a href='#'>Top Articles</a>
                      <a href={src.url}>Go to the site</a>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default connect((state) => {
  return {
    category: state.category,
    sources: state.sources
  }
})(Sources)
