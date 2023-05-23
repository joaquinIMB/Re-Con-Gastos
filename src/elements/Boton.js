import { styled, css } from "styled-components";
import { Link } from "react-router-dom";

const Boton = styled(Link)`
  width: ${(props) => (props.conIcono ? "15.62rem" : "auto")}; //250px
  background: ${(props) => (props.primario ? "#59C36A" : "#000000")};
  color: ${(props) => (props.colorTexto ? "#ffffff" : "#000000")};
  border: none;
  border-radius: ${(props) => (props.borderRadius ? "4px" : "999px")};
  font-family: "Work Sans", sans-serif;
  padding: 0.7rem;
  font-size: 1.35rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  justify-content:${(props) => (props.justifyContent ? "space-evenly" : "space-between")};
  align-items: center;
  outline: none;
  transition: all 0.3s ease;
  position:relative;
  &:hover {
    background: ${(props) => (props.primarioHover ? "#43a854" : "#000000")};
    box-shadow:${(props) => (props.sombraHover ? '0px 4px 10px #00000070':'none')};
  }
  ${(props) =>
    props.otroboton &&
    css`
      background: none;
      border-radius:0px;
      color:#000000;
      transition:none;
      font-size:1.20rem;
      font-weight:700;
      font-family: "PT Sans", sans-serif;
      letter-spacing:0.05rem;
      &:hover{
        color:#00000080;
        background:none;
      }
    `}
  svg {
    height: ${(props) => (props.iconoGrande ? "auto" : "1.75rem;")}; 
    fill: #ffffff; 
    margin-left: .8rem;
  }
`;

export default Boton;
