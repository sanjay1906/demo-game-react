import React, { useState } from 'react';

function CountID() {
  const sanju = 0;
  const [count, setcount] = useState(sanju);

  const increment5 = () => {
    // for (let i = 0; i < 4; i++) {
    //   setcount(sanjukl => sanjukl + 1);
    // }
    setcount(count + 5);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setcount(sanju)}>Reset</button>
      <button onClick={() => setcount(count + 1)}>Increment</button>
      <button onClick={() => setcount(count - 1)}>Dencrement</button>
      <button onClick={increment5}>Increment 5</button>
    </div>
  );
}

export default CountID;
