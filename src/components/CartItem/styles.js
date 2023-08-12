import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    max-width: 800px;
    margin-top: 15px;
    padding-bottom: 15px;
    border-bottom: 0.5px solid #DDDDDD;

    @media (max-width: 500px) {
        flex-wrap: wrap;
    }
`;

export const PosterArea = styled.img`
    width: 130px;
    height: 180px;
    margin-right: 20px;
    border-radius: 5px;
`;

export const InfoArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
`;

export const MovieTitle = styled.h3`
    margin: 0;
    font-size: 1.2rem;
    color: #333333;
`;

export const OriginalMovieTitle = styled.p`
    margin-bottom: 0;
    font-size: 0.9rem;
    color: #333333;
`;

export const RateArea = styled.div`
    display: flex;
    align-items: center;
    margin: 5px 0px;
`;

export const ReleaseDate = styled.p`
    margin: 0;
    font-size: 0.9rem;
    color: #333333;
`;

export const Remove = styled.button`
    color: #333333;
    margin-top: 10px;
    width: 150px;
    padding: 5px;
    border: none;
    border-radius: 5px;
    background-color: #EEE;
    cursor: pointer;
    transition: 300ms ease-in-out;

    &:hover{
        background-color: #FA4C37;
        color: #fff;
    }
`;

export const SelectArea = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 25px;
    margin-right: 0;

    @media (max-width: 500px){
        margin: 0;
        margin-top: 20px;
    }
`;

export const Label = styled.label`
    font-size: 0.9rem;
    color: #333333;
    margin-bottom: 10px;
`;

export const Select = styled.select`
    outline: none;
    color: #333333;
    padding: 5px;
    border-radius: 5px;
`;

export const Option = styled.option`
    font-size: 0.9rem;
    color: #333333;
`;

export const MovieValue = styled.p`
    font-size: 0.9rem;
    margin-top: 15px;
    color: #333333;

    strong {
        font-size: 1rem;
    }
`;

export const EmphText = styled.span`
    font-size: 0.9rem;
    font-weight: bold;
    color: #333333;
`;

export const VoteAverage = styled.span`
    font-size: 0.9rem;
    color: #333333;
`;

export const Icon = styled.i`
    font-size: 0.9rem;
    color: #333333;
    margin-left: 5px;
`;