import { useState } from 'react';
import { CreateStage } from '../gamehelper';

export const useStage = () => {
  const [stage, setStage] = useState(CreateStage());

  return [stage, setStage];
};
