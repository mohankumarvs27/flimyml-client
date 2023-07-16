import React from "react";

function Dummy() {
  const [number, setNumber] = React.useState(0);

  const incrementCount = () => {
    // Update state with incremented value
    setNumber(number + 1);
  };
  const decreaseCount = () => {
    // Update state with incremented value
    setNumber(number - 1);
  };
  return (
    <div className="text-white">
      <p>{number}</p>
      <button onClick={incrementCount}>Add</button>
      <button onClick={decreaseCount} disabled={count === 0}>
        Sub
      </button>
    </div>
  );
}

export default Dummy;
