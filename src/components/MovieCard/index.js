import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as C from './styles'
import { FaHeart, FaStar, FaInfoCircle } from 'react-icons/fa'
import { useApp } from '../../provider/AppProvider'
import { useCart } from '../../provider/CartProvider'

const MovieCard = ({ movie }) => {
    const [isFavorite, setIsFavorite] = useState(false)
    const [isAddCart, setIsAddCart] = useState(false)
    const { favoriteMovies, setFavoriteMovies } = useApp()
    const { cart, setCart } = useCart([])

    useEffect(() => {
        favoriteMovies.map((favoriteMovie) => {
            if (favoriteMovie.id === movie.id) {
                setIsFavorite(true)
            }
        })
    }, [])

    useEffect(() => {
        cart.map((cartMovie) => {
            if (cartMovie.id === movie.id) {
                setIsAddCart(true)
            }
        })
    }, [])

    const handleFavoriteMovie = () => {
        if (isFavorite) {
            let newFavorite = favoriteMovies.filter(item => (item.id !== movie.id))
            setFavoriteMovies(newFavorite)
            setIsFavorite(false)
        }
        else {
            let newFavorite = [...favoriteMovies]
            newFavorite.push(movie)
            setFavoriteMovies(newFavorite)
            setIsFavorite(true)
        }
    }

    const handleAddCart = () => {
        if (isAddCart) {
            let newCartList = cart.filter(item => (item.id !== movie.id))
            setCart(newCartList)
            setIsAddCart(false)
        }
        else {
            let newCartList = [...cart]
            newCartList.push({...movie, cart: 'rent'})
            setCart(newCartList)
            setIsAddCart(true)
        }
    }

    const movieGenre = () => {
        switch (movie.genre_ids[0]) {
        case 28:
            return "Ação";
        case 12:
            return "Aventura";
        case 16:
            return "Animação";
        case 35:
            return "Comédia";
        case 80:
            return "Crime";
        case 99:
            return "Drama";
        case 18:
            return "Ação";
        case 10751:
            return "Família";
        case 14:
            return "Fantasia";
        case 36:
            return "História";
        case 27:
            return "Terror";
        case 10402:
            return "Música";
        case 9648:
            return "Mistério";
        case 10749:
            return "Romance";
        case 878:
            return "Ficção científica";
        case 10770:
            return "Cinema TV";
        case 53:
            return "Thriller";
        case 10752:
            return "Guerra";
        case 37:
            return "Faroeste";
        default:
            return ""
        }
    }

    return (
        <C.Container>
            <C.ContentArea>
                <C.PosterArea>                    
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />                    
                    <span>{String(movie.release_date).slice(0,4)}</span>
                    <C.FavoriteIcon favorite={isFavorite} onClick={handleFavoriteMovie}>
                        <FaHeart />
                    </C.FavoriteIcon>
                    <Link to={`/detail/${movie.id}`}>
                        <C.InfoIcon>
                            <FaInfoCircle />
                        </C.InfoIcon>
                    </Link>
                </C.PosterArea>
                <C.InfoArea>
                    <h3>{movie.title.length > 30 ? `${movie.title.slice(0,30)}...` : movie.title}</h3>
                    <div>
                        <span>{movie.vote_average}</span>
                        <span><FaStar /></span>
                        <span>{movieGenre()}</span>
                    </div>
                    <p>R$ {movie.vote_average === 0 ? "9,90" : (movie.vote_average*2.25).toFixed(2)}</p>
                </C.InfoArea>
            </C.ContentArea>
            <C.Button cart={isAddCart} onClick={handleAddCart}>
                {isAddCart ? 'Remover' : 'Adicionar'}
            </C.Button>
        </C.Container>
    )
}

export default MovieCard