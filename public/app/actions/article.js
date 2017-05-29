const SAVE_ARTICLE = 'SAVE_ARTICLE'

export let saveArticle = (article) => {
  return {
    type: SAVE_ARTICLE,
    article
  }
}
