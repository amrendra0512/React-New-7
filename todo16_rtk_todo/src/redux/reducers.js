import { createSlice } from "@reduxjs/toolkit";

const todoSlices = createSlice({
    name:'todos',
    initialState: ["amit","prince","amre"],
    reducers: {
        addTodos(state,action){
        state.push(action.payload);
        },
        deleteTodos(state,action){
           return state.filter((val,ind)=> ind != action.payload)
        },
        updateTodos(state,action){
            console.log("updateTodos",state,action);
state.splice(action.payload.updatedId,1,action.payload.text)

         }
    }
});



export const {addTodos, deleteTodos, updateTodos} = todoSlices.actions;
export default todoSlices.reducer;

