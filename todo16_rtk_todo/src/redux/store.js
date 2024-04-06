import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./reducers";

const store = configureStore({
    reducer: {
        todos: todosReducer
    }
})

export default store;