import {styled, css} from 'styled-components';

const Header = styled.div`
    width: 100%;
    padding: 0.30rem 0rem; 
    display: flex;
    justify-content: space-between;
    align-items: center;
 
    @media(max-width: 60rem){
        justify-content: start;
    }
    ${(props) => props.headergeneral && css`
        padding:.3rem 0rem;
    `}
`;
 
const Titulo = styled.h1`
    font-weight: normal;
    font-size: 1.6rem; 
    color: #000;
    padding:0.67rem;
    @media(max-width: 60rem){ 
        font-size: 1.3rem; 
    }
`;
 
const ContenedorHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media(max-width: 60rem){ /* 950px */
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
 
        & > div {
            display: flex;
            justify-content:space-between;
        }
    }
`;
 
const ContenedorBotones = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:35rem;
    
`;

export {Header, Titulo, ContenedorHeader, ContenedorBotones};