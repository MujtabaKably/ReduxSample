import { INPUT_UPDATED } from "./constants";

const initialState = () => ({
  inputValue: "",
});
const todoInputRecucer = (state = initialState(), action = {}) => {
  console.log(action?.type);
  const newState = Object.assign({}, state);
  switch (action.type) {
    case INPUT_UPDATED:
      newState.inputValue = action.payload.inputValue;
      break;
  }
  return newState;
};

export default todoInputRecucer;
