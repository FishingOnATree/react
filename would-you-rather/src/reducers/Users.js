import { RECEIVE_USERS, ADD_ANSWER, WRITE_QUESTION } from '../actions/Users'

export default function users(state = {}, action) {
  let users = null;
  let user = null;
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case ADD_ANSWER:
      users = Object.assign({}, state);
      user = users[action.authedUser];
      user.answers[action.questionId] = action.option;
      return {
        ...users
      };
    case WRITE_QUESTION:
      users = Object.assign({}, state);
      user = users[action.authedUser];
      user.questions = user.questions.concat(action.questionId)
      return {
        ...users
      };
    default:
      return state;
  }
}
