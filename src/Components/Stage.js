import React from 'react';

import Call from './Call';
import { StyledStage } from './Styles/Stagestyle';

const Stage = ({ stage }) => (
  <StyledStage width={stage[0].length} height={stage.length}>
    {stage.map(row => row.map((call, x) => <Call key={x} type={call[0]} />))}
  </StyledStage>
);

export default Stage;
