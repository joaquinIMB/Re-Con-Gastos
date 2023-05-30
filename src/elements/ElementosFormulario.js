import { styled, css } from "styled-components";
import theme from "../theme";

const ContenedorFiltros = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 3.5rem;

    & > div {
      width: 22rem;
      align-self: center;
    }
  @media (max-width:26.563rem){
    align-items: center;
    & > div {
        margin-bottom: 0.62rem;
        
      }
  }
`;

const Formulario = styled.form`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background:#ffffff;
  @media (max-width: 60rem) {
    justify-content: space-between;
  }
`;

const Input = styled.input`
  font-size: 1.2rem;
  outline: none;
  border: none;
  border-bottom: 3px solid ${theme.grisClaro};
  border-radius:3px;
  width: 100%;
  text-align: left;
  padding: 1.3rem 1rem;
  margin:0.5rem;
  font-family: "Work Sans", sans-serif;
  transition:all .3s ease;
  &:focus{
    border-bottom: 3px solid #43a854;
  }
  ${(props) => props.inputFormularioGastos && css`
  margin:0.5rem auto;
  font-weight: 500;
  font-size: 2.7rem;
  background:transparent;
  border-radius:5px;
  padding: 1rem;
  text-align: center;
  border: 3px solid #43a854;
  font-family: "PT Sans", sans-serif;
  & > svg{
    width:1rem;
    height:auto;
    position:absolute;
  }
  `}
`;
const ContenedorBoton = styled.div`
  display: flex;
  justify-content: center;
  margin: 2.1rem 0; 
  ${(props) => props.contenedorBotonesGastos && css`
    margin: 1.6rem auto;
    justify-content: space-evenly;
    width: 58%;
  `}
`;

const ContenedorDeInput = styled.div`
  margin: 0 auto;
  width: 70%;
  text-align:center;
  position:relative;
  margin-top:1rem;
  & > label{
    position: absolute;
    left: 3%;
    top: -3px;
    font-size:1.2rem;;
    text-align: center;
    pointer-events: none;
    background: #ffffff;
    width: 8rem;
    font-weight: 600;
    color: #43a854;
    transition:0.3s all ease;
  }
`;
export { Input, Formulario, ContenedorFiltros, ContenedorBoton, ContenedorDeInput };
