import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #8DD7CF;
    padding: 5px 40px;
    position: fixed;
    z-index: 1;
`;

export const LogoArea = styled.div`
    h2{
        color: #FFF;
        text-decoration: none;
    }
`;

export const InputArea = styled.div`
    display: flex;
    align-items: center;
    width: 30%;
    height: 40px;
    box-sizing: border-box;
    margin-left: -30px;

    input {
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 5px;
        padding: 0px 10px;    
        font-size: 1rem;
        outline: none;
    }

    span {
        width: 20px;
        height: 20px;
        color: #8DD7CF;
        background-color: #FFF;
        position: relative;
        margin-left: -40px;
        z-index: 1;
        padding: 0px 6px;
        cursor: pointer;
    }
`;

export const IconArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 6%;
    color: #fff;
    font-size: 1.8rem;
    margin-right: 80px;    
`;

export const HeartIcon = styled.i`
    color: ${props => props.movies ? '#FA4C37' : '#FFF'}; 
    margin-right: 5px;
    cursor: pointer;
`;

export const CartIconArea = styled.div`
    cursor: pointer;
`;

export const CartIcon = styled.i`
    color: #fff;

    &::after {
        content: '';
        color: #000;
        position: absolute;
        font-size: 0.8rem;
        background-color: #FBE192;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin-top: -5px;
        margin-left: -10px;
        text-align: center;
        transform: ${props => props.cart.length === 0 ? 'scale(0)' : 'scale(1)'};
        transition: transform 300ms ease-in;
    }
`;

export const CartNumber = styled.span`
    color: #333333;
    text-decoration: none;
    position: fixed;
    font-size: 14px;
    top: 17px;
    right: 37px;
    transform: ${props => props.cart.length === 0 ? 'scale(0)' : 'scale(1)'};
    transition: transform 300ms ease-in;
`;