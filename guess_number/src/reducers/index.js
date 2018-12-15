import { combineReducers } from 'redux';
import { START_GAME, GUESS_NUMBER, GOT_IT } from '../actions';

function guess_number (state = [], action) {
  switch(action.type) {
    case START_GAME :
      return state.concat({
        answer: action.answer,
        guesses: [{guess:'1234', result:'1A2B'}, {guess:'2345', result:'2A2B'}],
        gotit: false,
      })
    case GUESS_NUMBER :
      let { guesses } = state;
      return {
        ...state,
        guesses: guesses.unshift(action.guess)
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
