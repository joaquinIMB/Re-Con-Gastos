import { styled, css } from "styled-components";
import theme from "../theme";

const ContenedorFiltros = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.87rem;

  @media (max-width: 60rem) {
    flex-direction: column;

    & > * {
      width: 100%;
      margin-bottom: 0.62rem;
    }
  }
`;

const Formulario = styled.form`
  padding: 1rem 0rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 60rem) {
    justify-content: start;
  }
`;

const Input = styled.input`
  font-size: 1.2rem;
  outline: none;
  border:none;
  border-bottom: 3px solid ${theme.grisClaro};
  border-radius:3px;
  width: 100%;
  text-align: left;
  padding: 1.5rem 1rem;
  margin:0.5rem;
  align-self: center;
  font-family: "Work Sans", sans-serif;
  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
  &:focus{
    border-bottom: 3px solid ${theme.verdeAgua};
  }
  @media (max-width: 60rem) {
    font-size: 1rem;
    padding:1rem;
  }
  ${(props) => props.inputFormularioGastos && css`
  width: 100%;
  margin:0 auto;
  font-size: 2.7rem;
  font-weight: 500;
  background:transparent;
  border-radius:5px;
  padding: 1rem;
  transition:all 0.5s ease;
  box-shadow: 0px 2.5px 1px #00000030;
  &:focus{
    box-shadow: 0px 2.5px 10px #00000050;
  }
  &::placeholder {
    color:${theme.verdeOpaco};
    text-align:center;
    font-weight:700;
    font-family: "PT Sans", sans-serif;
    letter-spacing:5px;
  }
  @media (max-width: 60rem) {
    font-size: 1.6rem;
  }
  `}
`;
const ContenedorBoton = styled.div`
  display: flex;
  justify-content: center;
  margin: 2.1rem 0; 
`;

export { Input, Formulario, ContenedorFiltros, ContenedorBoton };
