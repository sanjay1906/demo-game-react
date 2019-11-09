import React, { useReducer } from 'react';

const inisalvalue = {
  firstCounter: 0,
  secondCounter: 20
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increse':
      return { ...state, firstCounter: state.firstCounter + action.value };
    case 'dicrese':
      return { ...state, firstCounter: state.firstCounter - action.value };
    case 'increse2':
      return { ...state, secondCounter: state.secondCounter + action.value };
    case 'dicrese2':
      return { ...state, secondCounter: state.secondCounter - action.value };
    case 'reset':
      return inisalvalue;
    default:
      return state;
  }
};

function ReduseCount() {
  const [count, setcount] = useReducer(reducer, inisalvalue);

  return (
    <div>
      <h1>Count:-{count.firstCounter}</h1>
      <h1>Count2:-{count.secondCounter}</h1>

      <button onClick={() => setcount({ type: 'increse', value: 1 })}>
        Increse
      </button>
      <button onClick={() => setcount({ type: 'dicrese', value: 1 })}>
        Dicrese
      </button>
      <button onClick={() => setcount({ type: 'increse', value: 5 })}>
        Increse5
      </button>
      <button onClick={() => setcount({ type: 'dicrese', value: 5 })}>
        Dicrese5
      </button>
      <div>
        <button onClick={() => setcount({ type: 'increse2', value: 1 })}>
          Increse2
        </button>
        <button onClick={() => setcount({ type: 'dicrese2', value: 1 })}>
          Dicrese2
        </button>
      </div>
      <button onClick={() => setcount({ type: 'reset' })}>Reset</button>
    </div>
  );
}

export default ReduseCount;
