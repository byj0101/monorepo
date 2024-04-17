import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../storePlugin";

const initialState: RootState["todos"] = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.todoList.push(action.payload);
    },
    removeTodo: (state) => {
      state.todoList.pop();
    },
  },
});

export const { addTask, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
