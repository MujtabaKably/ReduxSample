import { TODO_REMOVE, TODO_STATUS_CHANGE, TODO_ADD } from "./constants";

export const todoAdd = (todo) => {
  return {
    type: TODO_ADD,
    payload: {
      todo
    }
  };
};

export const todoRemove = (todoId) => {
  return {
    type: TODO_REMOVE,
    payload: {
      todoId
    }
  };
};

export const todoStatusChange = (todoId, status) => {
  return {
    type: TODO_STATUS_CHANGE,
    payload: {
      todoId,
      status
    }
  };
};
