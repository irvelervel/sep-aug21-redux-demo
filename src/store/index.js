import { createStore } from 'redux'
import mainReducer from '../reducers'

// this is going to be the initial state for the WHOLE application
// every time we start the app, or refresh the browser, the state will be resetted to this
export const initialState = {
  count: 0,
}

// createStore takes 3 arguments
// 1) the reducer function
// 2) the initial state of the application
// 3) any middleware or enhancer function

createStore(mainReducer, initialState)
