import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import photosReducers from '../reducers/photos'
import errorsReducers from '../reducers/errors'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combineReducers({
    photos: photosReducers,
    errors: errorsReducers
  }),
  composeEnhancers(applyMiddleware(thunk))
)

store.subscribe(() => {
  console.log(store.getState())
})

export default store
