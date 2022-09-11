import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as C from './styles'
import { useScrollBy } from 'react-use-window-scroll'
import { FaHeart, FaShoppingCart, FaWindowClose } from 'react-icons/fa'
import { BsDot } from 'react-icons/bs'
import { BiMoviePlay } from 'react-icons/bi'
import { DefaultUi, Player, Youtube } from "@vime/react"
import '@vime/core/themes/default.css'
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
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
    const { favoriteMovies, setFavoriteMovies } = useApp()
    const { cart, setCart } = useCart([])
    const { id } = useParams()
    const release = String(movieDetail.release_date)
    const percentage = (Number(movieDetail.vote_average)*10).toFixed(0)
    const scrollBy = useScrollBy()

    useEffect(() => {
        const movieDetailURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${tmdb}&language=pt-BR`
        fetch(movieDetailURL)
        .then(res => res.json())
        .then(data => setMovieDetail(data))

        const similarURL = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${tmdb}&language=pt-BR&page=1`
        fetch(similarURL)
        .then(res => res.json())
        .then(data => setSimilarMovies(data.results))
        scrollBy({ top: -2000, behavior: "smooth" })

        const movieVideoURL = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${tmdb}&language=pt-BR`
        fetch(movieVideoURL)
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

    const convertMovieTime = (time) => {
        const hour = Math.floor(time/ 60);          
        const min = time % 60;
        const convertedHour = (`00${hour}`).slice(-2);
        const convertedMin = (`00${min}`).slice(-2);
        
        return `${convertedHour}h ${convertedMin}m`;
      }

    return (
        <C.Container>
            <C.Detail background={`https://image.tmdb.org/t/p/w500/${movieDetail.backdrop_path}`}>
                <C.MoviePosterArea>
                    <C.MoviePoster 
                        src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`} 
                        alt={movieDetail.title} 
                    />
                    <C.Button onClick={handleAddCart}>
                            {isAddCart ? 'Remover do carrinho' : 'Adicionar ao carrinho'} 
                            <C.CartIcon isAddCart={isAddCart}><FaShoppingCart /></C.CartIcon>
                    </C.Button>
                </C.MoviePosterArea>
                <C.InfoArea>
                    <C.MovieTitle>{movieDetail.title}</C.MovieTitle>                   
                    <C.MovieInfo>
                        <C.MovieInfoText>
                            {release.slice(0,4)}
                        </C.MovieInfoText>
                        <C.DotIcon>
                            <BsDot />
                        </C.DotIcon>                        
                        {movieDetail.genres &&
                        movieDetail.genres.map((genre, index) => (
                        <C.MovieInfoText key={genre.id}>
                            {genre.name}{index !== (movieDetail.genres.length)-1 && ','}
                        </C.MovieInfoText>                       
                        ))}                        
                        <C.DotIcon>
                            <BsDot />
                        </C.DotIcon> 
                        <C.MovieInfoText>
                            {convertMovieTime(movieDetail.runtime)}
                        </C.MovieInfoText>
                    </C.MovieInfo>
                    <C.IconsArea>
                        <C.MovieInfoText>
                            Avaliação: 
                        </C.MovieInfoText>
                        <C.ProgressbarArea>
                                <CircularProgressbar 
                                    value={percentage} 
                                    text={`${percentage}%`}
                                    background={true}
                                    backgroundPadding={6}
                                    styles={buildStyles({
                                        strokeLinecap: 'butt',
                                        textSize: '1.8rem',
                                        pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                                        textColor: '#FFF',
                                        trailColor: 'transparent',
                                        pathColor: "#FFF",
                                        backgroundColor: '#8DD7CF',
                                        width: 40,
                                    })}
                                />
                            </C.ProgressbarArea>
                        <C.MovieDetailIcon 
                            onClick={handleFavorite} 
                            title={!isFavorite ? 'Adicionar aos favoritos': 'Remover dos favoritos'}
                        >
                            <C.FavoriteIcon isFavorite={isFavorite}><FaHeart /></C.FavoriteIcon>
                        </C.MovieDetailIcon>
                        {movieVideo &&
                        <C.MovieDetailIcon 
                            onClick={() => setShowMovieTrailer(true)}
                            title='Reproduzir trailer'
                        >
                            <C.MovieTrailerIcon><BiMoviePlay /></C.MovieTrailerIcon>
                        </C.MovieDetailIcon>}
                    </C.IconsArea>
                    <C.MovieDetailSubTitle>Título original</C.MovieDetailSubTitle>
                    <C.MovieInfoText>
                        {movieDetail.original_title}
                    </C.MovieInfoText>
                    <C.MovieDetailSubTitle>Sinopse</C.MovieDetailSubTitle>
                    <C.MovieOverview>{movieDetail.overview}</C.MovieOverview>                    
                </C.InfoArea>              
            </C.Detail>
            {showMovietrailer &&
            <C.MovieTrailerArea>
                <C.CloseMovieTrailer onClick={() => setShowMovieTrailer(false)}>
                    <FaWindowClose />
                </C.CloseMovieTrailer>
                <C.PlayerArea>
                    <Player>
                        <Youtube videoId={movieVideo.key}/>
                        <DefaultUi />
                    </Player>
                </C.PlayerArea>
                </C.MovieTrailerArea>}
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