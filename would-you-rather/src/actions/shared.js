import { getInitialData, saveQuestionAnswer, saveAddQuestion } from '../api/api'
import { receiveUsers, addAnswer, writeQuestion } from '../actions/Users'
import { receiveQuestions, answerQuestion, addQuestion } from '../actions/Questions'
import { showLoading, hideLoading } from 'react-redux-loading'

export function load_data () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        // update state below
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

export function handleAddQuestion(optionOneText, optionTwoText, author) {
  return (dispatch) => {
    dispatch(showLoading());
    return saveAddQuestion({optionOneText, optionTwoText, author}).then(
      (formatedQuestion) => {
        dispatch(writeQuestion(author, formatedQuestion.id));
        dispatch(addQuestion(formatedQuestion));
        dispatch(hideLoading());
      }).catch((e) => {
        console.log("error saving answers: " + e);
      })
  }
}
