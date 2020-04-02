import React, { CSSProperties } from 'react';

// eslint-disable-next-line import/no-unresolved
import { InputStyle } from './styles';

interface Props{
type?:string;
placeholder?:string;
className?:string;
id?:string;
style?:CSSProperties
}


const Input: React.FC<Props> = (Props) => (
  <InputStyle
    type={Props.type || 'text'}
    placeholder={Props.placeholder || ''}
    className={Props.className || ''}
    id={Props.id}
    style={Props.style}

  />
);

export default Input;
