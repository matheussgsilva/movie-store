import * as C from './styles'
import { FaStar, FaTrash } from 'react-icons/fa'

const CartItem = ({ movie }) => {
    return (
        <C.Container>
            <C.PosterArea src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <C.InfoArea>
                <C.MovieTitle>{movie.title}</C.MovieTitle>
                <C.OriginalMovieTitle><strong>Título original: </strong>{movie.original_title}</C.OriginalMovieTitle>
                <C.RateArea>
                    <strong>Avaliação: </strong>
                    <span>{movie.vote_average}</span>
                    <i><FaStar /></i>
                </C.RateArea>
                <C.ReleaseDate><strong>Ano de lançamento: </strong>{movie.release_date.slice(0,4)}</C.ReleaseDate>
                <C.Remove><FaTrash /> Remover Filme</C.Remove>
            </C.InfoArea>
            <C.SelectArea>
                <label>Selecione uma opção:</label>
                <select>
                    <option>Alugar</option>
                    <option>Compar</option>
                </select>
                <C.MovieValue>Valor: <br/><strong>R$ 13,50</strong></C.MovieValue>
            </C.SelectArea>
        </C.Container>
    )
}

export default CartItem