import { styled, css } from "styled-components";
import theme from "../theme";

const ContenedorFiltros = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 0px auto;
  & > div {
    width: 20rem;
    align-self: center;
  }
  @media (max-width: 64rem) {
    gap: 2rem;
    & > div {
      width: 100%;
      height: 4.2rem;
    }
  }
  @media screen and (max-width: 50rem) {
    width: 90%;
    flex-direction: column;
    gap: 1rem;
  }
  @media (max-height: 30rem) {
    margin-top: 1rem;
  }
`;
const ContenedorBoton = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.2rem 0;
  gap:4rem;
  ${(props) =>
    props.contenedorBotonesGastos &&
    css`
      margin: 0.6rem auto;
      justify-content: space-evenly;
      width: 58%;
      @media screen and (max-width: 26.563rem) {
        flex-direction: row;
        width: 70%;
        height: 2.8rem;
        gap: 2rem;
        margin: 0 auto;
        padding: 0 1rem;
      }
      @media (max-height: 30rem) {
        margin-bottom: 1rem;
      }
    `}
`;
const Formulario = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fdfdfd;
  position: relative;
  @media (max-width: 60rem) {
    justify-content: space-between;
  }
`;

const Input = styled.input`
  font-size: 1.2rem;
  outline: none;
  border: none;
  border-bottom: 3px solid ${theme.grisClaro};
  width: 100%;
  text-align: left;
  padding: 1.3rem 1rem;
  margin: 0.5rem 0rem;
  font-family: "Work Sans", sans-serif;
  transition: all 0.3s ease;
  &:focus {
    border-bottom: 3px solid #43a854;
  }
  & > svg {
    width: 1rem;
    height: auto;
    position: absolute;
    cursor: pointer;
  }
`;

const InputFormularioGastos = styled.input`
  width: 100%;
  margin: 0.5rem auto;
  font-weight: 500;
  font-size: 2.7rem;
  background: transparent;
  padding: 1rem;
  font-family: "PT Sans", sans-serif;
  outline: none;
  border: none;
  border-bottom: 3px solid #d7d7d7;
  transition: all 0.3s ease;
  &:focus {
    border-bottom: 3px solid ${theme.verdeAgua};
  }
  @media (max-width: 64rem) {
    margin: 0 auto;
    padding: 1.5rem 1rem 0.5rem 1rem;
  }
`;

const ContenedorDeInput = styled.div`
  margin: 0 auto;
  width: 70%;
  text-align: center;
  position: relative;
  & > label {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    color: #d7d7d7;
    background: transparent;
    padding: 0 0.2rem;
    font-size: 2rem;
    pointer-events: none;
    transition: all 0.2s ease;
    @media (max-width: 64rem) {
      font-size: 2rem;
      left: 5px;
    }
    @media screen and (max-width: 26.563rem) {
      font-size: 1.7rem;
    }
  }
  & > input:focus ~ label {
    color: ${theme.verdeAgua};
  }
  @media screen and (max-width: 26.563rem) {
    width: 90%;
  }
`;
export {
  Input,
  Formulario,
  ContenedorFiltros,
  ContenedorBoton,
  ContenedorDeInput,
  InputFormularioGastos,
};
