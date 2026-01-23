import React from "react";

function Product({prod,idx}) {
  return (
    <div
      key={idx}
      className="bg-slate-900 text-white border border-slate-700 rounded-2xl p-5 shadow-md hover:shadow-xl transition-all"
    >
      <h2 className="text-xl font-semibold text-blue-400 mb-4 text-center">
        {prod.prodName}
      </h2>

      <div className="flex flex-col gap-3 text-sm">
        <div className="flex justify-between">
          <span className="text-slate-400">Price</span>
          <span className="font-medium">₹{prod.price}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">Quantity</span>
          <span className="font-medium">{prod.qty}</span>
        </div>

        <div className="flex justify-between gap-2">
          <span className="text-slate-400">Description</span>
          <span className="text-right text-slate-200 max-w-[60%]">
            {prod.desc}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Product;
