import styled from 'styled-components';

export const InputContainer = styled.div`
    border: 1px solid #fafafa;
    border-radius: 20px;
    height: 62px;
    width: 80%;
    margin: 20px 0;

    input{
        width: 100%;
        height: 100%;
        font-size: 18px;
        padding: 0 20px;
        background: transparent;
        border: 0;
        color: white;

        &:focus{
            outline: 0;
        }
    }
`