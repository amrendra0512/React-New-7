const initialData = {
  todos: ["amre", "prince", "amit"],
};

const reducers = (state = initialData, action) => {
  console.log("action", action);
  switch (action.type) {
    case "ADD": {
      return {
        ...state,
        todos: [...state.todos, action.text],
      };
    }
    case "DELETE": {
      return {
        ...state,

        todos: state.todos.filter((val, ind) => ind != action.id),
      };
    }
    default:
      return state;
  }
};

export default reducers;
