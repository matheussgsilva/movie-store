import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;    
    align-items: center;
    justify-content: space-between;
    width: 450px;
    height: 88vh;
    background-color: #FFF;
    box-shadow: -5px 1px 6px -1px rgba(0,0,0,0.55);
    position: relative;
    overflow-y: scroll;

    @media (max-width: 500px) {
        width: 100vw;
        height: 90vh;
        padding-bottom: 50px;
    }
`;

export const Title = styled.h3`
    color: #333333;
    text-align: center;
`;

export const CartItemsArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const ButtonArea = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 100%;
    height: 120px;
    padding: 0px 25px;
    box-sizing: border-box;
    background-color: #FFF;

    a {
        text-decoration: none;
    }
`;

export const Cart = styled.span`
    display: block;
    text-align: center;
    color: #FFF;
    font-size: 1.2rem;
    background-color: #8DD7CF;
    margin-bottom: 5px;
    padding: 10px;
`;

export const ShoppingButton = styled.span`
    display: block;
    text-align: center;
    border: 2px solid #8DD7CF;
    background-color: transparent;
    color: #8DD7CF;
    font-size: 1.2rem;
    padding: 10px;
    cursor: pointer;
`;