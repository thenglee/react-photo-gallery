const photosReducers = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_PHOTOS':
      return action.photos
    default:
      return state
  }
}

export default photosReducers
