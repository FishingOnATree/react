export const UPDATE_VIEW = 'UPDATE_VIEW';

export function updateViewAnswered (choice) {
  return {
    type: UPDATE_VIEW,
    choice,
  }
}
