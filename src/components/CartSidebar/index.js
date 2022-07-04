import * as C from './styles'
import { Link } from 'react-router-dom'

const CartSidebar = () => {
    return (
        <C.Container>
            Teste
            <Link to={'/carrinho'}>
                <button>Cart</button>
            </Link>
        </C.Container>
    )
}

export default CartSidebar