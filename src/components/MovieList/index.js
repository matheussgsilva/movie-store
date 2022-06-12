import { useState, useEffect } from 'react'
import * as C from './styles'
import MovieCard from '../MovieCard'
import tmdb from '../../lib/tmdb'

const MovieList = ({ moviesId, sessionTitle }) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${tmdb}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${moviesId}&with_watch_monetization_types=flatrate`)
        .then(res => res.json())
        .then(data => setMovies(data.results))
      }, [])

    return (
        <C.Container>
            <C.Title>{sessionTitle}</C.Title>
            <C.List>
                {movies.map(( movie ) => (
                    <MovieCard 
                        key={movie.id} 
                        movie={movie}
                    />
                ))}
            </C.List>
        </C.Container>
    )
}

export default MovieList