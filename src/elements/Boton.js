import { styled, css } from "styled-components";
import { Link } from "react-router-dom";
import theme from "../theme";

const Boton = styled(Link)`
  width: ${(props) => (props.conIcono ? "15.62rem" : "13.62rem")}; //250px
  background: ${(props) => (props.primario ? "#59C36A" : `${theme.rojo}`)};
  color: ${(props) => (props.colorTexto ? "#ffffff" : "#59C36A")};
  border: none;
  border-radius: ${(props) => (props.borderRadius ? "4px" : "999px")};
  font-family: "Work Sans", sans-serif;
  padding: 0.7rem;
  font-size: 1.35rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  justify-content:${(props) => (props.justifyContent ? "center" : "space-between")};
  align-items: center;
  outline: none;
  transition: all 0.3s ease;
  position:relative;
  &:hover {
    background: ${(props) => (props.primarioHover ? "#43a854" : "#c90000")};
    border:${(props) => (props.borderHover ? "2px solid #43a854" : "auto")};
    color:${(props) => (props.coloTextoHover ? "#43a854" : "none")};
  }
  ${(props) =>
    props.otroboton &&
    css`
      width: 100%;
      background: none;
      border-radius:0px;
      font-weight: 700;
      color: #f5f5f5;
      transition:none;
      font-size:1.20rem;
      font-family: "PT Sans", sans-serif;
      letter-spacing:0.05rem;
      padding: 0.7rem 0rem;
      gap:10px;
      flex-direction:${(props) => props.direccionOpuesta ?'row-reverse':'row'};
      &:hover{
        background:#ffffff20;
      }
    `}
  @media screen and (max-width: 26.563rem) {
    font-size:1rem;
    padding:0.5rem ;
  }
`;

export default Boton;
