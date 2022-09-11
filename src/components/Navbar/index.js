import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as C from './styles'
import { FaShoppingCart } from 'react-icons/fa'
import { FaHeart, FaHome, FaSearch } from 'react-icons/fa'
import { useApp } from '../../provider/AppProvider'
import { useCart } from '../../provider/CartProvider'

const Navbar = ({ showCartSidebar }) => {
    const [searchField, setSearchField] = useState('')
    const [favorite, setFavorite] = useState(false)
    const { favoriteMovies } = useApp()
    const { cart } = useCart()
    const navigate = useNavigate()

    const handleKeyPress = (e) => {        
        if(e.key === 'Enter' && searchField !== '') {
            navigate(`/search/${searchField}`)
        }
    }

    useEffect(() => {
        if ( favoriteMovies.length === 0) {
            setFavorite(false)
        }else {
            setFavorite(true)
        }
    }, [favoriteMovies])

    return (
        <C.Container>
            <Link to={'/'}>
                <C.HomeIcon>
                    <FaHome />
                </C.HomeIcon>
            </Link>
            <C.InputArea>
                <C.SearchInput 
                    placeholder='Pesquisar'
                    value={searchField} 
                    onChange={e => setSearchField(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <Link to={`/search/${searchField}`} hidden={searchField === ''}>
                    <C.SearchIcon>
                        <FaSearch />
                    </C.SearchIcon>
                </Link>
                
            </C.InputArea>
            <C.IconArea>                
                <Link to={'/favoritos'}>
                    <C.HeartIcon movies={favorite}>
                        <FaHeart />
                    </C.HeartIcon>
                </Link>
                <C.CartIconArea onClick={showCartSidebar} >
                    <C.CartIcon  cart={cart}>
                        <FaShoppingCart />
                    </C.CartIcon>
                    <C.CartNumber cart={cart}>
                        {cart.length}
                    </C.CartNumber>
                </C.CartIconArea>
            </C.IconArea>
        </C.Container>
    )
}

export default Navbar