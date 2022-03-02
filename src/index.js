// Note: createStore and candyReducer must be exported for the tests to run

export function createStore(reducer) {
  let state;
  function dispatch(action) {
    state = reducer(state, action)
  }

  function getState() {
    return state
  }
  return { getState, dispatch }
}

export function candyReducer(state = [], action) {
  switch (action.type) {
    case "candies/add":
      return [...state, action.candy];
    default:
      return state;
  }
}

function render() {
  let container = document.getElementById("container");
  if (store.getState()) {
    container.textContent = store.getState().join(" ");
  } else {
    throw new Error("the store's state has not been defined yet");
  }
}
  let store = createStore(candyReducer)

  store.dispatch({ type: "candies/add" })
