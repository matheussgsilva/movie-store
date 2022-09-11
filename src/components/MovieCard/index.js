import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as C from './styles'
import { FaHeart, FaStar, FaInfoCircle } from 'react-icons/fa'
import { useApp } from '../../provider/AppProvider'
import { useCart } from '../../provider/CartProvider'
import { priceMovie } from '../../lib/priceMovie'
import { movieGenre } from '../../lib/movieGenre'

const MovieCard = ({ movie }) => {
    const [isFavorite, setIsFavorite] = useState(false)
    const [isAddCart, setIsAddCart] = useState(false)
    const { favoriteMovies, setFavoriteMovies } = useApp()
    const { cart, setCart } = useCart([])
    const posterPath = movie.poster_path

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

    return (
        <C.Container>
            <C.ContentArea>
                <C.PosterArea>
                    <Link to={`/detail/${movie.id}`}>                  
                        {movie.poster_path !== '' &&
                        <C.Poster src={`https://image.tmdb.org/t/p/w500/${posterPath}`} alt={movie.title} />}
                    </Link>                 
                    <C.MovieRelease>{String(movie.release_date).slice(0,4)}</C.MovieRelease>
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
                    <C.MovieTitle>{movie.title.length > 30 ? `${movie.title.slice(0,30)}...` : movie.title}</C.MovieTitle>
                    <C.VoteAverageArea>
                        <C.VoteAverageInfo>{(movie.vote_average).toFixed(1)} <FaStar /></C.VoteAverageInfo>
                        <C.VoteAverageInfo>
                            {movieGenre(movie.genre_ids ? movie.genre_ids[0] : movie.genres[0].id)}
                        </C.VoteAverageInfo>
                    </C.VoteAverageArea>
                    <C.MoviePrice>R$ {priceMovie(movie.vote_average)}</C.MoviePrice>
                </C.InfoArea>
            </C.ContentArea>
            <C.Button cart={isAddCart} onClick={handleAddCart}>
                {isAddCart ? 'Remover' : 'Adicionar'}
            </C.Button>
        </C.Container>
    )
}

export default MovieCard