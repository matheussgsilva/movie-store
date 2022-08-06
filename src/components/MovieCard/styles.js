import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 180px;
    height: 350px;
`;

export const ContentArea = styled.div`
    width: 100%;
    border: 2px solid #C7D2DB;
    border-bottom: none;
    border-radius: 5px 5px 0px 0px;
    box-sizing: border-box;
    color: #4B5C6B;
`;

export const PosterArea = styled.div`
    width: 100%;
    height: 200px;
    text-align: center;
    border-bottom: 2px solid #C7D2DB;
    position: relative;

    img {
        width: 170px;
        height: 200px;
        border-radius: 5px 5px 0px 0px;
    }

    span {
        width: 100px;
        position: absolute;
        text-align: center;
        margin-top: -150px;
        background-color: #C7D2DB;
        bottom: 0;
        left: calc(50% - 50px);
        border-radius: 5px 5px 0px 0px;
        font-size: 0.8rem;
    }
`;

export const InfoIcon = styled.i`
    position: absolute;
    top: 0;
    left: 0;
    margin: 10px;
    color: #FFF;
    cursor: pointer;
    overflow: hidden;

    &:hover {
        color: #F5DC00;
    }
`;

export const FavoriteIcon = styled.i`
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;
    color: ${props => props.favorite ? '#FA4C37' : '#FFF'};
    cursor: pointer;
`;

export const InfoArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    height: 110px;

    h3 {
        font-size: 1rem;
        margin: 5px;
    }

    span {
        font-size: 0.9rem;
        margin-right: 5px;
    }

    p {
        font-size: 1rem;
        font-weight: bold;
        margin-top: 3px;
    }
`;

export const Button = styled.button`
    border: none;
    width: 100%;
    padding: 8px;
    background-color: ${props => props.cart ? '#FA4C37' : '#6558F5'};
    color: #FFF;
    border-radius: 5px;
    margin-top: -10px;
    font-size: 0.9rem;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;