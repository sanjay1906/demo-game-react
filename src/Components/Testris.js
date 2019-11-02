import React, { useState } from 'react';

import { usePlayer } from '../Hooks/useplayer';
import { useStage } from '../Hooks/usestage';

import Display from './Display';
import Stage from './Stage';
import StartButton from './StartButton';

import { StyleTW, StyleTetris } from './Styles/StyledTestis';

const Testris = () => {
  const [dropTime, setDropTime] = useStage(null);
  const [gameOver, setGameOver] = useStage(false);

  const [player] = usePlayer();
  const [stage, setStage] = useStage(player);

  console.log('re-render');

  return (
    <StyleTW>
      <StyleTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text='Game Over' />
          ) : (
            <div>
              <Display text='Score' />
              <Display text='Rows' />
              <Display text='Level' />
            </div>
          )}
          <StartButton />
        </aside>
      </StyleTetris>
    </StyleTW>
  );
};

export default Testris;
