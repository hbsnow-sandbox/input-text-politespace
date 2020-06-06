import React, { FC } from 'react';
import Cleave from 'cleave.js/react';

const InputText: FC = () => {
  return <Cleave options={{ blocks: [4, 4, 4] }} />
}

export default InputText
