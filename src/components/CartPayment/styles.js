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
`;

export const CardArea = styled.div`
    display: flex;
    flex-direction: column;
    align-content: flex-start;
`;