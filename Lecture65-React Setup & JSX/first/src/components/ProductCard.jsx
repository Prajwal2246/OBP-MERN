import { useState } from "react";

function ProductCard() {
    const [theme,setTheme]=useState(false);

    const toogleTheme=()=>{
        setTheme(!theme);
    }
  return (
    <div className={`w-[200px] m-2
        ${theme ? "bg-gray-800 text-white rounded-xl" : "bg-white text-gray-900 "}
    `}>
        <button 
        onClick={toogleTheme}
        className="border m-2 text-sm font-400 outline-none px-4 py-2 rounded-xl bg-gray-500 text-white">{theme? "Light" : "Dark"}</button>
      <div className="border rounded-xl shadow-sm overflow-hidden">
        {/* Image */}
        <div className="h-[220px] w-full">
          <img
            src="https://images.unsplash.com/photo-1668184162572-4d21d85d8026?w=900&auto=format&fit=crop&q=60"
            alt="Iphone 12 Pro"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-3 text-center">
          <h3 className="text-sm font-semibold">iPhone 12 Pro</h3>
          <p className="mt-1 text-sm font-medium text-gray-700">$120.00</p>

          <button className="mt-3 w-full rounded-lg bg-blue-600 py-2 text-sm text-white transition hover:bg-blue-700">
            + Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
