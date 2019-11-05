import React, { useState } from 'react';

function FonHock() {
  const [count, setcount] = useState(35);

  const hello = () => {
    setcount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => hello()}>click me</button>
    </div>
  );
}

export default FonHock;
