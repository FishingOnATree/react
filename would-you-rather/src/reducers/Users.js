import { RECEIVE_USERS, ADD_ANSWER } from '../actions/Users'

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };

    case ADD_ANSWER:
      const { questionId, option, authedUser } = action;
      const users = Object.assign({}, state);
      const user = users[authedUser];
      user.answers[questionId] = option;
      return {
        ...users
      };
    default:
      return state;
  }
}
