import * as C from './styles'
import { useState } from 'react'

const CartPayment = () => {
    const [payment, setPayment] = useState('')
    console.log(payment)

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
                <C.Input type='text' placeholder='Digite seu nome'/>
                <C.Label>
                    E-mail:
                </C.Label>
                <C.Input type='email' placeholder='Digite seu e-mail'/>
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
                    <C.Label>
                        Número do cartão:
                    </C.Label>
                    <C.Input 
                        type='text' 
                        placeholder='0000 0000 0000 0000'
                        maxLength='16'
                    />
                    <C.Label>
                        Nome impresso:
                    </C.Label>
                    <C.Input type='text' placeholder='Digite o nome impresso no cartão'/>
                    <C.Label>
                        Vencimento:
                    </C.Label>
                    <C.Select>
                    <C.Option value=''>
                            Mês
                        </C.Option>
                        <C.Option value='bankSlip'>
                            Boleto bancário
                        </C.Option>
                        <C.Option value='creditCard'>
                            Cartão de crédito
                        </C.Option>
                    </C.Select>
                    <C.Select>
                    <C.Option value=''>
                            Ano
                        </C.Option>
                        <C.Option value='bankSlip'>
                            Boleto bancário
                        </C.Option>
                        <C.Option value='creditCard'>
                            Cartão de crédito
                        </C.Option>
                    </C.Select>
                    <C.Label>
                        Código de segurança (CVV):
                    </C.Label>
                    <C.Input 
                        type='text' 
                        placeholder='000'
                        maxLength='3'
                    />
                    <C.Label>
                        Selecione o parcelamento:
                    </C.Label>
                    <C.Select>
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
                    </C.CardArea>}
            </C.PaymentArea>
        </C.Container>
    )
}

export default CartPayment