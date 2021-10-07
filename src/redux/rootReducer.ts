import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from './launches/reducer'
const persistConfig = {
  key: 'root',
  storage,
  reduxStore: ['authReducer'],
}
const rootReducer = combineReducers({
  authReducer,
})
export default persistReducer(persistConfig, rootReducer)
