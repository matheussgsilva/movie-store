import * as C from './styles'
import { Link } from 'react-router-dom'

const CartSidebar = ({ onHidden }) => {
    return (
        <C.Container>
            <C.Title>Itens no carrinho</C.Title>
            <C.ButtonArea>
            <Link to={'/carrinho'}>
                <C.Cart>Ir para o carrinho</C.Cart>
            </Link>
            <C.ShoppingButton onClick={onHidden}>
                Continuar comprando
            </C.ShoppingButton>
            </C.ButtonArea>
        </C.Container>
    )
}

export default CartSidebar