import React, { useState } from "react";

function CoinToss() {
  const [result, setResult] = useState("");

  function handleToss() {
    let randomIndex;

    const sides = ["Heads", "Tails"];
    randomIndex = Math.floor(Math.random() * 2);

    setResult(sides[randomIndex]);
  }

  return (
    <div>
      <h1>Click below to toss the coin</h1>
      <button
        onClick={handleToss}
        className="outline-none hover:scale-105 transition text-white px-4 py-2 rounded-xl bg-blue-500 "
      >
        Toss
      </button>
      <p>{result}</p>
    </div>
  );
}

export default CoinToss;
