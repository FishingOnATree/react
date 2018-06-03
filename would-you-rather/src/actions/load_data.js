import { getInitialData } from '../api/api'
import { receiveUsers } from '../actions/Users'
import { receiveQuestions } from '../actions/Questions'
import { showLoading, hideLoading } from 'react-redux-loading'

export function load_data () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
        dispatch(hideLoading())
      })
  }
}
