import { INPUT_UPDATED } from "./constants";

export const inputUpdated = (value) => {
  return {
    type: INPUT_UPDATED,
    payload: {
      inputValue: value
    }
  };
};
