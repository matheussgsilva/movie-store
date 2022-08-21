import { useState, useEffect } from 'react'
import * as C from './styles'
import MovieCard from '../MovieCard'
import Skeleton from '../Skeleton'
import {tmdb} from '../../lib/tmdb'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const MovieList = ({ moviesId, sessionTitle }) => {
    const [movies, setMovies] = useState([])
    const [moveList, setMoveList] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=5e0ac166209d17595d2a5c230da806c7&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}&with_genres=${moviesId}&with_watch_monetization_types=flatrate`)
        .then(res => res.json())
        .then(data => setMovies((prevMovieList) => [...prevMovieList, ...data.results]))
      }, [currentPage])

    useEffect(() => {
    const intersectionObserver = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) {
        setCurrentPage((currentValue) => currentValue + 1)
        }
    })
    intersectionObserver.observe(document.querySelector('#listObserver'))
    return () => intersectionObserver.disconnect();
    }, [])

    const handleMoveRight = () => {
        setMoveList(moveList - 200)
    }

    const handleMoveLeft = () => {
        if(moveList >= 0) {
            return
        }
        setMoveList(moveList + 200)
    }

    const renderSkeleton = () => {
        const SkeletonList = []

        for(let i = 1; i < 8; i++) {
            SkeletonList.push(<Skeleton/>)
        }

        return SkeletonList
    }

    return (
        <C.Container>
            <C.Title>{sessionTitle}</C.Title>
            <C.List>
                <C.MoveArrowLeft onClick={handleMoveLeft}>
                    <FaChevronLeft />
                </C.MoveArrowLeft>
                <C.MovieList position={moveList}>
                    {movies.length === 0 &&
                        renderSkeleton()
                    }
                    {movies.map(( movie ) => (
                        <MovieCard 
                            key={movie.id} 
                            movie={movie}
                        />
                    ))}
                    <C.Observer id='listObserver'></C.Observer>
                </C.MovieList>
                <C.MoveArrowRight onClick={handleMoveRight}>
                    <FaChevronRight />
                </C.MoveArrowRight>
            </C.List>
        </C.Container>
    )
}

export default MovieList