import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      console.log(data);
      setProducts(data.products);
    }
    fetchProducts();
  }, []);

  function addToCart(productIdx) {
    const productId = cart.findIndex((product) => product.id == productIdx);

    if (productId !== -1) {
      setCart((prevCart) =>
        prevCart.map((item, index) =>
          index == productId ? { ...item, quantity: item.quantity + 1 } : item,
        ),
      );
    } else {
      const product = products.find((p) => p.id === productIdx);
      if (!product) return;

      setCart((cart) => [...cart, { ...product, quantity: 1 }]);
    }
  }

  function removeFromCart(productIdx) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productIdx));
  }

  return (
    <ProductContext.Provider
      value={{ products, cart, addToCart, removeFromCart }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  return useContext(ProductContext);
}
