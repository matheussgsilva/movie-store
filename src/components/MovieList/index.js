import { useState, useEffect } from 'react'
import * as C from './styles'
import MovieCard from '../MovieCard'
import tmdb from '../../lib/tmdb'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const MovieList = ({ moviesId, sessionTitle }) => {
    const [movies, setMovies] = useState([])
    const [moveList, setMoveList] = useState(0)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${tmdb}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${moviesId}&with_watch_monetization_types=flatrate`)
        .then(res => res.json())
        .then(data => setMovies(data.results))
      }, [])

    const handleMoveRight = () => {
        setMoveList(moveList - 200)
    }

    const handleMoveLeft = () => {
        if(moveList >= 0) {
            return
        }
        setMoveList(moveList + 200)
    }

    return (
        <C.Container>
            <C.Title>{sessionTitle}</C.Title>
            <C.List>
                <C.MoveArrowLeft onClick={handleMoveLeft}>
                    <FaChevronLeft />
                </C.MoveArrowLeft>
                <C.MovieList position={moveList}>
                    {movies.map(( movie ) => (
                        <MovieCard 
                            key={movie.id} 
                            movie={movie}
                        />
                    ))}
                </C.MovieList>
                <C.MoveArrowRight onClick={handleMoveRight}>
                    <FaChevronRight />
                </C.MoveArrowRight>
            </C.List>
        </C.Container>
    )
}

export default MovieList