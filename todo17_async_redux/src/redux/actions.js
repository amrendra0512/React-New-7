import axios from 'axios';

const fetchRequest = () => ({
  type: "FETCH_REQUEST",
});

const fetchSuccess = (data) => ({
  type: "FETCH_REQUEST_SUCCESS",
  payload: data,
});

const fetchFailure = (data) => ({
  type: "FETCH_REQUEST_FAILURE",
  payload: data,
});

const fetchApi = () => {
  return async (dispatch) => {
    dispatch(fetchRequest());
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log("res", res.data);
      if (res.data) {
        dispatch(fetchSuccess(res.data));
      }
    } catch (err) {
        dispatch(fetchFailure(err));
    }
  };
};

export default fetchApi;
