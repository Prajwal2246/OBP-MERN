import React, { useState } from "react";
import Products from "./Products";

function Form() {
  const [prodName, SetProdName] = useState("");
  const [price, SetPrice] = useState("");
  const [desc, SetDesc] = useState("");
  const [qty, SetQty] = useState("");

  const [products, SetProducts] = useState([]);
  const [error, setError] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();

    if (
      !prodName.trim() ||
      price === 0 ||
      price < 0 ||
      !desc ||
      !qty ||
      qty <= 0
    ) {
      setError("Fill All Fields");
      return;
    }

    const product = {
      prodName,
      price,
      qty,
      desc,
    };

    SetProducts([...products, product]);
    SetPrice("");
    SetProdName("");
    SetDesc("");
    SetQty("");
  }

  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 rounded">
      <form
        onSubmit={handleFormSubmit}
        className="w-full max-w-md bg-slate-900  rounded-2xl shadow-xl flex flex-col gap-4 rounded-xl m-4 p-4 "
      >
        <h2 className="text-2xl font-semibold text-white text-center">
          Add Product
        </h2>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-slate-300">Product Name</label>
          <input
            type="text"
            value={prodName}
            onChange={(e) => SetProdName(e.target.value)}
            placeholder="Enter product name"
            className="px-3 py-2 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-slate-300">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => SetPrice(e.target.value)}
            placeholder="Enter price"
            className="px-3 py-2 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-slate-300">Description</label>
          <input
            type="text"
            value={desc}
            onChange={(e) => SetDesc(e.target.value)}
            placeholder="Product description"
            className="px-3 py-2 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-slate-300">Quantity</label>
          <input
            type="number"
            value={qty}
            onChange={(e) => SetQty(e.target.value)}
            placeholder="Available quantity"
            className="px-3 py-2 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {error && (
          <div className="text-sm font-bold flex justify-center text-red-400">
            {error}
          </div>
        )}
        <button
          type="submit"
          className="mt-4 bg-green-400 hover:bg-green-700 text-white py-2 rounded-xl font-medium transition-all"
        >
          Submit
        </button>
      </form>

      {/* products */}
      <Products products={products} setProducts={SetProducts} />
    </div>
  );
}

export default Form;
