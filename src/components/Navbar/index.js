import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as C from './styles'
import { FaShoppingCart } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
import { useApp } from '../../provider/AppProvider'
import { useCart } from '../../provider/CartProvider'

const Navbar = ({ search, showCartSidebar }) => {
    const [searchField, setSearchField] = useState('')
    const { favoriteMovies } = useApp()
    const { cart } = useCart()
    const [favorite, setFavorite] = useState(false)

    useEffect(() => {
        if ( favoriteMovies.length === 0) {
            setFavorite(false)
        }else {
            setFavorite(true)
        }
    }, [favoriteMovies])

    return (
        <C.Container>
            <C.LogoArea>
                <Link to={'/'}>
                    <h2>LOGO</h2>
                </Link>
            </C.LogoArea>
            <C.InputArea>
                <input 
                    placeholder='Pesquisar'
                    value={searchField} 
                    onChange={e => setSearchField(e.target.value)}
                />
                <span
                    onClick={() => search(searchField)}
                >
                    <FaSearch />
                </span>
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