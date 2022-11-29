import styled from 'styled-components';

export const ItemContainer = styled.div`
    width: 80%;
    
    h3{
        font-size: 32px;
        color: #fafafa;
    }

    p{
        font-size: 16px;
        color: #fafafa80;
        padding: 0 0 0 20px;
    }

    hr{
        margin: 10px 0;
    }
`

export const LinkContainer = styled.div`
    width: 100%;
    margin-top: 20px;

    display: flex;
    justify-content: space-between;

    a{
        width: auto;
        color: #006eff;
        font-size: 16px;
        cursor: pointer;
    }

    a.remove{
        color: red;
        text-align: right;
        text-decoration: none;
    }
`