import * as C from './styles'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MovieCard from '../../components/MovieCard'
import {tmdb} from '../../lib/tmdb'

const SearchPage = () => {
    const [searchMovie, setSearchMovie] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${tmdb}&language=en-US&query=${id}&page=1&include_adult=false`)
        .then(res => res.json())
        .then(data => setSearchMovie(data.results))
    }, [searchMovie])

    return (
        <C.Container>
        {searchMovie.length === 0 ?
        <C.Title>O filme pesquisado não foi encontrado</C.Title>
        : <C.Title>Resultado da Pesquisa</C.Title>
        }
        <C.List>
            {searchMovie.map(( movie ) => (
                <MovieCard 
                    key={movie.id} 
                    movie={movie}
                />
            ))}
        </C.List>
        </C.Container>
    )
}

export default SearchPage