import {
  _getUsers,
  _getQuestions,
  _saveQuestionAnswer,
  _saveQuestion
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
  return _saveQuestionAnswer(params)
    .then((result) => result)
    .catch((e) => {
      console.log("There is an error saving answer: " + e);
    })
}

export function saveAddQuestion(question) {
  return _saveQuestion(question)
    .then((result) => result)
    .catch((e) => {
      console.log("There is an error adding new answer: " + e);
    })
}
