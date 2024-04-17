import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  todoList: string[];
} = {
  todoList: [],
};

const todoSlice = createSlice({
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

export default todoSlice;
