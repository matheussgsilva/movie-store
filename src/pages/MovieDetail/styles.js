import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
    padding-top: 70px;
    padding-bottom: 25px;
`;

export const Detail = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const MoviePoster = styled.img`
    width: 60vw;
    height: 78vh;
    margin-right: 1px;
    margin-left: -15px;
    border-radius: 10px;
    box-shadow: -10px 12px 30px -3px rgba(0,0,0,0.5);
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
`;

export const MovieInfoText = styled.p`
    margin-right: 5px;
`;

export const MovieInfoIcon = styled.i`
    margin-right: 10px;
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

export const Button = styled.button`
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
    margin-bottom: 10px;

    &:hover {
        opacity: 0.8;
    }
`;

export const FavoriteIcon = styled.i`
    color: ${props => props.isFavorite ? '#FA4C37' : '#FFF'};
`;

export const CartIcon = styled.i`
    color: ${props => props.isAddCart ? '#F5DC00' : '#FFF'};
`;

export const SimilarMovies = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h2`
    color: #4B5C6B;
    margin-left: 10px;
`;

export const List = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    column-gap: 20px;
    padding: 0px 20px;
`;