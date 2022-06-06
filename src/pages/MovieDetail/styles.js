import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    overflow-y: hidden;
    padding-bottom: 25px;
`;

export const Detail = styled.div`
    display: flex;

    img {
        width: 60vw;
        height: 78vh;
        margin-right: 1px;
        margin-left: -15px;
        border-radius: 10px;
        box-shadow: -10px 12px 30px -3px rgba(0,0,0,0.5);
    }
`;

export const InfoArea = styled.div`
    width: 30vw;  
    padding: 5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #4B5C6B;
`;

export const MovieTitle = styled.h2`
    max-width: 300px;
    margin-top: 0px;
`;

export const MovieInfo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    span {
        margin-right: 5px;
    }

    i {
        margin-right: 10px;
    }
`;

export const MovieLink = styled.a`
    text-decoration: none;
    color: #4B5C6B;

    &:hover {
        text-decoration: underline;
    }
`;

export const MovieOverview = styled.p`
    display: block;
    width: 30vw;
`;
