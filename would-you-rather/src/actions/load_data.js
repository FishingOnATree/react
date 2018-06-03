import { getInitialData } from '../api/api'
import { receiveUsers } from '../actions/Users'
import { showLoading, hideLoading } from 'react-redux-loading'

export function load_data () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, quetions }) => {
        dispatch(receiveUsers(users));
//        dispatch(receiveTweets(tweets));
        dispatch(hideLoading())
      })
  }
}
