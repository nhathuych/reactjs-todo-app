import TodoList from "./components/TodoList";
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { useCallback, useState } from "react";
import { v4 } from "uuid";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");

  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value);
  }, []);

  const onSubmitInput = useCallback((e) => {
    setTodoList([
      { id: v4(), body: textInput, isCompleted: false },
      ...todoList,
    ]);

    setTextInput("");
  }, [textInput, todoList]);

  return (
    <div>
      <h3>My Tasks</h3>

      <Textfield
        name="add-task"
        placeholder="Add your task..."
        autoComplete="off"
        elemAfterInput={
          <Button
            isDisabled={!textInput}
            appearance="primary"
            onClick={onSubmitInput}
          >
            Add
          </Button>
        }
        css={{ padding: "2px 4px 2px" }}
        value={textInput}
        onChange={onTextInputChange}
      ></Textfield>

      {/* send data to child component using props */}
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
