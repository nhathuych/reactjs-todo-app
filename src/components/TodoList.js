import React from "react";
import TodoItem from "./TodoItem";

{/* receive a props from the parents */}
export default function TodoList({ todoList }) {
  return (
    <div>
      {todoList.map((todo) => (
        // send data to child component using props
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
