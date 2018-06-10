import { UPDATE_VIEW } from '../actions/ViewAnswered';

export default function users(state = false, action) {
  switch (action.type) {
    case UPDATE_VIEW:
      return action.choice;
    default:
      return state;
  }
}
