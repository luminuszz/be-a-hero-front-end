/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
import React from 'react';

// eslint-disable-next-line import/no-unresolved
import { StyledButton } from './styles';

interface Props{
  type:any
  setDisabled?:boolean;
}

const Button: React.FC<Props> = (Props) => (
  <StyledButton
    disabled={Props.setDisabled}
    type={Props.type || 'button'}
  >
    {Props.children}
  </StyledButton>
);

export default Button;
