import React from 'react';

// eslint-disable-next-line import/no-unresolved
import { InputStyle } from './styles';

interface Props{
type:string,
placeholder:string
}


const Input: React.FC<Props> = (Props) => (
  <InputStyle
    type={Props.type}
    placeholder={Props.placeholder}
  />
);

export default Input;
