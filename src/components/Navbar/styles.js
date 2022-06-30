import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 15vh;
    background-color: #8DD7CF;
    padding: 0px 40px;
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
    height: 40%;
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

export const CartIcon = styled.i`
    color: #fff;

    &::after {
        content: '2';
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
    }
`;