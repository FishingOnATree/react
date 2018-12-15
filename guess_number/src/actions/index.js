export const START_GAME = 'START_GAME';
export const GUESS_NUMBER = 'GUESS_NUMBER';
export const GOT_IT = 'GOT_IT';

export function startGame(answer) {
  return {
    type: START_GAME,
    answer
  }
}

export function guessNumber(guess) {
  return {
    type: GUESS_NUMBER,
    guess
  }
}

export function gotIt() {
  return {
    type: GOT_IT,
  }
}
