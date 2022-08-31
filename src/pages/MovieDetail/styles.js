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
    align-items: center;
    height: 85vh;
    background-image: linear-gradient(90deg, rgba(69,65,65,1) 0%, rgba(69,65,65,1) 35%, rgba(69,65,65,0.7) 100%), ${props => `url(${props.background})`};
    background-repeat: no-repeat;
    background-position: top right;
    background-size: contain;
`;

export const MoviePosterArea = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 50px;
    border-radius: 10px;
    box-shadow: 0px 2px 10px 3px rgba(220,220,220,0.1);
    overflow: hidden;
    height: fit-content;

    & button {
        width: 100%;
    }
`;

export const MoviePoster = styled.img`
    width: 22vw;
    height: 60vh;
`;

export const InfoArea = styled.div`  
    display: flex;
    flex: 1;
    padding: 20px 50px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: #FFF;
`;

export const MovieTitle = styled.h1`
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

    &:hover {
        opacity: 0.85;
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