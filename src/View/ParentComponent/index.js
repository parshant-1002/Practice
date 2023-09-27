import React, { useState } from "react";
import ChildComponent from "../ChildComponent";

export default function ParentComponent() {
  const [number, setNumber] = useState(0);
  const incrementFunc = () => {
    return setNumber((num) => num + 1);
  };
  const decrementFunc = () => {
    return setNumber((num) => num - 1);
  };
  return (
    <div>
      <ChildComponent
        number={number}
        incrementFunc={incrementFunc}
        decrementfunc={decrementFunc}
      />
    </div>
  );
}
