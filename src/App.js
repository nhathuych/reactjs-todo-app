import TodoList from "./components/TodoList";
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";

function App() {
  return (
    <div>
      <h3>My Tasks</h3>

      <Textfield
        name="add-task"
        placeholder="Add your task..."
        elemAfterInput={
          <Button isDisabled="true" appearance="primary">
            Add
          </Button>
        }
        css={{ padding: "2px 4px 2px" }}
      ></Textfield>

      <TodoList></TodoList>
    </div>
  );
}

export default App;
