const SET_CATEGORY = 'SET_CATEGORY'

export let setCategory = (category) => {
  return {
    type: SET_CATEGORY,
    category
  }
}
