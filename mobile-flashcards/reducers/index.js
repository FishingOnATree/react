import { ADD_CARD, ADD_DECK, GET_DECKS } from '../actions'
import { saveDeckTitle } from '../utils/api'

function reducer(state={}, action) {
  switch (action.type) {
    case ADD_CARD: {
      const { title, card } = action
      return {
        ...state,
        ...{ [title]: {
                title: title,
                questions: [
                  ...state[action.deckTitle].questions, card
                ]
              }}
      }
    }
    case ADD_DECK: {
      const { title } = action
      saveDeckTitle(title)
      return {
        ...state,
        ...{ [title]: { title: title, questions: []} }
      }
    }
    case GET_DECKS: {
      const { decks } = action
      return {
        ...decks
      }
    }
    default:
      return state
  }
}

export default reducer
