import React from "react";
import { List } from "semantic-ui-react";
import TodoItem from "../TodoItem/TodoItem";

const TodoItemList = ({ list, onCheck, onRemove }) => (
  <List divided relaxed>
    {list
      .map((item) => {
        return (
          <TodoItem
            key={item.id}
            item={item}
            onCheck={onCheck}
            onRemove={onRemove}
          />
        );
      })
      .reverse()}
  </List>
);

export default TodoItemList;
