const initialState = {
  count: 0,
  count12: 100,
};
const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "INCR": {
      return {...state, count: state.count + 1, count12: state.count12+ 10};
    }
    case "DECR": {
      return {...state, count: state.count - 1, count12: state.count12- 10};
    }
    default:
      return state;
  }
};

export default reducers;
