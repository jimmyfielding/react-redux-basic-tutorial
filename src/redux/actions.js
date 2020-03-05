import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./actionTypes";

let nextTodoId = 0;

// creates action to add todos
export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

// creates action to toggle todos
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

// creates action to set active filter
export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
