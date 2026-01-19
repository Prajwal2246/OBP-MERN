import React from "react";

function Child({ name, relation,child }) {
    
  return (
    <div>
      i am grandChild of {name} and i am {relation}, my name is {child}
    </div>
  );
}

export default Child;
