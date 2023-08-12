import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 70px;
    margin-bottom: 20px;

    a {
        text-decoration: none;
    }

    @media (max-width: 500px) {
        flex-direction: column;
        padding: 50px 10px;
    }
`;

export const CartList = styled.div`
    padding-top: 20px;
    width: 40%;

    @media (max-width: 500px) {
        width: 100%;
    }
`;

export const CartListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #DDD;
    padding: 12px;
    box-sizing: border-box;
`;

export const CartListHeaderInfoArea = styled.div`
    
`;

export const CartListHeaderInfo = styled.p`
    font-size: 0.8rem;
    font-weight: bold;
    color: #333333;
    margin: 0;
    text-transform: uppercase;

    @media (max-width: 500px) {
        margin-bottom: 5px;
    }
`;

export const CartListSecurity = styled.div`
    display: flex;
    align-items: center;
    color: #999999;    
`;

export const LockIcon = styled.i`
    font-size: 1.5rem;        
    margin-right: 5px;
`;

export const SecurityText = styled.p`
    font-size: 0.9rem;
    margin: 0;
    line-height: 12px;
    text-align: center;

    span {
        font-size: 0.7rem;
    }
`;

export const Resume = styled.div`
    padding-top: 20px;
    margin-left: 10px;
    width:20%;

    @media (max-width: 500px) {
        width: 95%;
    }
`;

export const ResumeHeader = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #DDD;
    padding: 20px 10px;
    box-sizing: border-box;
`;

export const ResumeHeaderText = styled.p`
    font-size: 0.9rem;
    font-weight: bold;
    color: #333333;
    margin: 0;
`;

export const ResumeSubtotal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 20px;
    border-bottom: 1px solid #999999;
`;

export const SubtotalText = styled.p`
    font-size: 0.9rem;
    color: #333333;
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
`;

export const TotalStrong = styled.p`
    color: #333333;
    font-size: 1rem;
    font-weight: bold;
    margin: 0;
`;

export const TotalValue = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
`;

export const TotalValueText = styled.p`
    color: #333333;
    font-size: 0.8rem;
    margin: 0;
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