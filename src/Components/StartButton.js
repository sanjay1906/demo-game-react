import React from 'react';

import { StyledStartButton } from './Styles/StartbuttonStyle';

const StartButton = ({ callback }) => (
  <StyledStartButton onClick={callback}>Start game</StyledStartButton>
);

export default StartButton;
