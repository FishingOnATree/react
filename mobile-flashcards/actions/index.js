import { makeCard } from '../utils/api'

export const ADD_CARD = 'ADD_CARD'
export const ADD_DECK = 'ADD_DECK'
export const LOAD_DECKS = 'LOAD_DECKS'

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

export function loadDecks(decks) {
  return {
    type: LOAD_DECKS,
    decks,
  }
}
