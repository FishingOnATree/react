
// library
function createStore(reducer) {
    let state;
    let listeners = [];

    const getState = () => state;

    const subscribe = (listener) => {
      listners.push(listener);
      return () => {
        listeners = listeners.filter((l) => l !== listener);
      }
    }

    const dispatch = (action) => {
      state = reducer(state, action);
      listeners.forEach((listen) => listener());
    }

    return {
      getState,
      subscribe,
      dispatch
    }
}

// app code
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const ADD_GOAL = 'ADD_GOAL';
const REMOVE_GOAL = 'REMOVE_GOAL';

// aciton creators
function addTodoAction (todo) {
  return {
    type: ADD_TODO,
    todo,
  }
}

function removeTodoAction (id) {
  return {
    type: REMOVE_TODO,
    id,
  }
}

function toggleTodoAction (id) {
  return {
    type: TOGGLE_TODO,
    id,
  }
}

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

function todos(state = [], action) {
  swtich (action.type) {
    case ADD_TODO:
      return state.concat([action.todo]);
    case REMOVE_TODO:
      return state.filter((s) => s.id !== action.id);
    case TOGGLE_TODO:
      return state.map((s) => s.id !== action.id ? s : Object.assign({}, s, {complete: !s.complete}));
    default:
      return state;
  }
}

function goals(state = [], action) {
  switch(action.type) {
    case ADD_GOAL:
      return state.concat([action.goal]);
    case REMOVE_GOAL:
      return state.filter((s) => s.id !== action.id);
    default:
      return state;
  }
}

function app(state, action) {
    return {
      todos: todos(state.todos, action),
      goals: goals(state.goals, action)
    }
}

const store = createStore(app);
