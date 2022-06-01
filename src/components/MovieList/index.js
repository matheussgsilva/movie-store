import * as C from './styles'
import MovieCard from '../MovieCard'

const MovieList = ({ movies, sessionTitle }) => {
    return (
        <C.Container>
            <C.Title>{sessionTitle}</C.Title>
            <C.List>
                {movies.map(( movie ) => (
                    <MovieCard index={movie.id} movie={movie} />
                    ))}
            </C.List>
        </C.Container>
    )
}

export default MovieList