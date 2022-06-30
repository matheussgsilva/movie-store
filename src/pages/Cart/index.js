import * as C from './styles'
import Theme from '../../components/Theme'
import { useCart } from '../../provider/CartProvider'
import CartItem from '../../components/CartItem'
import { FaLock } from 'react-icons/fa'

const Cart = () => {
    const { cart } = useCart()

    return (
        <Theme>
            <C.Container>
                <C.CartList>
                    <C.CartListHeader>
                        <C.CartListHeaderInfo>
                            <p>Sacola de compras - Movie Store</p>
                            <span> 3 itens</span>
                        </C.CartListHeaderInfo>
                        <C.CartListSecurity>
                            <i>
                                <FaLock />
                            </i>
                            <p>100% <br/><span>SEGURO</span></p>
                        </C.CartListSecurity>
                    </C.CartListHeader>
                        {cart.map(( movie ) => (
                            <CartItem 
                                key={movie.id} 
                                movie={movie}
                            />
                        ))}
                </C.CartList>
                <C.Resume>
                    <C.ResumeHeader>
                        <span>RESUMO</span>
                    </C.ResumeHeader>
                    <C.ResumeSubtotal>
                        <span>Subtotal (3 itens)</span>
                        <strong>R$123,00</strong>
                    </C.ResumeSubtotal>
                    <C.ResumeTotal>
                        <span>Total</span>
                        <C.TotalValue>
                            <p><strong>R$123,00</strong></p>
                            <p>em até 6x de <span>RS21,00</span></p>
                        </C.TotalValue>
                    </C.ResumeTotal>
                    <C.FinishButton>
                        finalizar compra
                    </C.FinishButton>
                    <C.ShoppingButton>
                        continuar comprando
                    </C.ShoppingButton>
                </C.Resume>
            </C.Container>
        </Theme>
    )
}

export default Cart