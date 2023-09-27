import React from "react";

export default function ChildComponent({
  number,
  incrementFunc,
  decrementfunc
}) {
  return (
    <div>
      <button onClick={incrementFunc}>Add</button>
      <label>
        {"  "}
        {number}{" "}
      </label>
      <button onClick={decrementfunc}>Sub</button>
    </div>
  );
}
