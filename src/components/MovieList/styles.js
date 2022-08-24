import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 0.5px solid #4B5C6B;
    padding-bottom: 10px;
`;

export const Title = styled.h2`
    color: #4B5C6B;
    margin-left: 10px;
`;

export const List = styled.div`
    display: flex;
`;

export const MovieList = styled.div`
    display: flex;
    align-items: center;
    column-gap: 10px;
    padding-left: 70px;
    position: relative;
    transform: ${props => props.position ? `translateX(${props.position}px)` : `translateX(0)`};
    transition: transform 300ms ease-in-out;
`;

export const MoveArrowLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: #8DD7CF;
    background-color: #DEE;
    padding: 10px;
    border-radius: 0px 5px 5px 0px;
    box-sizing: border-box;
    height: 340px;
    box-shadow: 8px 2px 10px 0px rgba(0,0,0,0.5);
    cursor: pointer;
    transition: 300ms ease-in-out;
    position: absolute;
    opacity: 0.75;
    z-index: 1;

    &:hover {
        transform: scale(1.02);
        opacity: 1;
    }
`;

export const MoveArrowRight = styled(MoveArrowLeft)`
    right: 0;
    box-shadow: -8px 2px 10px 0px rgba(0,0,0,0.5);
`;

export const Observer = styled.div`
    display: block;
    height: 40px;
    width: 40px;
    border: 3px solid #8DD7CF;
    border-right: transparent;
    border-radius: 50%;
    animation: 0.5s rotate infinite;


    @keyframes rotate {
        0% {
        transform: rotate(0deg);
        }
    
        25% {
        transform: rotate(45deg);
        }

        50% {
        transform: rotate(90deg);
        }

        75% {
        transform: rotate(180deg);
        }

        100% {
        transform: rotate(360deg);
        }
    }
`;
