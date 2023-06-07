import { styled } from "styled-components";

const Header = styled.header`
  width: 100%;
  margin:0 auto; 
  display: flex;
  justify-content: end;
  align-items: center;
  background: #276231;
  flex-direction: row;
`;

const Titulo = styled.h1`
    position: relative;
    font-size: 1.5rem;
    color: #fdfdfd;
    padding: 0.742rem 2rem;
    display: flex;
    font-weight: 500;
    justify-content: space-between;
    align-items: center;
    background: #363636;
    box-shadow: 0px 1px 3px #27623140;
    @media (max-width: 40rem){
    width: 100%;
    padding: 1.4rem 2rem;
}
`;

const ContenedorHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  position: relative;
  overflow-y: clip;
  box-shadow: 0px 0px 6px #00000035;
  @media (max-height: 30rem) {
    display: none;
  }
`;

const ContenedorBotones = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

export { Header, Titulo, ContenedorHeader, ContenedorBotones };
