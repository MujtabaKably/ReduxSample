import { List } from "semantic-ui-react";
import { StyledListIcon, StyledListContent } from "./styles";
const TodoItem = ({ onCheck, onRemove, item }) => {
  return (
    <List.Item>
      <StyledListIcon
        name={item.checked ? "check square outline" : "square outline"}
        size="large"
        verticalAlign="middle"
        onClick={() => onCheck && onCheck(item.id, !item.checked)}
      />
      <StyledListContent checked={item.checked}>{item.text}</StyledListContent>
      <StyledListIcon
        name="close"
        size="large"
        verticalAlign="middle"
        onClick={() => onRemove && onRemove(item.id)}
      />
    </List.Item>
  );
};

export default TodoItem;
