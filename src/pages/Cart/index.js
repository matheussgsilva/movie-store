import * as C from './styles'
import Theme from '../../components/Theme'
import CartItem from '../../components/CartItem'
import { FaLock } from 'react-icons/fa'

const Cart = () => {
    const movie = {"adult":false,"backdrop_path":"/zGLHX92Gk96O1DJvLil7ObJTbaL.jpg","genre_ids":[14,12,28],"id":338953,"original_language":"en","original_title":"Fantastic Beasts: The Secrets of Dumbledore","overview":"Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers.","popularity":3670.155,"poster_path":"/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg","release_date":"2022-04-06","title":"Fantastic Beasts: The Secrets of Dumbledore","video":false,"vote_average":6.9,"vote_count":1824}

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
                    <CartItem 
                        key={movie.id}
                        movie={movie}
                    />
                    <CartItem 
                        key={movie.id}
                        movie={movie}
                    />
                    <CartItem 
                        key={movie.id}
                        movie={movie}
                    />
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