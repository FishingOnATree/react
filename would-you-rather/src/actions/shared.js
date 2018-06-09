import { getInitialData, saveQuestionAnswer } from '../api/api'
import { receiveUsers } from '../actions/Users'
import { receiveQuestions } from '../actions/Questions'
import { showLoading, hideLoading } from 'react-redux-loading'
import { answerQuestion } from '../actions/Questions'
import { addAnswer } from '../actions/Users'

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

export function handleAnswerQuestion(authedUser, qid, answer) {
  return (dispatch) => {
    dispatch(showLoading());
    return saveQuestionAnswer({ authedUser, qid, answer }).then(
      () => {
        dispatch(answerQuestion(authedUser, qid, answer));
        dispatch(addAnswer(authedUser, qid, answer));
        dispatch(hideLoading());
      }).catch((e) => {
        console.log("error saving answers: " + e);
      })
  }
}
