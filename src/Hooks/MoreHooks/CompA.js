import React, { useContext } from 'react';
import { CountContext } from './AApp';

function CompA() {
  const countContext = useContext(CountContext);
  return (
    <div>
      CompA
      <h1>Count:-{countContext.ContextCount}</h1>
      <button onClick={() => countContext.ContextSetCount('increse')}>
        Increse
      </button>
      <button onClick={() => countContext.ContextSetCount('dicrese')}>
        Dicrese
      </button>
      <button onClick={() => countContext.ContextSetCount('reset')}>
        Reset
      </button>
    </div>
  );
}

export default CompA;
