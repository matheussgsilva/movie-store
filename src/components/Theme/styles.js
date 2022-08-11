import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
`;

export const Sidebar = styled.aside`
    position: fixed;
    z-index: 1;
    right: -450px;
    top: 15vh;
    transform: ${props => props.showSidebar ? 'translateX(-450px)' : 'translateX(10px)'};
    transition: transform 300ms ease-in-out;
`;

export const PopUp = styled.div`
    position: fixed;
    z-index: 10;
    right: 18px;
    top: 12vh;
`;

export const Page = styled.div`

`;