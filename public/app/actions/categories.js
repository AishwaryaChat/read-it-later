const SET_CATEGORIES = 'SET_CATEGORIES'

export let setCategories = (categories) => {
  return {
    type: SET_CATEGORIES,
    categories
  }
}
