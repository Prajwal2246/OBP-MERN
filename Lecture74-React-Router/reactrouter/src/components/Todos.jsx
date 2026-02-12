import React, { useState } from "react";
import { Link } from "react-router-dom";

function Todos({ todos }) {
  return (
    <div className=" min-h-screen flex justify-center mt-12 ">
      <div className=" flex flex-col gap-4 w-[500px]">
        {todos.map((todo) => (
          <div key={todo.id}>
            <Link
              to={`/todos/${todo.id}`}
              className="
    block rounded-xl bg-slate-800 p-5 text-white
    shadow-sm border border-slate-700
    hover:bg-slate-700 hover:shadow-lg hover:-translate-y-0.5
    transition-all duration-200
  "
            >
              <p>{todo.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todos;
