import { makeCard } from '../utils/api'

export const ADD_CARD = 'ADD_CARD'
export const ADD_DECK = 'ADD_DECK'
export const GET_DECKS = 'GET_DECKS'

export function addCard(title, question, answer) {
  const card = makeCard(question, answer)
  return {
    type: ADD_CARD,
    title,
    card,
  }
}

export function addDeck(title) {
  return {
    type: ADD_DECK,
    title
  }
}

export function getDecks(decks) {
  return {
    type: GET_DECKS,
    decks,
  }
}
