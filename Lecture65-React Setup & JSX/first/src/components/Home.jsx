import React from "react";

function Home() {
  return (
    <div className="min-w-screen p-2 shadow-md">
      {/* logo */}
      <div className="flex justify-between">
        <h2>Agencee</h2>
        <button className="rounded-2xl px-4 py-2 text-white bg-blue-500">
          Login with Google
        </button>
      </div>
      <div className="w-full m-2 p-6 rounded-2xl overflow-hidden bg-gray-100">
        <img
          className="w-[200px] h-[200px] object-cover rounded-xl"
          // src="https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?w=800&auto=format&fit=crop&q=60"
          alt="img"
        />
      </div>

      {/*  */}
    </div>
  );
}

export default Home;
