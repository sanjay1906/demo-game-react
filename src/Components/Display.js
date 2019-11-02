import React from 'react';

import { StyledDisplay } from './Styles/DisplayStyle';

const Display = ({ gameOver, text }) => (
  <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
);

export default Display;
