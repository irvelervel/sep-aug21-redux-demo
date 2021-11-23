// a reducer function always takes 2 arguments:
// 1) the current state of the application
// 2) the action that just got dispatched

import { initialState } from '../store'

// the state parameter defaults to the initial one for good measure
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      // we're going to fall into the default case if no other case is matched
      return state
  }
}

export default mainReducer
