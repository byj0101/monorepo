import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  todotodoList: string[];
} = {
  todotodoList: [],
};

const todotodoSlice = createSlice({
  name: "todotodos",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.todotodoList.push(action.payload);
    },
    removeTodo: (state) => {
      state.todotodoList.pop();
    },
  },
});

export default todotodoSlice;
