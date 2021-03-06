import { combineReducers } from 'redux'
import authedUser from './AuthedUser'
import questions from './Questions'
import users from './Users'
import viewAnswered from './ViewAnswered'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  authedUser,
  users,
  questions,
  viewAnswered,
  loadingBar: loadingBarReducer
})
