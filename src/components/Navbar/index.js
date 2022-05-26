import * as C from './styles'
import { FaShoppingCart } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'

const Navbar = () => {
    return (
        <C.Container>
            <C.LogoArea>
                <h2>LOGO</h2>
            </C.LogoArea>
            <C.InputArea>
                <input placeholder='Pesquisa' />
                <span>
                    <FaSearch />
                </span>
            </C.InputArea>
            <C.IconArea>
                <FaHeart />
                <span>
                    <FaShoppingCart />
                </span>
            </C.IconArea>
        </C.Container>
    )
}

export default Navbar