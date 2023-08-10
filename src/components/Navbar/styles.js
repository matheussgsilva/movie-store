import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #8DD7CF;
    padding: 18px 40px;
    position: fixed;
    z-index: 2;

    @media (max-width: 500px) {
        padding: 10px 20px;
    }
`;

export const HomeIcon = styled.i`
    font-size: 2rem;
    color: #fff;

    @media (max-width: 500px) {
        font-size: 1.5rem;
    }
`;

export const InputArea = styled.div`
    display: flex;
    align-items: center;
    width: 30%;
    height: 40px;
    box-sizing: border-box;
    margin-left: -30px;

    @media (max-width: 500px) {
        width: 50%;
        margin-left: 0px;
    }
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 5px;
    padding: 0px 10px;    
    font-size: 1rem;
    outline: none;
`;

export const SearchIcon = styled.i`
    width: 20px;
    height: 20px;
    color: #8DD7CF;
    background-color: #FFF;
    position: relative;
    margin-left: -40px;
    z-index: 1;
    padding: 0px 6px;
    cursor: pointer;
    transition: font-size 300ms ease-in-out;

    &:hover {
        font-size: 1.2rem;
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

    @media (max-width: 500px) {
        font-size: 1.5rem;
        width: 4%;
    }
`;

export const HeartIcon = styled.i`
    color: ${props => props.movies ? '#FA4C37' : '#FFF'}; 
    margin-right: 5px;
    cursor: pointer;

    @media (max-width: 500px) {
        margin-right: 10px;
    }
`;

export const CartIconArea = styled.div`
    cursor: pointer;
`;

export const CartIcon = styled.i`
    color: #fff;

    &::after {
        content: '${props => props.cart.length === 0 ? `` : props.cart.length}';
        color: #333;
        position: absolute;
        font-size: 0.8rem;
        background-color: #FBE192;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin-top: -5px;
        margin-left: -10px;
        padding-top: 2px;
        text-align: center;
        transform: ${props => props.cart.length === 0 ? 'scale(0)' : 'scale(1)'};
        transition: transform 300ms ease-in;
    }
`;
