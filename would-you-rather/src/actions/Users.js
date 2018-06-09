export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_ANSWER = 'ADD_ANSWER';

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function addAnswer(authedUser, questionId, option) {
  return {
    type: ADD_ANSWER,
    questionId,
    option,
    authedUser
  }
}
