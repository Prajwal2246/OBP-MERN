import React from "react";
import Child from "./Child";

function Parent({ name }) {
    const child1="rahul";
    const child2="shweta";
  return (
    <div>
      <p>i am child of {name}</p>
      <Child name={name} relation="daughter" child={child2}/>
      <Child relation="son" name={name} child={child1}/>
    </div>
  );
}

export default Parent;
