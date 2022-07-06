import * as C from './styles'
import { Link } from 'react-router-dom'
import { useCart } from '../../provider/CartProvider'
import SidebarCartItem from '../SidebarCartItem'

const CartSidebar = ({ onHidden }) => {
    const { cart, setCart } = useCart()
    return (
        <C.Container>
            <C.CartItemsArea>
            <C.Title>Itens no carrinho ( {cart.length === 0 ? 'vazio' : cart.length} )</C.Title>
            {cart.map(( movie ) => (
                <SidebarCartItem movie={movie} />
            ))}
            </C.CartItemsArea>
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