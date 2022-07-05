import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;    
    align-items: center;
    width: 450px;
    height: 85vh;
    background-color: #FFF;
    box-shadow: -5px 1px 6px -1px rgba(0,0,0,0.55);
    position: relative;
`;

export const Title = styled.h3`
    color: #333333;
    text-align: center;
`;

export const ButtonArea = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 120px;
`;

export const Cart = styled.span`
    text-decoration: none;
`;

export const ShoppingButton = styled.button`

`;