import React, { useState, useEffect } from 'react';

function CountID() {
  //   const sanju = 0;
  const [name, Setname] = useState({ Fname: '', Lname: '' });
  useEffect(() => {
    document.title = `here ${name.Fname}`;
  });
  return (
    <div>
      <form action=''>
        <input
          type='text'
          value={name.Fname}
          onChange={e => Setname({ ...name, Fname: e.target.value })}
        />
        <input
          type='text'
          value={name.Lname}
          onChange={e => Setname({ ...name, Lname: e.target.value })}
        />
      </form>
      <h1>Fname:-{name.Fname}</h1>
      <h1>Lname:-{name.Lname}</h1>
      <h2>{JSON.stringify(name)}</h2>
    </div>
  );
}

export default CountID;
