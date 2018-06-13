import { RECEIVE_USERS, ADD_ANSWER, WRITE_QUESTION } from '../actions/Users'

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case ADD_ANSWER:
      // users = Object.assign({}, state);
      // user = users[action.authedUser];
      // user.answers[action.questionId] = action.option;
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
              ...state[action.authedUser].answers,
              [action.questionId]: action.option
          }
        }
      };
    case WRITE_QUESTION:
      // users = Object.assign({}, state);
      // user = users[action.authedUser];
      // user.questions = user.questions.concat(action.questionId)
      return {
        ...state,
        [action.authedUser]: {
            ...state[action.authedUser],
           questions: [...state[action.authedUser].questions, action.questionId],
        },
     };
    default:
      return state;
  }
}
