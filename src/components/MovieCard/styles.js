import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    height: 350px;
    box-sizing: border-box;

    @media (max-width: 500px) {
        width: 150px;
        height: 250px;
    }
`;

export const ContentArea = styled.div`
    width: 100%;
    border: 2px solid #C7D2DB;
    border-bottom: none;
    border-radius: 5px 5px 0px 0px;
    box-sizing: border-box;
    color: #4B5C6B;
    overflow: hidden;

    &:hover {
        background-color: #DDD;
        border: 2px solid #8DD7CF;
        border-bottom: none;
    }
`;

export const PosterArea = styled.div`
    width: 100%;
    height: 200px;
    text-align: center;
    border-bottom: 2px solid #C7D2DB;
    position: relative;
    overflow: hidden;

    @media (max-width: 500px) {
        width: 150px;
        height: 150px;
    }
`;

export const Poster = styled.img`
    width: 100%;
    height: 200px;
    transition: transform 500ms ease-in-out;

    &:hover {
        transform: scale(1.1);
    }

    @media (max-width: 500px) {
        width: 150px;
        height: 150px;
    }
`;

export const MovieRelease = styled.span`
    width: 100px;
    position: absolute;
    text-align: center;
    margin-top: -150px;
    background-color: #C7D2DB;
    bottom: 0;
    left: calc(50% - 50px);
    border-radius: 5px 5px 0px 0px;
    font-size: 0.8rem;
`;

export const InfoIcon = styled.i`
    position: absolute;
    top: 0;
    left: 0;
    margin: 10px;
    color: #FFF;
    cursor: pointer;
    overflow: hidden;

    &:hover {
        color: #F5DC00;
    }
`;

export const FavoriteIcon = styled.i`
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;
    color: ${props => props.favorite ? '#FA4C37' : '#FFF'};
    cursor: pointer;

    &:hover {
        color: ${props => props.favorite ? '#FA4C37' : '#FA90B5'};
    }
`;

export const InfoArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    height: 110px;

    @media (max-width: 500px) {
        justify-content: start;
    }
`;

export const MovieTitle = styled.h3`
    font-size: 1rem;
    margin: 5px;

    @media (max-width: 500px) {
        font-size: 0.9rem;
        margin: 2px;
    }
`;

export const VoteAverageArea = styled.div`
    display: flex;
    justify-content: space-around;

    @media (max-width: 500px) {
        margin-top: 3px;
    }
`;

export const VoteAverageInfo = styled.span`
    font-size: 0.9rem;
    margin-right: 5px;

    @media (max-width: 500px) {
        font-size: 0.8rem;
    }
`;

export const VoteAverageIcon = styled.i`
    font-size: 0.9rem;
    margin-right: 5px;

    @media (max-width: 500px) {
        font-size: 0.7rem;
    }
`;

export const MoviePrice = styled.p`
    font-size: 1rem;
    font-weight: bold;
    margin-top: 3px;

    @media (max-width: 500px) {
        display: none;
    }
`;

export const Button = styled.button`
    border: none;
    width: 100%;
    padding: 8px;
    background-color: ${props => props.cart ? '#FA4C37' : '#6558F5'};
    color: #FFF;
    border-radius: 5px;
    margin-top: -10px;
    font-size: 0.9rem;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;