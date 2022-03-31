import { v4 } from "uuid";
import { INPUT_UPDATED } from "../TodoInputContainer/constants";
import { TODO_ADD, TODO_REMOVE, TODO_STATUS_CHANGE } from "./constants";

const initialState = () => ({
  list: [],
  tempTodoItem: {}
});
const todoListRecucer = (state = initialState(), action = {}) => {

  switch (action?.type) {
    case TODO_ADD:
      return {
        ...state,
        list: [...state.list, ({
          ...action.payload.todo,
          id: v4(),
          checked: false
        })]
      };
    case TODO_REMOVE:
      return {
        ...state,
        list: state.list.filter((td) => td.id !== action.payload.todoId)
      };
    case TODO_STATUS_CHANGE:
      return {
        ...state,
        list: state.list.map((td) => {
          if (td.id !== action.payload.todoId) return td;
          return {
            ...td,
            checked: action.payload.status
          };
        })
      };
    case INPUT_UPDATED:
      return {
        ...state,
        tempTodoItem: {
          text: action.payload.inputValue
        }
      };
    default:
      return state;
  }
};

export default todoListRecucer;
