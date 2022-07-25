import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 90px;

    a {
        text-decoration: none;
    }
`;

export const CartList = styled.div`
    padding-top: 20px;
`;

export const CartListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #DDD;
    max-width: 800px;
    padding: 10px;
    box-sizing: border-box;
`;

export const CartListHeaderInfo = styled.div`
    text-transform: uppercase;

    p {
        font-size: 0.8rem;
        font-weight: bold;
        color: #333333;
        margin: 0;
        
    }

    span {
        font-size: 0.8rem;
        color: #333333;
    }
`;

export const CartListSecurity = styled.div`
    display: flex;
    align-items: center;
    color: #999999;

    i {
        font-size: 1.5rem;        
        margin-right: 5px;
    }

    p {
        font-size: 0.9rem;
        margin: 0;
        line-height: 12px;
        text-align: center;
    }

    span {
        font-size: 0.7rem;
    }
`;

export const Resume = styled.div`
    padding-top: 20px;
    margin-left: 10px;
    position: sticky;
`;

export const ResumeHeader = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #DDD;
    width: 300px;
    padding: 20px 10px;
    box-sizing: border-box;    

    span {
        font-size: 0.9rem;
        font-weight: bold;
        color: #333333;
        margin: 0;
        text-transform: uppercase;
    }

`;

export const ResumeSubtotal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 20px;
    font-size: 0.9rem;
    color: #333333;
    border-bottom: 1px solid #999999;
`;

export const PriceResume = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ResumeTotal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;    
    background-color: #DDD;
    padding: 20px;
    color: #333333;

    span {
        font-weight: bold;
    }
`;

export const TotalValue = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    p {
        font-size: 0.8rem;
        margin: 0;
    }

    strong {
        font-size: 1rem;
    }
`;

export const FinishButton = styled.button`
    display: block;
    margin-top: 10px;
    width: 100%;
    padding: 15px;
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: bold;
    background-color: #8DD7CF;
    color: #FFF;
    border: none;
    cursor: pointer;
    transition: 300ms ease-in-out;

    &:hover {
        opacity: 0.8;
    }
`;

export const ShoppingButton = styled(FinishButton)`
    border: 2px solid #8DD7CF;
    background-color: #FFF;
    color: #8DD7CF;
`;