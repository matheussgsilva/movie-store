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
    column-gap: 20px;
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
    z-index: 1;
    opacity: 0.75;

    &:hover {
        transform: scale(1.02);
        opacity: 1;
    }
`;

export const MoveArrowRight = styled(MoveArrowLeft)`
    right: 0;
    box-shadow: -8px 2px 10px 0px rgba(0,0,0,0.5);
`;