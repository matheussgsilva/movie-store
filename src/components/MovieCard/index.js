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
            newCartList.push(movie)
            setCart(newCartList)
            setIsAddCart(true)
        }
    }

    console.log('CartLIst', cart)
    console.log('FavoritList', favoriteMovies)
            

    return (
        <C.Container>
            <C.ContentArea>
                <C.PosterArea>
                    <Link to={`/detail/${movie.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                    </Link>
                    <span>{movie.release_date}</span>
                    <C.FavoriteIcon favorite={isFavorite} onClick={handleFavoriteMovie}>
                        <FaHeart />
                    </C.FavoriteIcon>
                    <i className='info'><FaInfoCircle /></i>
                </C.PosterArea>
                <C.InfoArea>
                    <h3>{movie.title.length > 35 ? `${movie.title.slice(0,35)}...` : movie.title}</h3>
                    <div>
                        <span>{movie.vote_average}</span>
                        <span><FaStar /></span>
                        <span>{movie.genre}</span>
                    </div>
                    <p>R$ {(Math.random()*10).toFixed(2)}</p>
                </C.InfoArea>
            </C.ContentArea>
            <C.Button cart={isAddCart} onClick={handleAddCart}>
                {isAddCart ? 'Remover' : 'Adicionar'}
            </C.Button>
        </C.Container>
    )
}

export default MovieCard