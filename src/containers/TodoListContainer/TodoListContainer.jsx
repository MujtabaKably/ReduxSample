import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Button, List } from "semantic-ui-react";
import styledComponents from "styled-components";
import TodoItem from "../../components/TodoItem/TodoItem";
import TodoItemList from "../../components/TodoItemList/TodoItemList";
import { todoRemove, todoStatusChange } from "./actions";
import { tempTodoItemSelector, todoListSelector } from "./selectors";

const TodoListContainer = () => {
  const list = useSelector(todoListSelector, shallowEqual);
  const tempItem = useSelector(tempTodoItemSelector);
  const dispatch = useDispatch();
  return (
    <>
      {tempItem.text && (
        <List relaxed divided>
          <TodoItem item={tempItem}></TodoItem>
        </List>
      )}
      <TodoItemList
        list={list}
        onRemove={(id) => dispatch(todoRemove(id))}
        onCheck={(id, status) => dispatch(todoStatusChange(id, status))}
      />
    </>
  );
};

export default TodoListContainer;
