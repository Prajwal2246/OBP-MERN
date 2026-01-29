import React, { useEffect, useState } from "react";
import axios from "axios";

function DisplayTodo({ todos, setTodos }) {
  const [loading, setLoading] = useState(true);
  //feetch
  useEffect(() => {
    axios
      .get("https://dummyjson.com/todos")
      .then((res) => {
        // console.log([...todos, res.data.todos.map((item) => item.todo)]);

        setTodos([...todos, ...res.data.todos.map((item) => item.todo)]);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    !loading && 
    <div>
      <h1 >Todos</h1>
      {todos?.map((todo, idx) => (
        <div key={idx}>
          <ul>
            <li>{todo}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default DisplayTodo;
