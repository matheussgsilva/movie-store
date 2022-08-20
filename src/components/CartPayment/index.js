import * as C from './styles'
import { useState, useEffect } from 'react'
import { FaCcVisa, FaFileDownload } from 'react-icons/fa'
import { priceMovie } from '../../lib/priceMovie'

const CartPayment = ({ moviePrice }) => {
    const [payment, setPayment] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [cardName, setCardName] = useState('')
    const [cardExpiresMonth, setCardExpiresMonth] = useState('')
    const [cardExpiresYear, setCardExpiresYear] = useState('')
    const [cardCVV, setCardCVV] = useState('')
    const [cardPayment, setCardPayment] = useState('')
    const [showMessage, setShowMessage] = useState(false)
    const [isRotate, setIsRotate] = useState(false)

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
                {i} x R$ {(moviePrice/i).toFixed(2).replace('.', ',')}
            </C.Option>)
        }

        return paymentList
    }

    useEffect(() => {
        setShowMessage(!showMessage)
    }, [payment])

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
                    <C.Option value='billing'>
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
                        <C.CardImage isRotate={isRotate}>
                            <C.CardImageFront>
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
                            </C.CardImageFront>
                            <C.CardImageBack>
                                    <C.CardImageInfo>
                                        {cardExpiresMonth.length === 0 
                                        ? 'MM/AAAA'
                                        : `${String(0 + cardExpiresMonth).slice(-2)} / ${cardExpiresYear}`}
                                    </C.CardImageInfo>
                                    <C.CardImageInfo>
                                    {cardCVV.length === 0 
                                        ? '000'
                                        : cardCVV}
                                    </C.CardImageInfo>
                            </C.CardImageBack>
                        </C.CardImage>
                    </C.Card>
                    <C.CardValidationInfo 
                        onFocus={() => setIsRotate(!isRotate)}
                        onBlur={() => setIsRotate(!isRotate)}
                    >
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
                        <C.Select onChange={e => setCardPayment(e.target.value)} >
                        <C.Option value=''>
                                Selecione
                            </C.Option>
                            {renderPayment()}
                        </C.Select>
                    
                    <C.FinishButton 
                        disabled={cardPayment === ''} 
                        onClick={() => setShowMessage(true)}
                    >
                        Finalizar
                    </C.FinishButton>
                    {showMessage &&
                    <C.MessageArea>
                        <C.Message>
                            Pagamento realizado com sucesso!! Clique no ícone para realizar o download da sua compra.
                        </C.Message>
                        <C.MessageIcon>
                            <FaFileDownload />
                        </C.MessageIcon>
                    </C.MessageArea>}
                </C.CardArea>}
                {payment === 'billing' &&
                <C.BillingArea>
                    <C.FinishButton 
                        onClick={() => setShowMessage(true)}
                    >
                        Finalizar
                    </C.FinishButton>
                    {showMessage &&
                    <C.MessageArea>
                        <C.Message>
                            Boleto no valor de R$ {(moviePrice).toFixed(2)} gerado com sucesso!! Clique no ícone para realizar o download da sua compra.
                        </C.Message>
                        <C.MessageIcon>
                            <FaFileDownload />
                        </C.MessageIcon>
                    </C.MessageArea>}
                </C.BillingArea>}
                
            </C.PaymentArea>
        </C.Container>
    )
}

export default CartPayment