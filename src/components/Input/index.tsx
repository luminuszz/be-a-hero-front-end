/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { useField } from '@unform/core';
import React, { CSSProperties, useEffect, useRef } from 'react';

// eslint-disable-next-line import/no-unresolved
import { InputStyle } from './styles';

interface Props {
  name: string;
  label?:string
  type?: string;
  placeholder?: string;
  className?: string;
  id?: string;
  style?: CSSProperties;
}

 type InputProps = JSX.IntrinsicElements['input'] & Props

const Input:React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    fieldName,
    defaultValue,
    registerField,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current,
    });
  }, [fieldName, registerField]);

  return (
    <InputStyle>
      <input
        ref={inputRef}
        id={fieldName}
        defaultValue={defaultValue}
        placeholder={rest.placeholder || ''}
        className={rest.className || ''}
        style={rest.style}
        {...rest}
      />
    </InputStyle>
  );
};
export default Input;
