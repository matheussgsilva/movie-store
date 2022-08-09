import * as C from './styles'
import { useState } from 'react'
import Theme from '../../components/Theme'
import { useCart } from '../../provider/CartProvider'
import CartItem from '../../components/CartItem'
import { FaLock } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CartPayment from '../../components/CartPayment'
import { useScrollBy } from "react-use-window-scroll"

const Cart = () => {
    const [showPayment, setShowPayment] = useState(false)
    const { cart } = useCart()
    const scrollBy = useScrollBy()
  
    const totalPrice = cart.reduce(getTotal, 0)
    function getTotal(total, movie) {
    return total + Number(movie.cart === 'rent' ? movie.vote_average === 0 ? "9,90" : (movie.vote_average*2.25).toFixed(2) : ((movie.vote_average === 0 ? "9,90" : (movie.vote_average*2.25).toFixed(2))*1.5).toFixed(2))
    }

    const handleShowPayment = () => {
        setShowPayment(true)
        scrollBy({ top: 2000, behavior: "smooth" })
    }

    return (
        <Theme>
            <C.Container>
                <C.CartList>
                    <C.CartListHeader>
                        <C.CartListHeaderInfo>
                            <p>Sacola de compras - Movie Store</p>
                            <span> {cart.length === 1 ? `1 filme` : `${cart.length} filmes`}</span>
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
                        <span>Subtotal ({cart.length === 1 ? `1 filme` : `${cart.length} filmes`})</span>
                        <C.PriceResume>
                            {cart.map(( movie ) => (
                                <p key={movie.id}>
                                    RS {movie.cart === 'rent' ? 
                                        movie.vote_average === 0 ? "9,90" : (movie.vote_average*2.25).toFixed(2)
                                        : ((movie.vote_average === 0 ? "9,90" : (movie.vote_average*2.25).toFixed(2))*1.5).toFixed(2)
                                    }
                                </p>
                            ))}
                        </C.PriceResume>
                    </C.ResumeSubtotal>
                    <C.ResumeTotal>
                        <span>Total</span>
                        <C.TotalValue>
                            <p><strong>R$ {totalPrice.toFixed(2)}</strong></p>
                            <p>em até 6x de <span>R$ {(totalPrice.toFixed(2)/6).toFixed(2)}</span></p>
                        </C.TotalValue>
                    </C.ResumeTotal>
                    <C.FinishButton onClick={handleShowPayment}>
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
        </Theme>
    )
}

export default Cart