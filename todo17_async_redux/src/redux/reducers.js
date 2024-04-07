const initState = {
  loading: false,
  product: [],
  error: "",
};

const reducers = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return {
        ...state,loading: true
      };
    case "FETCH_REQUEST_SUCCESS":
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    case "FETCH_REQUEST_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducers;
