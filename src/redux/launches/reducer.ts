import { LAUNCHES_LOADING, LAUNCHES_SUCCESS } from './types'

const initialState = {
  launches: [],
  error: false,
  success: false,
  loading: true,
}
const launchReducer = (state = initialState, action) => {
  switch (action.type) {
    case LAUNCHES_LOADING: {
      return state
    }
    case LAUNCHES_SUCCESS: {
      state = { ...state, ...action.payload }
      state.launches = action.payload
      state.loading = false
      return state
    }
    default: {
      state.loading = true
      return state
    }
  }
}

export default launchReducer
