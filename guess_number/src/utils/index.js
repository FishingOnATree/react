

export function generate_answer() {
  return '1234';
}

export function check_guess(answer, newGuess) {
  return { guess: newGuess, result: answer }
}
