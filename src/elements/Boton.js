import { styled, css } from "styled-components";
import { Link } from "react-router-dom";
import theme from "../theme";

const Boton = styled(Link)`
  width:${(props) => (props.botonSumarBorrar ? "30%" : 'auto')};
  background: ${(props) => (props.primario ? "#59C36A" : `${theme.rojo}`)};
  color: ${(props) => (props.colorTexto ? "#ffffff" : "#59C36A")};
  border: none;
  border-radius: ${(props) => (props.borderRadius ? "4px" : "999px")};
  font-family: "Work Sans", sans-serif;
  padding: 0.7rem;
  gap:1rem;
  font-size: 1.35rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  justify-content: ${(props) =>
    props.justifyContent ? "center" : "space-evenly"};
  align-items: center;
  outline: none;
  transition: all 0.3s ease;
  position: relative;
  &:hover {
    background: ${(props) => (props.primarioHover ? "#43a854" : "#c90000")};
    border: ${(props) => (props.borderHover ? "2px solid #43a854" : "none")};
    color: ${(props) => (props.coloTextoHover ? "#43a854" : "#ffffff")};
  }
  ${(props) =>
    props.otroboton &&
    css`
      width: 100%;
      background: none;
      border-radius: 0px;
      font-weight: 300;
      color: #f5f5f5;
      transition: none;
      font-size: 1.1rem;
      letter-spacing: 0.05rem;
      padding: 0.8rem 0rem;
      gap: 10px;
      z-index: 888;
      flex-direction: ${(props) =>
        props.direccionOpuesta ? "row-reverse" : "row"};
      &:hover {
        background:transparent;
      }
    `}
  @media (max-width: 40rem) {
    font-size:${(props) => props.fontSize ? '1.35rem' : '0'};
    padding: ${(props) => props.padding ? '1.5rem 0' : '0.9rem'};
    gap:0;
    justify-content:center;
  }
`;

export default Boton;
