import React, { useReducer } from 'react';

const inisalvalue = 0;

const reducer = (state, action) => {
  switch (action) {
    case 'increse':
      return state + 1;
    case 'dicrese':
      return state - 1;
    case 'reset':
      return inisalvalue;
    default:
      return state;
  }
};

function ReduseCount() {
  const [count, setcount] = useReducer(reducer, inisalvalue);
  const [count2, setcount2] = useReducer(reducer, inisalvalue);

  return (
    <div>
      <h1>Count:-{count}</h1>
      <button onClick={() => setcount('increse')}>Increse</button>
      <button onClick={() => setcount('dicrese')}>Dicrese</button>
      <button onClick={() => setcount('reset')}>Reset</button>
      <h1>Count:-{count2}</h1>
      <button onClick={() => setcount2('increse')}>Increse</button>
      <button onClick={() => setcount2('dicrese')}>Dicrese</button>
      <button onClick={() => setcount2('reset')}>Reset</button>
    </div>
  );
}

export default ReduseCount;
