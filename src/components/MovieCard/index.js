import * as C from './styles'
import { FaHeart, FaStar } from 'react-icons/fa'

const MovieCard = ({ movie }) => {
    return (
        <C.Container>
            <C.ContentArea>
                <C.PosterArea>
                    <img src={movie.poster} alt={movie.name} />
                    <span>{movie.release}</span>
                    <div><FaHeart /></div>
                </C.PosterArea>
                <C.InfoArea>
                    <h3>{movie.name}</h3>
                    <div>
                        <span>{movie.rating}</span>
                        <span><FaStar /></span>
                        <span>{movie.genre}</span>
                    </div>
                    <p>{movie.price}</p>
                </C.InfoArea>
            </C.ContentArea>
            <C.Button>Adicionar</C.Button>
        </C.Container>
    )
}

export default MovieCard