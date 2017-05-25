import React from 'react'
import {connect} from 'react-redux'
import fetch from 'isomorphic-fetch'
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'
import {hashHistory} from 'react-router'

const actions = require('../actions')

class Sources extends React.Component {

  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e, id) {
    let {dispatch} = this.props
    dispatch(actions.source.setSource(id))
    const url = 'https://newsapi.org/v1/articles?source=' + id + '&sortBy=top&apiKey=c6a6b6c8a55d4ddcacd7ca0a32c8f20a'
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 'ok') {
        dispatch(actions.articles.setArticles(data.articles))
      }
    })
    .catch((err) => console.log(err))
    // hashHistory.push('articles')
  }

  componentWillMount () {
    let {category, dispatch} = this.props
    fetch(`/fetchSources/${category}`)
    .then((data) => data.json())
    .then((data) => dispatch(actions.sources.setSources(data)))
    .catch((err) => console.log(err))
  }

  render () {
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
                      <a href='#' onClick={e => this.handleClick(e, src.id)}>Top Articles</a>
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
