import React, { useState } from 'react';

function Addname() {
  const [names, setnames] = useState([{ name: 'sanju' }]);

  const addname = e => {
    setnames([
      ...names,
      {
        name: e.target.value
      }
    ]);
    console.log(names);
  };

  return (
    <div>
      <input type='text' value={names.name} onClick={addname} />
      <button onClick={addname}>Addname</button>
      {names.map(name => (
        <h1 key={name.id}>{name.name}</h1>
      ))}
    </div>
  );
}

export default Addname;
