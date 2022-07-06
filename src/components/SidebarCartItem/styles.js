import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 350px;
    margin-bottom: 15px;
`;

export const PosterArea = styled.img`
    width: 60px;
    height: 80px;
    border-radius: 5px;
    margin-right: 10px;
`;

export const InfoArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 5px;
    height: 80px;
    box-sizing: border-box;
`;

export const MovieTitle = styled.h3`
    color: #333333;
    font-size: 0.9rem;
    margin-top: 0px;
`;

export const PriceInfoArea = styled.div`
    display: flex;
    justify-content: space-between;
    width: 150px;
`;

export const MoviePrice = styled.span`
    color: #333333;
    font-size: 1rem;
`;

export const RemoveMovie = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: #333333;
    transition: color 300ms;

    &:hover {
        color: #FA4C37;
    }
`;