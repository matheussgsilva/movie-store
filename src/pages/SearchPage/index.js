import * as C from './styles'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Theme from '../../components/Theme'
import MovieCard from '../../components/MovieCard'

const SearchPage = () => {
    const [searchMovie, setSearchMovie] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=5e0ac166209d17595d2a5c230da806c7&language=en-US&query=${id}&page=1&include_adult=false`)
        .then(res => res.json())
        .then(data => setSearchMovie(data.results))
    }, [searchMovie])
console.log(searchMovie)
    return (
        <Theme>
            <C.Container>
            <C.Title>Resultado da Pesquisa</C.Title>
            <C.List>
                {searchMovie.map(( movie ) => (
                    <MovieCard 
                        key={movie.id} 
                        movie={movie}
                        favorite={true}
                    />
                ))}
            </C.List>
            </C.Container>
        </Theme>
        
    )
}

export default SearchPage