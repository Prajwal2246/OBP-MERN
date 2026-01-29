import React, { useState } from "react";

function AddTodo({ todos, setTodos }) {
  const [newTodo, setNewTodo] = useState("");

  function handleAdd() {
    if (newTodo.trim() === "") return;

    setTodos([...todos, newTodo]);
    
    localStorage.setItem("todos",JSON.stringify(todos.map((item)=>({"todo":item}))));
    setNewTodo("");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="buy scooty"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddTodo;
