import * as C from './styles'
import { useState, useEffect } from 'react'
import { useCart } from '../../provider/CartProvider'

const OrderPopUp = () => {
    const [showPopUp, setShowPopUp] = useState(false)
    const [cartLength, setCartLength] = useState(0)
    const { cart } = useCart()

    useEffect(() => {
        if (cart.length > cartLength) {
            setShowPopUp(true)

            setTimeout(() => setShowPopUp(false), 3000)

        }
        setCartLength(cart.length)
        
    }, [cart])

  
    return (
        <C.Container showPopUp={showPopUp}>
            <C.Title>Adicionado ao carrinho:</C.Title>
            {cart.length !== 0 &&
                <C.Movie>
                    O filme <strong>{cart[cart.length-1].title}</strong> foi adicionado
                </C.Movie>
            }
        </C.Container>
    )
}

export default OrderPopUp