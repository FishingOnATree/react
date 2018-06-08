import { RECEIVE_QUESTIONS, ANSWER_QUESTION } from '../actions/Questions'

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case ANSWER_QUESTION:
      const { questionId, option, authedUser } = action;
      const questions = Object.assign({}, state);
      const question = questions[questionId];
      question[option].votes = question[option].votes.concat(authedUser);
      return {
        ...questions
      };
    default:
      return state;
  }
}
