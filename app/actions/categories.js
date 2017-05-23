const SET_CATEGORIES = 'SET_CATEGORIES'

export let setCategory = (categories) => {
  return {
    type: SET_CATEGORIES,
    categories
  }
}
