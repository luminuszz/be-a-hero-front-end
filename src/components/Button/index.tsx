/* eslint-disable react/prop-types */
import React from 'react';

// eslint-disable-next-line import/no-unresolved
import { StyledButton } from './styles';

interface Props{
  type:any
}

const Button: React.FC<Props> = (Props) => (
  <StyledButton type={Props.type || 'button'}>
    {Props.children}
  </StyledButton>
);

export default Button;
