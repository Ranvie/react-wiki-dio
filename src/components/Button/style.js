import styled from 'styled-components';

export const ButtonContainer = styled.div`
    border: 0;
    height: 30px;
    width: 15%;
    border-radius: 20px;
    margin: 5px 0;
`

export const ButtonStyle = styled.button`
    width: 100%;
    height: 100%;
    border-radius: 20px;
    border: 0;

    &:hover{
        background-color: #006eff;
        color: white;
        cursor: pointer;
    }
`