import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    overflow-y: hidden;
    padding-bottom: 25px;
`;

export const Detail = styled.div`
    display: flex;
    justify-content: space-between;

    img {
        width: 60vw;
        height: 78vh;
        margin-right: 1px;
        margin-left: -15px;
        border-radius: 10px;
        box-shadow: -10px 12px 30px -3px rgba(0,0,0,0.5);
    }
`;

export const InfoArea = styled.div`
    width: 30vw;  
    padding: 20px 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #4B5C6B;
`;

export const MovieTitle = styled.h2`
    max-width: 300px;
    margin-top: 0px;
`;

export const MovieInfo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    span {
        margin-right: 5px;
    }

    i {
        margin-right: 10px;
    }
`;

export const MovieLink = styled.a`
    text-decoration: none;
    color: #4B5C6B;

    &:hover {
        text-decoration: underline;
    }
`;

export const MovieOverview = styled.p`
    display: block;
    width: 30vw;
`;

export const FavoriteIcon = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: none;
    width: 250px;
    padding: 20px;
    border-radius: 10px;
    background-color: #8DD7CF;
    color: #fff;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    i {
        color: ${props => props.isFavorite ? '#FA4C37' : '#FFF'};
    }
`;
