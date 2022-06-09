import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as C from './styles'
import { FaHeart, FaStar } from 'react-icons/fa'
import tmdb from '../../lib/tmdb'

const MovieDetail = () => {
    const [movieDetail, setMovieDetail] = useState([])
    const [isFavorite, setIsFavorite] = useState(false)
    const { id } = useParams()
    const release = String(movieDetail.release_date)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${tmdb}&language=pt-BR`)
        .then(res => res.json())
        .then(data => setMovieDetail(data))
    }, [])

    const handleFavorite = () => {
        setIsFavorite(!isFavorite)
    }

    return (
        <C.Container>
            <C.Detail>
                <C.InfoArea>
                    <C.MovieTitle>{movieDetail.title}</C.MovieTitle>
                    <C.MovieInfo>
                        <span>
                            {movieDetail.vote_average}
                        </span>
                        <i>
                            <FaStar />
                        </i>
                        <span>{release.slice(0,4)}</span>
                    </C.MovieInfo>
                    {movieDetail.homepage &&
                        <C.MovieLink href={`${movieDetail.homepage}`} target="_blank" rel='noreferrer'>
                            Acessar site oficial
                        </C.MovieLink>                    
                    }
                    <C.MovieOverview>{movieDetail.overview}</C.MovieOverview>
                    <C.FavoriteIcon 
                        onClick={handleFavorite}
                        isFavorite={isFavorite}>
                            {isFavorite ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'} <i><FaHeart /></i>
                    </C.FavoriteIcon>
                </C.InfoArea>
                    <img src={`https://image.tmdb.org/t/p/w500/${movieDetail.backdrop_path}`} alt={movieDetail.title} />
            </C.Detail>
        </C.Container>
    )
}

export default MovieDetail