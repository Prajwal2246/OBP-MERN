import React, { useState } from "react";
import { useProduct } from "../context/productContext/ProductContext";

function Products() {
  const { cart, products, removeFromCart, addToCart } = useProduct();

  const handleAdd = (id) => {
    addToCart(id);
  };

  return (
    <div>
      Products:
      {products.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <img src={item.images[0]} alt="img" style={{ height: "62px" }} />
          <p>{item.description}</p>
          <p>${item.price}</p>
          <button onClick={() => handleAdd(item.id)}>Add To Cart</button>
        </div>
      ))}
      {cart.length ? (
        <div style={{ border: "1px solid black" }}>
          <h3>Cart</h3>
          {cart.map((item, idx) => (
            <div key={idx}>
              <h3> title: {item.title}</h3>
              <p> price: ${item.price} </p>
              <p>Quantity:{item.quantity} </p>
              <button onClick={() => removeFromCart(item.id)}>Remove </button>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Products;
