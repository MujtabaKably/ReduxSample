import "semantic-ui-css/semantic.min.css";
import "./styles.css";
import { Provider } from "react-redux";
import store from "./store";
import TodoInputContainer from "./containers/TodoInputContainer/TodoInputContainer";
import Home from "./components/Home/Home";
import TodoListContainer from "./containers/TodoListContainer/TodoListContainer";
export default function App() {
  return (
    <Provider store={store}>
      <Home>
        <TodoInputContainer />
        <TodoListContainer />
      </Home>
    </Provider>
  );
}
