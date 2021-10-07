import { LAUNCHES_SUCCESS } from './types'

const initialState = {
  arr: [],
  error: false,
  success: false,
  loading: false,
}

const authRedcer = (state = initialState, action) => {
  switch (action.type) {
    case LAUNCHES_SUCCESS: {
      state = { ...state, ...action.payload }
      state.arr = action.payload
      state.loading = false
      return state
    }
    default: {
      state.loading = false
      return state
    }
  }
}

export default authRedcer
