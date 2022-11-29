import React from 'react';
import { ButtonContainer, ButtonStyle } from "./style";

export const Button = ({label="Label", onClick}) => {
  return (
    <ButtonContainer>
        <ButtonStyle onClick={onClick}>{label}</ButtonStyle>
    </ButtonContainer>
  )
}
