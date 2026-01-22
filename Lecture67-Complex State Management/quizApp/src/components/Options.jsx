import React from "react";

function Options({ opt, index, validateAns }) {
  return <button onClick={() => validateAns(index)}>{opt}</button>;
}

export default Options;
