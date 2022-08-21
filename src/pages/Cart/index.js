import * as C from './styles'
import { useState } from 'react'
import { useCart } from '../../provider/CartProvider'
import CartItem from '../../components/CartItem'
import { FaLock } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CartPayment from '../../components/CartPayment'
import { useScrollBy } from 'react-use-window-scroll'
import { priceMovie } from '../../lib/priceMovie'


const Cart = () => {
    const [showPayment, setShowPayment] = useState(false)
    const { cart } = useCart()
    const scrollBy = useScrollBy()
    
    const totalPrice = cart.reduce(getTotal, 0)
    function getTotal(total, movie) {

    return total + Number(movie.cart === 'rent' ? priceMovie(movie.vote_average).replace(',', '.') : priceMovie(movie.vote_average*1.5).replace(',', '.'))
    }

    const handleShowPayment = () => {
        setShowPayment(true)
        scrollBy({ top: 2000, behavior: "smooth" })
    }

    return (
        <>
            <C.Container>
                <C.CartList>
                    <C.CartListHeader>
                        <C.CartListHeaderInfoArea>
                            <C.CartListHeaderInfo>Sacola de compras - Movie Store</C.CartListHeaderInfo>
                            <C.CartListHeaderInfo> {cart.length === 1 ? `1 filme` : `${cart.length} filmes`}</C.CartListHeaderInfo>
                        </C.CartListHeaderInfoArea>
                        <C.CartListSecurity>
                            <C.LockIcon>
                                <FaLock />
                            </C.LockIcon>
                            <C.SecurityText>100% <br/><span>SEGURO</span></C.SecurityText>
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
                        <C.ResumeHeaderText>RESUMO</C.ResumeHeaderText>
                    </C.ResumeHeader>
                    <C.ResumeSubtotal>
                        <C.SubtotalText>Subtotal ({cart.length === 1 ? `1 filme` : `${cart.length} filmes`})</C.SubtotalText>
                        <C.PriceResume>
                            {cart.map(( movie ) => (
                                <C.SubtotalText key={movie.id}>
                                    RS {movie.cart === 'rent' 
                                        ? priceMovie(movie.vote_average) 
                                        : priceMovie(movie.vote_average*1.5)
                                    }
                                </C.SubtotalText>
                            ))}
                        </C.PriceResume>
                    </C.ResumeSubtotal>
                    <C.ResumeTotal>
                        <C.TotalStrong>Total</C.TotalStrong>
                        <C.TotalValue>
                            <C.TotalStrong>R$ {totalPrice.toFixed(2).replace('.', ',')}</C.TotalStrong>
                            <C.TotalValueText>em até 6x de <strong>R$ {(totalPrice.toFixed(2)/6).toFixed(2).replace('.', ',')}</strong></C.TotalValueText>
                        </C.TotalValue>
                    </C.ResumeTotal>
                    <C.FinishButton 
                        onClick={handleShowPayment}
                        disabled={cart.length === 0}
                    >
                        finalizar compra
                    </C.FinishButton>
                    <Link to='/'>
                        <C.ShoppingButton>
                            continuar comprando
                        </C.ShoppingButton>
                    </Link>
                </C.Resume>
            </C.Container>
            {showPayment &&
                <CartPayment moviePrice={totalPrice}/>}
        </>
    )
}

export default Cart