import API from 'goals-todos-api'

export const ADD_GOAL = 'ADD_GOAL'
export const REMOVE_GOAL = 'REMOVE_GOAL'
export const RECEIVE_DATA = 'REVEIVE_DATA'

function addGoalAction (goal) {
  return {
    type: ADD_GOAL,
    goal,
  }
}

function removeGoalAction (id) {
  return {
    type: REMOVE_GOAL,
    id,
  }
}

export function handleAddGoal(goalString, cb) {
    return (dispatch) => {
      return API.saveGoal(goalString).then((goal) => {
        dispatch(addGoalAction(goal));
        cb();
      }).catch(() => {
        console.log("error adding a goal");
      })
    }
}

export function handleDeleteGoal(goal, cb) {
  return (dispatch) => {
    dispatch(removeGoalAction(goal.id));
    return API.deleteGoal(goal.id).catch(() => {
      dispatch(addGoalAction(goal));
      console.log('error occurred removing a goal');
    })
  }
}
