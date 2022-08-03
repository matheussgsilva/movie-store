import * as C from './styles'
import { useState } from 'react'
import { FaCcVisa } from 'react-icons/fa'

const CartPayment = ({ moviePrice }) => {
    const [payment, setPayment] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [cardName, setCardName] = useState('')
    const [cardExpiresMonth, setCardExpiresMonth] = useState('')
    const [cardExpiresYear, setCardExpiresYear] = useState('')
    const [cardCVV, setCardCVV] = useState('')

    console.log(cardExpiresMonth)

    const renderMonth = () => {
        const monthList = []

        for(let i = 1; i < 13; i++) {
            if(i < 10) {
            monthList.push(<C.Option value={i}>
                0{i}
            </C.Option>)}
            if (i > 9) {
             monthList.push(<C.Option value={i}>
                {i}
            </C.Option>)}
        }

        return monthList
    }

    const renderYear = () => {
        const today = new Date()
        const year = today.getFullYear()
        const yearList = []

        for(let i = 0; i < 15; i++) {
            yearList.push(<C.Option value={year+i}>
                {year+i}
            </C.Option>)
        }

        return yearList
    }

    const renderPayment = () => {
        const paymentList = []

        for(let i = 1; i < 7; i++) {
            paymentList.push(<C.Option value={(moviePrice/i).toFixed(2)}>
                {i} x R$ {(moviePrice/i).toFixed(2)}
            </C.Option>)
        }

        return paymentList
    }


    return (
        <C.Container>
            <C.Header>
                <C.Title>
                    Pagamento
                </C.Title>
            </C.Header>
            <C.PaymentArea>
                <C.Label>
                    Nome:
                </C.Label>
                <C.Input 
                    type='text' 
                    placeholder='Digite seu nome'
                    onChange={e => setName(e.target.value)}
                    value={name}
                />
                <C.Label>
                    E-mail:
                </C.Label>
                <C.Input 
                    type='email'   
                    placeholder='Digite seu e-mail'
                    onChange={e => setEmail(e.target.value)}
                    value={email}   
                />
                <C.Label>
                    Selecione o método de pagamento:
                </C.Label>
                <C.Select onChange={(e) => setPayment(e.target.value)} >
                <C.Option value=''>
                        Selecione
                    </C.Option>
                    <C.Option value='bankSlip'>
                        Boleto bancário
                    </C.Option>
                    <C.Option value='creditCard'>
                        Cartão de crédito
                    </C.Option>
                </C.Select>
                {payment === 'creditCard' &&
                <C.CardArea>
                    <C.Card>
                        <C.CardInfo>
                            <C.Label>
                                Número do cartão:
                            </C.Label>
                            <C.Input 
                                type='text' 
                                placeholder='0000 0000 0000 0000'
                                maxLength='16'
                                onChange={e => setCardNumber(e.target.value)}
                                value={cardNumber}
                            />
                            <C.Label>
                                Nome impresso:
                            </C.Label>
                            <C.Input 
                                type='text' 
                                placeholder='Digite o nome impresso no cartão'
                                onChange={e => setCardName(e.target.value)}
                                value={cardName}    
                            />
                        </C.CardInfo>
                        <C.CardImage>
                            <C.CardImageText>
                                <C.CardImageInfo>
                                    {cardNumber.length === 0 
                                    ? '0000 0000 0000 0000'
                                    : cardNumber}
                                </C.CardImageInfo>
                                <C.CardImageInfo>
                                {cardName.length === 0 
                                    ? 'Nome impresso'
                                    : cardName}
                                </C.CardImageInfo>
                            </C.CardImageText>
                            <C.CardImageLogo cardNumber={cardNumber} >
                                <FaCcVisa />
                            </C.CardImageLogo>
                        </C.CardImage>
                    </C.Card>
                    <C.CardValidationInfo>
                        <C.CardExpires>
                            <C.Label>
                                Vencimento:
                            </C.Label>
                            <C.CardExpiresSelect>
                                <C.Select onChange={e => setCardExpiresMonth(e.target.value)}>
                                <C.Option value=''>
                                        Mês
                                    </C.Option>
                                    {renderMonth()}
                                </C.Select>
                                <C.Select onChange={e => setCardExpiresYear(e.target.value)}>
                                    <C.Option value=''>
                                        Ano
                                    </C.Option>
                                    {renderYear()}
                                </C.Select>
                            </C.CardExpiresSelect>
                        </C.CardExpires>
                        <C.CardCVV>
                            <C.Label>
                                Código de segurança (CVV):
                            </C.Label>
                            <C.Input 
                                type='text' 
                                placeholder='000'
                                maxLength='3'
                                onChange={e => setCardCVV(e.target.value)}
                                value={cardCVV}
                            />
                        </C.CardCVV>
                    </C.CardValidationInfo>
                        <C.Label>
                            Selecione o parcelamento:
                        </C.Label>
                        <C.Select>
                        <C.Option value=''>
                                Selecione
                            </C.Option>
                            {renderPayment()}
                        </C.Select>
                    
                </C.CardArea>}
            </C.PaymentArea>
        </C.Container>
    )
}

export default CartPayment