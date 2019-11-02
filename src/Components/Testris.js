import React from 'react';

import Display from './Display';
import Stage from './Stage';
import StartButton from './StartButton';

import { CreateStage } from '../gamehelper';

const Testris = () => {
  return (
    <div>
      <Stage stage={CreateStage()} />
      <aside>
        <div>
          <Display text='Score' />
          <Display text='Rows' />
          <Display text='Level' />
        </div>
        <StartButton />
      </aside>
    </div>
  );
};

export default Testris;
