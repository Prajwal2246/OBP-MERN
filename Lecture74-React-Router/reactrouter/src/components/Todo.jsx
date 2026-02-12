import React from "react";
import { useParams } from "react-router-dom";

function Todo({ todos }) {
  const { id } = useParams();
  return <div>
    <h1>{todos[id-1].title}</h1>
    <h1>{todos[id-1].description}</h1>
  </div>;
}

export default Todo;
