import React from "react";
import { Icon, Input } from "semantic-ui-react";

const TodoInput = ({ onClick, onChange, value, ...props }) => {
  return (
    <Input
      value={value || ""}
      onChange={({ target: { value } }) => {
        onChange && onChange(value);
      }}
      icon={
        <Icon
          name="plus"
          circular
          link
          primary
          inverted
          onClick={() => onClick && onClick()}
          disabled={!value}
        />
      }
      placeholder="Todo Item"
      {...props}
      onKeyUp={(event) => {
        if (event.keyCode === 13) {
          // Cancel the default action, if needed
          event.preventDefault();
          // Trigger the button element with a click
          onClick && value && onClick();
        }
      }}
    />
  );
};

export default TodoInput;
