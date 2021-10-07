import { combineReducers } from 'redux'
import launchReducer from './launches/reducer'
const rootReducer = combineReducers({
  launchReducer,
})
export default rootReducer
