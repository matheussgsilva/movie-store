import * as C from './styles'
import MovieList from '../../components/MovieList'

const Home = () => {
    return (        
        <C.Container>
            <MovieList moviesId={''} sessionTitle={'Destaque'} />
            <MovieList moviesId={99} sessionTitle={'Documentário'} />
            <MovieList moviesId={35} sessionTitle={'Comédia'} />
            <MovieList moviesId={27} sessionTitle={'Terror'} />
            <MovieList moviesId={10749} sessionTitle={'Romance'} />
            <MovieList moviesId={16} sessionTitle={'Infantil'} />
        </C.Container>        
    )
}

export default Home