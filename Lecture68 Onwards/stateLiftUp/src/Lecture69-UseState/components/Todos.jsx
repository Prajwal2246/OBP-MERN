import React, { useState } from "react";
import DisplayTodo from "./DisplayTodo";
import AddTodo from "./AddTodo";

function Todos() {
    const [todos,setTodos]=useState([]);
  return (
    <div>
      <AddTodo todos={todos} setTodos={setTodos} />
      <DisplayTodo todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default Todos;
