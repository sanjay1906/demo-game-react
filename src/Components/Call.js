import React from 'react';
import { CallStyle } from './Styles/CallStyle';
import { TETROMINOS } from '../tatrominos';

const Call = ({ type }) => (
  <CallStyle type={type} color={TETROMINOS[type].color} />
);

export default Call;
