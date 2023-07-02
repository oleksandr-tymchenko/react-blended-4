import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './todoslices';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
