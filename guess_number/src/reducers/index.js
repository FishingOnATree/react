import { combineReducers } from 'redux';
import { START_GAME, GUESS_NUMBER, GOT_IT } from '../actions';

function guess_number (state = {}, action) {
  switch(action.type) {
    case START_GAME :
      return {
        answer: action.answer,
        guesses: [],
        gotit: false,
      }
    case GUESS_NUMBER :
      let { guesses } = state;
      return {
        ...state,
        guesses: [action.guess].concat(guesses),
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
