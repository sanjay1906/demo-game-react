import React, { useReducer } from 'react';

import CompA from './CompA';
import CompB from './CompB';
import CompC from './CompC';

export const CountContext = React.createContext();

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

function AApp() {
  const [count, setcount] = useReducer(reducer, inisalvalue);

  return (
    <CountContext.Provider
      value={{ ContextCount: count, ContextSetCount: setcount }}
    >
      <div>
        AAp-count-{count}
        <CompA />
        <CompB />
        <CompC />
      </div>
    </CountContext.Provider>
  );
}

export default AApp;
