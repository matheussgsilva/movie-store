import * as C from './styles'
import { FaTrash } from 'react-icons/fa'
import { useCart } from '../../provider/CartProvider'
import { priceMovie } from '../../lib/priceMovie'

const SidebarCartItem = ({ movie }) => {
    const { cart, setCart } = useCart()
    const posterPath = movie.poster_path

    const handleRemoveCart = () => {
        let newCartList = [...cart]
        let filteredList = newCartList.filter(item => (item.id !== movie.id))
        setCart(filteredList)
    }    

    return (
        <C.Container>
            <C.PosterArea src={`https://image.tmdb.org/t/p/w500/${posterPath}`} alt={movie.title} />
            <C.InfoArea>
                <C.MovieTitle>
                    {movie.title}
                </C.MovieTitle>
                <C.PriceInfoArea>
                    <C.MoviePrice>
                        RS {priceMovie(movie.vote_average)}
                    </C.MoviePrice>
                    {/*<C.RemoveMovie onClick={handleRemoveCart} >
                        <FaTrash />
                    </C.RemoveMovie>*/}
                </C.PriceInfoArea>
            </C.InfoArea>
        </C.Container>
    )
}

export default SidebarCartItem