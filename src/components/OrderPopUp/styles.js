import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 220px;
    min-height: 100px;
    background-color: #FFF;
    opacity: ${props => props.showPopUp ? '1' : '0'};
    transition: 250ms ease-in;
    padding: 20px 15px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid #4B5C6B;
    color: #4B5C6B;

    &:after {
        content: '';
        width: 20px;
        height: 20px;
        background-color: #FFF;
        position: fixed;
        transform: rotate(45deg);
        top: 10.5vh;
        right: 40px;
        border-left: 1px solid #4B5C6B;
        border-top: 1px solid #4B5C6B;
    }
`;

export const Title = styled.h3`
    font-size: 1rem;
    margin: 0;
`;

export const Movie = styled.p`
    font-size: 0.9rem;
    text-align: center;
    margin: 0;
    margin-top: 5px;
`;