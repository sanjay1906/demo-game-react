import React from 'react';

import Call from './Call';

const Stage = ({ stage }) => (
  <div>
    {stage.map(row => row.map((call, x) => <Call key={x} type={call[0]} />))}
  </div>
);

export default Stage;
