import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 250px;
`;

export const Header = styled.div`
    display: flex;
    justify-content: flex-start;
    background-color: #DDD;
    width: 60%;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 10px;
`;

export const Title = styled.h3`
    display: block;
    font-size: 1rem;
    color: #333333;
    text-transform: uppercase;
`;

export const PaymentArea = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    justify-content: flex-start;
    padding: 10px;
    margin-left: 20%;
    width: 60%;
`;

export const Label = styled.label`
    font-size: 0.9rem;
    color: #333333;
    margin-top: 10px;
    margin-bottom: 5px;
`;

export const Input = styled.input`
    box-sizing: border-box;
    width: 96%;
    border: 1px solid #DDD;
    outline: none;
    color: #333333;
    padding: 10px 5px;

    &:focus{
        border: 1px solid #8DD7CF;
        outline: 1px solid #8DD7CF;
    }
`;

export const Select = styled.select`
    outline: none;
    box-sizing: border-box;
    width: 96%;
    border: 1px solid #DDD;
    padding: 10px 5px;
    color: #333333;

    &:focus{
        border: 1px solid #8DD7CF;
        outline: 1px solid #8DD7CF;
    }
`;

export const Option = styled.option`
    color: #333333;
    line-height: 80px;
`;

export const CardArea = styled.div`
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    margin-top: 30px;
`;

export const Card = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    margin-right: 20px;
    width: 56%;
`;

export const CardImage = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border: 1px solid #DDD;
    border-radius: 20px;
    width: 38%;
    box-sizing: border-box;
`;

export const CardImageText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export const CardImageInfo = styled.span`
    font-size: 0.8rem;
    color: #333333;
    margin-top: 10px;
`;

export const CardImageLogo = styled.div`
    display: flex;
    align-items: center;
    font-size: 2.5rem;
    color: ${props => props.cardNumber.length < 4 ? '#DDD' : '#8DD7CF'};
`;

export const CardValidationInfo = styled.div`
    display: flex;
`;

export const CardExpires = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin-right: 20px;
`;

export const CardExpiresSelect = styled.div`
    display: flex;
`;

export const CardCVV = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FinishButton = styled.button`
    display: block;
    margin-top: 10px;
    width: 96%;
    padding: 15px;
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: bold;
    background-color: #8DD7CF;
    color: #FFF;
    border: none;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    transition: 300ms ease-in-out;

    &:hover {
        opacity: 0.8;
    }
`;

export const MessageArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-right: 2%;
`;

export const Message = styled.p`
    color: #333333;
    font-size: 1rem;
`;

export const MessageIcon = styled.i`
    color: #333333;
    font-size: 2.5rem;
    cursor: pointer;
    transition: color 300ms ease-in-out;

    &:hover {
        color: #8DD7CF;
    }
`;

export const BillingArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-right: 2%;
`;