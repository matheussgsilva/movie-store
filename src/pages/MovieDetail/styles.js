import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
`;

export const Detail = styled.div`
    display: flex;

    img {
        width: 65vw;
        margin-right: 0px;
        margin-left: -250px;
    }
`;

export const InfoArea = styled.div`
    width: 50vw;
    background: linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 70%, rgba(255,255,255,0) 100%);
    z-index: 1;    
    padding: 5vw;

    h2 {
        max-width: 300px;
    }

    p{
        display: block;
        width: 30vw;
    }
`;
