import { applyMiddleware, compose, createStore } from 'redux'
import { persistStore } from 'redux-persist'
import promiseMiddleware from 'redux-promise'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(promiseMiddleware, thunk)
    //             process.env.NODE_ENV !== 'production' && module.hot ?
    //     (applyMiddleware(promiseMiddleware, thunk),
    //             window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)
    //   :
    //       applyMiddleware(promiseMiddleware, thunk)
    //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
export const persistor = persistStore(store)
