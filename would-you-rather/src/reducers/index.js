import { combineReducers } from 'redux'
import authedUser from './AuthedUser'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  authedUser,
  loadingBar: loadingBarReducer
})
