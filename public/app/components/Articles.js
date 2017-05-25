import React from 'react'
import {connect} from 'react-redux'
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'

export class Articles extends React.Component {
  render () {
    let {articles} = this.props
    return (
      <div>
        {
          articles.map((art) => {
            return (
              <li key={art.title}><a target='_blank' href={art.url}>{art.title}</a></li>
            )
          })
        }
      </div>
    )
  }
}

export default connect((state) => {
  return {
    articles: state.articles
  }
})(Articles)
