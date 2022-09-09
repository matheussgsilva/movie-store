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
    background-image: linear-gradient(90deg, rgba(69,65,65,1) 0%, rgba(69,65,65,1) 35%, rgba(69,65,65,0.75) 100%), ${props => `url(${props.background})`};
    background-repeat: no-repeat;
    background-position: top right;
    background-size: contain;
    position: relative;
    padding-bottom: 20px;
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
    padding: 25px 15px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: #FFF;
`;

export const MovieTitle = styled.h1`
    margin: 0px;
`;

export const MovieDetailSubTitle = styled.h3`
    margin-top: 5px;
    margin-bottom: -5px;
`;

export const MovieInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: -10px;
`;

export const IconsArea = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 400px;
    column-gap: 20px;
    margin: 20px 0px;
`;

export const ProgressbarArea = styled.div`
    width: 50px;
    height: 50px;
    margin-left: -15px;
`;

export const MovieInfoText = styled.p`
    margin-right: 5px;
`;

export const MovieTrailerIcon = styled.i`
    font-size: 1.6rem;
    margin-bottom: -5px;
`;

export const DotIcon = styled.i`
    font-size: 1.5rem;
    margin-bottom: -5px;
`;

export const MovieDetailIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #8DD7CF;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;

export const MovieOverview = styled.p`
    display: block;
    width: 50vw;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: none;
    width: 250px;
    padding: 20px;
    border-radius: 0px 0px 10px 10px;
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
    font-size: 1.2rem;
    color: ${props => props.isFavorite ? '#FA4C37' : '#FFF'};
    margin-bottom: -5px;
`;

export const CartIcon = styled.i`
    color: ${props => props.isAddCart ? '#F5DC00' : '#FFF'};
`;

export const MovieTrailerArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: rgba(50, 50, 50, 0.85);
    position: fixed;
    z-index: 2;
`;

export const CloseMovieTrailer = styled.i`
    display: block;
    font-size: 2rem;
    color: #FFF;
    width: 50px;
    height: 50px;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    transition: transform 200ms ease-in-out;

    &:hover {
        transform: scale(1.2)
    }
`;

export const PlayerArea = styled.div`
    width: 50vw;
    aspect-ratio: 16 / 9;
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