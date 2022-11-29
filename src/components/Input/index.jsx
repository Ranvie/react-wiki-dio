import React from 'react';
import { InputContainer } from "./style";

export const Input = ({placeholder, value, onChange}) => {
  return (
    <InputContainer>
        <input placeholder={placeholder} value={value} onChange={onChange}></input>
    </InputContainer>
  )
}
