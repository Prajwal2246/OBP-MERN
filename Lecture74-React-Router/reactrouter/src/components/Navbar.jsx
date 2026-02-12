import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="flex justify-between m-2">
      <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        TodosApp
      </h3>
      <div className="flex gap-3">
        <Link
          to="/"
          className="px-4 py-2 bg-black rounded-xl text-white font-medium"
        >
          Home
        </Link>
        <Link
          to="/add-todos"
          className="px-4 py-2 bg-red-400 rounded-xl text-slate-100 font-bold"
        >
          AddTodos
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
