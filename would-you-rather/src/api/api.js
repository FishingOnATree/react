import {
  _getUsers,
  _getQuestions,
  _saveQuestionAnswer
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}

export function saveQuestionAnswer(params) {
  return Promise.all(_saveQuestionAnswer(params))
    .then((result) => result)
    .catch((e) => {
      console.log("There is an error saving answer: " + e);
    })
}
