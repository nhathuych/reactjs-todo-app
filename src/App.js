import TodoList from "./components/TodoList";
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { useCallback, useEffect, useState } from "react";
import { v4 } from "uuid";

const TODO_APP_LOCAL_STORAGE_KEY = "TODO_APP_LOCAL_STORAGE_KEY_1";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");

  // get the list from local storage
  useEffect(() => {
    const storedTodoList = localStorage.getItem(TODO_APP_LOCAL_STORAGE_KEY);

    if (storedTodoList) {
      setTodoList(JSON.parse(storedTodoList));
    }
  }, []);

  // store the list in local storage
  useEffect(() => {
    localStorage.setItem(TODO_APP_LOCAL_STORAGE_KEY, JSON.stringify(todoList));
  }, [todoList]);

  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value);
  }, []);

  const onSubmitInput = useCallback(
    (e) => {
      setTodoList([
        { id: v4(), body: textInput, isCompleted: false },
        ...todoList,
      ]);

      setTextInput("");
    },
    [textInput, todoList]
  );

  const onCheckIconClick = useCallback((id) => {
    setTodoList((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: true } : todo
      )
    );
  }, []);

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
      <TodoList todoList={todoList} onCheckIconClick={onCheckIconClick} />
    </div>
  );
}

export default App;
