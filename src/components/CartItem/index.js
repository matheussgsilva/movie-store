import * as C from './styles'
import { FaStar, FaTrash } from 'react-icons/fa'

const CartItem = ({ movie }) => {
    return (
        <C.Container>
            <C.PosterArea src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <C.InfoArea>
                <h3>{movie.title}</h3>
                <p><strong>Título original: </strong>{movie.original_title}</p>
                <div>
                    <strong>Avaliação: </strong>
                    <span>{movie.vote_average}</span>
                    <i><FaStar /></i>
                </div>
                <p><strong>Ano de lançamento: </strong>{movie.release_date.slice(0,4)}</p>
                <button><FaTrash /> Remover Filme</button>
            </C.InfoArea>
            <C.SelectArea>
                <label>Selecione uma opção:</label>
                <select>
                    <option>Alugar</option>
                    <option>Compar</option>
                </select>
            </C.SelectArea>
        </C.Container>
    )
}

export default CartItem