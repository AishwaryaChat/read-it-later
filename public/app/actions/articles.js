const SET_ARTICLES = 'SET_ARTICLES'

export let setArticles = (articles) => {
  return {
    type: SET_ARTICLES,
    articles
  }
}
