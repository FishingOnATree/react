import { combineReducers } from 'redux'
import authedUser from './AuthedUser'
import users from './Users'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  authedUser,
  users,
  loadingBar: loadingBarReducer
})
