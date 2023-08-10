import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
    padding-top: 70px;

    @media (max-with: 500px) {
        padding-top: 50px;
    }
`;

export const Title = styled.h2`
    color: #4B5C6B;
    margin-left: 10px;

    @media (max-width: 500px) {
        font-size: 1.2rem;
    }
`;

export const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 20px;
    padding: 0px 20px;
`;