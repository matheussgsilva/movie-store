import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as C from './styles'
import { FaHeart, FaStar, FaShoppingCart } from 'react-icons/fa'
import ReactPlayer from 'react-player/lazy'
import {tmdb} from '../../lib/tmdb'
import { useApp } from '../../provider/AppProvider'
import { useCart } from '../../provider/CartProvider'
import MovieCard from '../../components/MovieCard'

const MovieDetail = () => {
    const [movieDetail, setMovieDetail] = useState([])
    const [similarMovies, setSimilarMovies] = useState([])
    const [movieVideo, setMovieVideo] = useState([])
    const [isFavorite, setIsFavorite] = useState(false)
    const [isAddCart, setIsAddCart] = useState(false)
    const [showMovietrailer, setShowMovieTrailer] = useState(false)
    const [videoURL, setVideoURL] = useState('')
    const { favoriteMovies, setFavoriteMovies } = useApp()
    const { cart, setCart } = useCart([])
    const { id } = useParams()
    const release = String(movieDetail.release_date)

    console.log('Movie Detail', movieVideo)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${tmdb}&language=pt-BR`)
        .then(res => res.json())
        .then(data => setMovieDetail(data))
    }, [id])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${tmdb}&language=pt-BR&page=1`)
        .then(res => res.json())
        .then(data => setSimilarMovies(data.results))
    }, [id])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${tmdb}&language=pt-BR`)
        .then(res => res.json())
        .then(data => setMovieVideo(data.results[0]))        
    }, [id])

    useEffect(() => {
        favoriteMovies.map((favoriteMovie) => {
            if (favoriteMovie.id === Number(id)) {
                setIsFavorite(true)
            }
        })
    }, [])

    useEffect(() => {
        cart.map((cartMovie) => {
            if (cartMovie.id === Number(id)) {
                setIsAddCart(true)
            }
        })
    }, [])

    useEffect(() => {
        setShowMovieTrailer(false)
        let URLRefresh = (movieVideo !== undefined ? movieVideo.key : '')
        setVideoURL(`https://www.youtube.com/watch?v=${URLRefresh}`)
    }, [id])

    const handleFavorite = () => {
        if (isFavorite) {
            let newFavorite = favoriteMovies.filter(item => (item.id !== Number(id)))
            setFavoriteMovies(newFavorite)
            setIsFavorite(false)
        }
        else {
            let newFavorite = [...favoriteMovies]
            newFavorite.push(movieDetail)
            setFavoriteMovies(newFavorite)
            setIsFavorite(true)
        }
    }

    const handleAddCart = () => {
        if (isAddCart) {
            let newCartList = cart.filter(item => (item.id !== Number(id)))
            setCart(newCartList)
            setIsAddCart(false)
        }
        else {
            let newCartList = [...cart]
            newCartList.push({...movieDetail, cart: 'rent'})
            setCart(newCartList)
            setIsAddCart(true)
        }
    }

    setTimeout(() => {
        movieVideo.key.length !== 0 && setShowMovieTrailer(true)
        setVideoURL(`https://www.youtube.com/watch?v=${movieVideo.key}`)
    }, 5000)

    return (
        <C.Container>
            <C.Detail>
                <C.InfoArea>
                    <C.MovieTitle>{movieDetail.title}</C.MovieTitle>
                    <C.MovieInfo>
                        <C.MovieInfoText>
                            {Number(movieDetail.vote_average).toFixed(1)}
                        </C.MovieInfoText>
                        <C.MovieInfoIcon>
                            <FaStar />
                        </C.MovieInfoIcon>
                        <C.MovieInfoText>{release.slice(0,4)}</C.MovieInfoText>
                    </C.MovieInfo>
                    {movieDetail.homepage &&
                        <C.MovieLink href={`${movieDetail.homepage}`} target="_blank" rel='noreferrer'>
                            Acessar site oficial
                        </C.MovieLink>                    
                    }
                    <C.MovieOverview>{movieDetail.overview}</C.MovieOverview>
                    <C.Button onClick={handleFavorite}>
                            {isFavorite ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'} 
                            <C.FavoriteIcon isFavorite={isFavorite}><FaHeart /></C.FavoriteIcon>
                    </C.Button>
                    <C.Button onClick={handleAddCart}>
                            {isFavorite ? 'Remover do carrinho' : 'Adicionar ao carrinho'} 
                            <C.CartIcon isAddCart={isAddCart}><FaShoppingCart /></C.CartIcon>
                    </C.Button>
                </C.InfoArea>
                {!showMovietrailer &&
                <C.MoviePosterArea>
                    <C.MoviePoster 
                        src={`https://image.tmdb.org/t/p/w500/${movieDetail.backdrop_path}`} 
                        alt={movieDetail.title} 
                    />
                </C.MoviePosterArea>}
                {showMovietrailer &&
                    <C.MoviePosterArea>
                        <ReactPlayer playing={true} url={videoURL} />
                    </C.MoviePosterArea>
                }
            </C.Detail>
            <C.SimilarMovies>
                <C.Title>Filmes similares</C.Title>
                <C.List>
                    {similarMovies.map(( movie ) => (
                        <MovieCard 
                            key={movie.id} 
                            movie={movie}
                            favorite={isFavorite}
                        />
                    ))}
                </C.List>
            </C.SimilarMovies>
        </C.Container>
    )
}

export default MovieDetail