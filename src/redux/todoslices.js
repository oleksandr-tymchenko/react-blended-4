import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
  name: 'todos',
  initialState: { items: [] },
  reducers: {
    addTodo(state, action) {
      state.items.push(action.payload);
    },
    deleteTodo(state, action) {
      const index = state.items.findIndex(todo => todo.id === action.payload);
      state.items.splice(index, 1);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
