import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home({ todos, setTodos }) {
  const [input, setInput] = useState("");
  const [desc, setDesc] = useState("");
  const navigate = useNavigate();

  function addTodo() {
    const newTodo = {
      id: todos.length + 1,
      title: input,
      description: desc,
    };

    setTodos([...todos, newTodo]);
    setInput("");
    setDesc("");
    navigate("/");
  }
  console.log(todos);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[500px] flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter Todo Title"
          className="border bg-slate-200 h-12 rounded shadow-md rounded-xl border-none text-center font-black font-semibold"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          type="text"
          placeholder="enter description"
          className="border bg-slate-200 h-[120px] rounded shadow-md rounded-xl border-none text-left pl-2 font-black font-semibold "
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button
          onClick={addTodo}
          className="bg-slate-800 text-white rounded-xl h-12 font-semibold text-zinc-200  transition hover:scale-99 hover:bg-slate-700 hover:text-zinc-500"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Home;
