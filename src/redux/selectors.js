import { createSelector } from '@reduxjs/toolkit';
export const selectTodo = state => state.todos.items;
export const getFilter = state => state.filter;

export const visibleTodos = createSelector(
  // Масив вхідних селекторів
  [selectTodo, getFilter],
  // Функція перетворювач
  (todos, filter) => {
    return todos.filter(el => el.text.toLowerCase().includes(filter.trim().toLowerCase()));
  }
);
