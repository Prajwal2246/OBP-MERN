import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function Product({ products, setProducts }) {
  const [ascending, SetAscending] = useState(false);
  const [sortName, SetSortName] = useState(false);

  function handleSortPrice() {
    const sortedPorducts = [...products].sort((a, b) =>
      ascending ? a.price - b.price : b.price - a.price,
    );

    setProducts(sortedPorducts);
    SetAscending((prev) => !prev);
  }
  function handleSortQty() {
    const sortedPorducts = [...products].sort((a, b) =>
      ascending ? a.qty - b.qty : b.qty - a.qty,
    );

    setProducts(sortedPorducts);
    SetAscending((prev) => !prev);
  }

  function handleSortName() {
    const sortedProducts = [...products].sort((a, b) =>
      sortName
        ? a.prodName.localeCompare(b.prodName)
        : b.prodName.localeCompare(a.prodName),
    );

    setProducts(sortedProducts);
    SetSortName((prev) => !prev);
  }
  // useEffect(() => {
  //   console.log("Product changed: ", products);
  // }, [products]);

  return (
    <div>
      <div className="w-86 flex gap-2 h-fit ">
        <button onClick={handleSortPrice}>Sort by price</button>
        <button onClick={handleSortName}>Sort by name</button>
        <button onClick={handleSortQty}>Sort by qty</button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6">
        {products.map((prod, idx) => (
          <ProductCard prod={prod} key={prod.prodName + idx} />
        ))}
      </div>
    </div>
  );
}

export default Product;
