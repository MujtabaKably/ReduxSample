import { createStore, combineReducers, re } from "redux";
import todoInputRecucer from "./containers/TodoInputContainer/reducer";
import todoListRecucer from "./containers/TodoListContainer/reducers";
const getReducers = (store, action) => {
  return {
    todoInput: todoInputRecucer(store.todoInput, action, store),
    todoList: todoListRecucer(store.todoList, action, store),
  };
};
const store = createStore(getReducers, {});
export default store;
