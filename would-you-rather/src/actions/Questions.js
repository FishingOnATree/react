export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const ADD_QUESTION = 'ADD_NEW_QUESTION';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function answerQuestion(authedUser, questionId, option) {
  return {
    type: ANSWER_QUESTION,
    questionId,
    option,
    authedUser
  }
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}
