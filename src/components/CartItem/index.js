import * as C from './styles'
import { useState, useEffect } from 'react'
import { FaStar, FaTrash } from 'react-icons/fa'
import { useCart } from '../../provider/CartProvider'
import { usePrice } from '../../provider/PriceProvider'

const CartItem = ({ movie }) => {
    const { cart, setCart } = useCart()
    const { price, setPrice } = usePrice()
    const [moviePrice, setMoviePrice] = useState(movie.vote_average === 0 ? "9,90" : (movie.vote_average*2.25).toFixed(2))

    const handlePrice = (e) => {
        if(e.target.value === 'buy') {
            setMoviePrice((moviePrice*1.5).toFixed(2))

            const index = cart.findIndex( (item) => item.id === movie.id)

            const newCart = [...cart];

            newCart[index] = {
                ...movie,
                cart: 'buy'
            }
            console.log('change', newCart)

        } else {
            setMoviePrice(movie.vote_average === 0 ? "9,90" : (movie.vote_average*2.25).toFixed(2))

            const index = cart.findIndex( (item) => item.id === movie.id)
            
            const newCart = [...cart];
    
            newCart[index] = {
                ...movie,
                cart: 'rent'
            }
            console.log('change', newCart)
        }
    }

    useEffect(() => {
        let newPrice = [...price];
        let filteredPrice = newPrice.filter(item => (item.id !== movie.id))
        filteredPrice.push({
            id: movie.id,
            price: moviePrice})
        setPrice(filteredPrice)
    }, [moviePrice])

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
                <C.OriginalMovieTitle><strong>Título original: </strong>{movie.original_title}</C.OriginalMovieTitle>
                <C.RateArea>
                    <strong>Avaliação: </strong>
                    <span>{movie.vote_average}</span>
                    <i><FaStar /></i>
                </C.RateArea>
                <C.ReleaseDate><strong>Ano de lançamento: </strong>{movie.release_date.slice(0,4)}</C.ReleaseDate>
                <C.Remove onClick={handleRemoveMovie}>
                    <FaTrash /> Remover Filme
                </C.Remove>
            </C.InfoArea>
            <C.SelectArea>
                <label>Selecione uma opção:</label>
                <select onChange={handlePrice}>
                    <option value="rent">Alugar</option>
                    <option value="buy">Compar</option>
                </select>
                <C.MovieValue>Valor: <br/><strong>R$ {moviePrice}</strong></C.MovieValue>
            </C.SelectArea>
        </C.Container>
    )
}

export default CartItem