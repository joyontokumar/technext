import { applyMiddleware, compose, createStore } from 'redux'
import promiseMiddleware from 'redux-promise'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
export const store = createStore(
  rootReducer,
  compose(applyMiddleware(promiseMiddleware, thunk))
)
export default store
