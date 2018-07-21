import { AsyncStorage } from 'react-native'

const FLASHCARD_STORAGE_KEY = 'FLASHCARD_STORAGE_KEY'

// storage example
//
// {
//   React: {
//     title: 'React',
//     questions: [
//       {
//         question: 'What is React?',
//         answer: 'A library for managing user interfaces'
//       },
//       {
//         question: 'Where do you make Ajax requests in React?',
//         answer: 'The componentDidMount lifecycle event'
//       }
//     ]
//   },
//   JavaScript: {
//     title: 'JavaScript',
//     questions: [
//       {
//         question: 'What is a closure?',
//         answer: 'The combination of a function and the lexical environment within which that function was declared.'
//       }
//     ]
//   }
// }

export function getDeck(title) {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
    .then ((results) => {
      let decks = JSON.parse(results)
      return decks[title]
    })
}

export function getDecks() {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
    .then ((results) => {
      if (results === null) {
        return {}
      } else {
        return JSON.parse(results)
      }
    })
}

export function saveDeckTitle(title) {
  let deck = JSON.stringify({ [title]: {title: [title], questions: []} })
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
    .then ((results) => {
      if (results === null) {
        return AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, deck)
      } else {
        return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY, deck)
      }
    })
}

export function addCardToDeck(title, card) {
  return getDeck(title).then((result) => {
      let questions = result.questions
      questions.push(card)
      let deck = JSON.stringify({ [title]: { title: [title], questions} })
      return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY, deck)
    })
}

export function makeCard(question, answer) {
  return { question, answer }
}
