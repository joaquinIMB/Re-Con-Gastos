import React from 'react';
import styled from 'styled-components';
import Boton from '../elements/Boton';
import { Link } from "react-router-dom";
import { ContenedorBoton } from '../elements/ElementosFormulario';
import theme from '../theme';

const Error404 = () => {
    return ( 
        <ContenedorError>
            <TituloError>Error 404</TituloError>
            <SubtituloError>Lo sentimos. La página que buscas no existe, o se encuentra en mantenimiento.</SubtituloError>
        <ContenedorBoton>
        <Boton
          colorTexto
          justifyContent
          fontSize
          borderRadius
          as={Link}
          to={"iniciar-sesion"}
        >
          Inicia Sesion
        </Boton>
        <Boton
          colorTexto
          justifyContent
          fontSize
          borderRadius
          as={Link}
          to={"registrarse"}
        >
          Registrate
        </Boton>
        </ContenedorBoton>
      </ContenedorError>
     );
}
 
const TituloError = styled.h1`
    font-size: 4rem;
    font-weight: 500;
    font-family: 'PT Sans',sans-serif;
    color: ${theme.rojo};
    text-align: center;
`
 
const SubtituloError = styled.h2`
font-size:2rem;
font-weight:500;
font-family: 'PT Sans', sans-serif;
color: #f5f5f5;
text-align: center;
letter-spacing: 1px;
@media (max-width:50rem) {
    font-size:1.5rem;
}
`

const ContenedorError = styled.div`
    height: 100vh;
    overflow-y: hidden;
    overflow-x: hidden;
    margin: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:2rem;
    width: 100%;
    background: #1c1c1c;
    box-shadow: 0px 3px 20px #00000040;
    z-index: 12;
    @media (max-width:50rem) {
    width:auto;
}
    ` 

export default Error404;