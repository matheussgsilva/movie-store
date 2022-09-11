import * as C from './styles'
import MovieList from '../../components/MovieList'

const Home = () => {
    return (        
        <C.Container>
            <MovieList moviesId={''} sessionTitle={'Destaque'} />
            <MovieList moviesId={35} sessionTitle={'Comédia'} />
            <MovieList moviesId={16} sessionTitle={'Infantil'} />
            <MovieList moviesId={10752} sessionTitle={'Guerra'} />
            <MovieList moviesId={99} sessionTitle={'Documentário'} />
            <MovieList moviesId={27} sessionTitle={'Terror'} />
        </C.Container>        
    )
}

export default Home