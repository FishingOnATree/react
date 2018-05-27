import API from 'goals-todos-api'

export const RECEIVE_DATA = 'REVEIVE_DATA'

function receiveDataAction(todos, goals) {
  return {
    type: RECEIVE_DATA,
    todos,
    goals
  }
}

export function handleInit() {
    return (dispatch) => {
      return Promise.all([
        API.fetchTodos(),
        API.fetchGoals()
      ]).then(([todos, goals]) => {
        dispatch(receiveDataAction(todos, goals));
      });
    }
}
