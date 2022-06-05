import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as C from './styles'

const MovieDetail = () => {
    const [movieDetail, setMovieDetail] = useState([])
    const { id } = useParams()
    

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5e0ac166209d17595d2a5c230da806c7&language=pt-BR`)
        .then(res => res.json())
        .then(data => setMovieDetail(data) )
    }, [])
   

    return (
        <C.Container>
            <C.Detail>
                <C.InfoArea>
                    <h2>{movieDetail.title}</h2>
                    <span>{movieDetail.vote_average}</span>
                    <span>{movieDetail.release_date}</span>

                    <a href={`${movieDetail.homepage}`} target="_blank" rel='noreferrer'>Acessar site oficial</a>

                    <p>{movieDetail.overview}</p>
                </C.InfoArea>
                    <img src={`https://image.tmdb.org/t/p/w500/${movieDetail.backdrop_path}`} alt={movieDetail.title} />
            </C.Detail>
        </C.Container>
    )
}

export default MovieDetail