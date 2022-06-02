import * as C from './styles'
import MovieList from '../../components/MovieList'

const Home = ({ movies }) => {
    return (
        <C.Container>
            <MovieList movies={movies} sessionTitle={'Destaque'} />
            <MovieList movies={movies} sessionTitle={'Drama'} />
            <MovieList movies={movies} sessionTitle={'Comédia'} />
            <MovieList movies={movies} sessionTitle={'Terror'} />
            <MovieList movies={movies} sessionTitle={'Lançamentos'} />
            <MovieList movies={movies} sessionTitle={'Infantil'} />
        </C.Container>
    )
}

export default Home