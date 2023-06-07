import { styled, css } from "styled-components";

const ContenedorIniciarRegistrar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 0.5rem 0;
  @media screen and (max-width: 26.563rem) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-height: 30rem) {
    display: none;
  }
`;
const Redireccion = styled.h3`
  font-size: 1rem;
  color: #000;
  padding: 0.5rem;
  font-weight: 500;
  @media screen and (max-width: 40rem) {
    padding: 0.5rem 0rem;
    font-size: 0.85rem;
  }
  @media screen and (max-width: 26.563rem) {
    padding: 0.5rem 0rem;
    font-size: 1.2rem;
  }
  ${(props) =>
    props.ruta &&
    css`
      color: #43a854;
      cursor: pointer;
      font-weight: 700;
      @media screen and (max-width: 26.563rem) {
        padding: 0.5rem 0rem;
        font-size: 1.3rem;
      }
    `}
`;

export { ContenedorIniciarRegistrar, Redireccion };
