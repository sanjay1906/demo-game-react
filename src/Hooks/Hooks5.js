import React, { useState } from 'react';

function Hooks5() {
  const [items, setitems] = useState([]);

  const additems = () => {
    setitems([
      ...items,
      {
        i: items.length,
        value: 'san'
      }
    ]);
    console.log(items);
  };

  const renderItems = items.map(item => {
    return (
      <div>
        <h1 key={item.id}>{item.value}</h1>
      </div>
    );
  });

  return (
    <div>
      <input
        type='text'
        value={items.length}
        onChange={e => setitems({ ...items, value: e.target.value })}
      />
      <button onClick={additems}>add number</button>
      {renderItems}
    </div>
  );
}

export default Hooks5;
