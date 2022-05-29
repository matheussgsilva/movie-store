import { useState } from 'react'
import * as C from './styles'
import { FaShoppingCart } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'

const Navbar = ({ search, onFavScreen, onCartScreen }) => {
    const [searchField, setSearchField] = useState('')

    return (
        <C.Container>
            <C.LogoArea>
                <h2>LOGO</h2>
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
                <p>
                    <FaHeart 
                        onClick={onFavScreen}
                    />
                </p>
                <p>
                    <span>
                        <FaShoppingCart 
                            onClick={onCartScreen}
                        />
                    </span>
                </p>
            </C.IconArea>
        </C.Container>
    )
}

export default Navbar