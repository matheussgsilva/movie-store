import * as C from './styles'
import MovieList from '../../components/MovieList'
import Theme from '../../components/Theme'

const Home = () => {
    return (
        <Theme>
            <C.Container>
                <MovieList moviesId={''} sessionTitle={'Destaque'} />
                <MovieList moviesId={99} sessionTitle={'Documentário'} />
                <MovieList moviesId={35} sessionTitle={'Comédia'} />
                <MovieList moviesId={27} sessionTitle={'Terror'} />
                <MovieList moviesId={10749} sessionTitle={'Romance'} />
                <MovieList moviesId={16} sessionTitle={'Infantil'} />
            </C.Container>
        </Theme>
    )
}

export default Home