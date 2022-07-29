import * as C from './styles'
import { useState, useEffect } from 'react'
import { FaStar, FaTrash } from 'react-icons/fa'
import { useCart } from '../../provider/CartProvider'

const CartItem = ({ movie }) => {
    const { cart, setCart } = useCart()
    const [moviePrice, setMoviePrice] = useState(movie.vote_average === 0 ? "9,90" : (movie.vote_average*2.25).toFixed(2))
    const [cartType, setCartType] = useState(movie.cart)

    useEffect(() => {
        if(cartType === 'buy') {
            setMoviePrice((moviePrice*1.5).toFixed(2))

            const index = cart.findIndex( (item) => item.id === movie.id)

            const newCart = [...cart];

            newCart[index] = {
                ...movie,
                cart: 'buy'
            }

            setCart(newCart)
        } else {
            setMoviePrice(movie.vote_average === 0 ? "9,90" : (movie.vote_average*2.25).toFixed(2))

            const index = cart.findIndex( (item) => item.id === movie.id)
            
            const newCart = [...cart];
    
            newCart[index] = {
                ...movie,
                cart: 'rent'
            }
            setCart(newCart)
        }
    }, [cartType])

    const handleRemoveMovie = () => {
        let newCartList = [...cart]
        let filteredList = newCartList.filter(item => (item.id !== movie.id))
        setCart(filteredList)
    }    

    return (
        <C.Container>
            <C.PosterArea src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <C.InfoArea>
                <C.MovieTitle>{movie.title}</C.MovieTitle>
                <C.OriginalMovieTitle>
                    <C.EmphText>Título original: </C.EmphText>
                    {movie.original_title}
                </C.OriginalMovieTitle>
                <C.RateArea>
                    <C.EmphText>Avaliação: </C.EmphText>
                    <span>{movie.vote_average}</span>
                    <i><FaStar /></i>
                </C.RateArea>
                <C.ReleaseDate>
                    <C.EmphText>Ano de lançamento: </C.EmphText>
                    {movie.release_date.slice(0,4)}
                </C.ReleaseDate>
                <C.Remove onClick={handleRemoveMovie}>
                    <FaTrash /> Remover Filme
                </C.Remove>
            </C.InfoArea>
            <C.SelectArea>
                <label>Selecione uma opção:</label>
                {cartType === 'rent' ?
                <select onChange={(e) => setCartType(e.target.value)}>
                    <option value="rent" selected>Alugar</option>
                    <option value="buy">Compar</option>
                </select>
                :   <select onChange={(e) => setCartType(e.target.value)}>
                        <option value="rent">Alugar</option>
                        <option value="buy" selected>Compar</option>
                    </select>
                }
                <C.MovieValue>Valor: <br/><strong>R$ {moviePrice}</strong></C.MovieValue>
            </C.SelectArea>
        </C.Container>
    )
}

export default CartItem