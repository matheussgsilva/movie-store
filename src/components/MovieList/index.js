import * as C from './styles'
import MovieCard from '../MovieCard'

const MovieList = ({ movies }) => {
    return (
        <C.Container>
            {movies.map(( movie ) => (
                <MovieCard index={movie.id} movie={movie} />
                ))}
        </C.Container>
    )
}

export default MovieList