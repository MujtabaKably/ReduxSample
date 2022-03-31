import { connect, shallowEqual, useDispatch, useSelector } from "react-redux";
import TodoInput from "../../components/TodoInput/TodoInput";
import { todoAdd } from "../TodoListContainer/actions";
import { inputUpdated } from "./actions";
import inputSelector from "./selector";

const TodoInputContainer = ({ inputValue }) => {
  const dispatch = useDispatch();
  return (
    <TodoInput
      value={inputValue}
      onChange={(value) => dispatch(inputUpdated(value))}
      onClick={() => {
        dispatch(todoAdd({ text: inputValue }));
        dispatch(inputUpdated(""));
      }}
    />
  );
};

export default connect((state) => ({ inputValue: inputSelector(state) }))(
  TodoInputContainer
);
