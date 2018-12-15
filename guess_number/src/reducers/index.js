import { combineReducers } from 'redux';
import { START_GAME, GUESS_NUMBER, GOT_IT } from '../actions';

function guess_number (state = {}, action) {
  switch(action.type) {
    case START_GAME :
      return {
        answer: action.answer,
        guesses: Array(),
        gotit: false,
      }
    case GUESS_NUMBER :
      let { guesses } = state;
      guesses.push(action.guess);
      return {
        ...state,
        guesses,
      }
    case GOT_IT :
      return {
        ...state,
        gotit: true
      }
    default :
      return state
  }
}

export default combineReducers({
  guess_number
})
