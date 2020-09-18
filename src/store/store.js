import { createStore } from 'redux'
import photosReducers from '../reducers/photos'

const store = createStore(photosReducers)

store.subscribe(() => {
  console.log(store.getState())
})

export default store
