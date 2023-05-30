import {styled} from 'styled-components';

const Header = styled.div`
    width: 100%;
    height:100vh;
    padding: 0.30rem 0rem; 
    display: flex;
    justify-content: center;
    align-items: center;
    background:#276231;
    flex-direction:column;
    box-shadow: 2px 0px 12px #6ec77c7a;
    @media(max-width: 60rem){
        justify-content: start;
    }
`;
 
const Titulo = styled.h1`
    font-size: 2rem;
    color: #59c36a;
    padding: 0.2rem 2.8rem;
    text-align: end;
    font-weight: 500;
    font-family: 'Ubuntu',sans-serif;
    height: 3.12rem;
    box-shadow: 0px 0.5px 1px #ececec;
    @media(max-width: 60rem){ 
        font-size: 1.3rem; 
    }
`;
 
const ContenedorHeader = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 20rem;
    box-shadow: 2px 0px 5px #27623196;
    position: relative;
    @media(max-width: 60rem){ /* 950px */
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;
 
const ContenedorBotones = styled.div`
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width:100%;
    @media screen and (max-width: 26.563rem) {
    align-items:right;
  }
`;

export {Header, Titulo, ContenedorHeader, ContenedorBotones};