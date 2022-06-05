import { Link } from 'react-router-dom'
import * as C from './styles'
import { FaHeart, FaStar } from 'react-icons/fa'

const MovieCard = ({ movie }) => {

    return (
        <C.Container>
            <C.ContentArea>
                <C.PosterArea>
                    <Link to={`/detail/${movie.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                    </Link>
                    <span>{movie.release_date}</span>
                    <div><FaHeart /></div>
                </C.PosterArea>
                <C.InfoArea>
                    <h3>{movie.title.length > 40 ? `${movie.title.slice(0,35)}...` : movie.title}</h3>
                    <div>
                        <span>{movie.vote_average}</span>
                        <span><FaStar /></span>
                        <span>{movie.genre}</span>
                    </div>
                    <p>R$ {(Math.random()*10).toFixed(2)}</p>
                </C.InfoArea>
            </C.ContentArea>
            <C.Button>Adicionar</C.Button>
        </C.Container>
    )
}

export default MovieCard