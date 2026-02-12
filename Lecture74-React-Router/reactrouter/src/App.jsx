import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Todos from "./components/Todos";
import Todo from "./components/Todo";
import Home from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "asdasda",
      description: "asdas asd asd asdsadsad asdffgd dfdf dsfd",
    },
    {
      id: 2,
      title: "asdasda",
      description: "asdas asd asd asdsadsad asdffgd dfdf dsfd",
    },
    {
      id: 3,
      title: "asdasda",
      description: "asdas asd asd asdsadsad asdffgd dfdf dsfd",
    },
  ]);

  useEffect(() => {
    console.log("todos changes");
  }, [todos]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Todos todos={todos} />} />
        <Route path="/todos/:id" element={<Todo todos={todos} />} />
        <Route path="/add-todos" element={<Home todos={todos} setTodos={setTodos} />} />
      </Routes>
    </div>
  );
}

export default App;
