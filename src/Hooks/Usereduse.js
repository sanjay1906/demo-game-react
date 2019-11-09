import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Usereduse() {
  const [lodining, setlodining] = useState(true);
  const [error, seterror] = useState('');
  const [post, setpost] = useState({});

  useEffect(() => {
    const interval = setInterval(lodining, 1000);
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => {
        setlodining(false);
        clearInterval(interval);
        setpost(res.data);
        seterror('data seccusss');
      })
      .catch(error => {
        setlodining(true);
        setpost({});
        seterror('something wrong');
      });
  });
  return (
    <div>
      {lodining ? 'loading.......' : post.title}
      <h1> {error ? error : null}</h1>
    </div>
  );
}

export default Usereduse;
