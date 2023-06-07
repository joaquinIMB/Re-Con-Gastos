import { styled } from "styled-components";
import {ContenedorBotones,Header,ContenedorHeader,} from "./../elements/Header";
import Boton from "./../elements/Boton";
import BotonCerrarSesion from "./../elements/BotonCerrarSesion";
import { ReactComponent as IconoCategoria } from "./../img-curso/categorias.svg";
import { ReactComponent as IconoList } from "./../img-curso/list.svg";
import { ReactComponent as IconoFondo } from "./../img-curso/wave.svg";
import { ReactComponent as IconoFondo2 } from "./../img-curso/wave.svg";

const HeaderFormulario = () => {
  return (
    <ContenedorHeader>
      <Header>
          <ContenedorBotones>
            <Boton
              otroboton
              justifyContent
              direccionOpuesta
              padding
              to={"/categoria-gastos"}
            >
              Categorias
              <IconoCategorias />
            </Boton>
            <Boton
              otroboton
              justifyContent
              direccionOpuesta
              padding
              to={"/lista-gastos"}
            >
              Tus Gastos
              <IconoLista />
            </Boton>
            <BotonCerrarSesion />
          </ContenedorBotones>
        <Fondo />
        <Fondo2 />
      </Header>
    </ContenedorHeader>
  );
};

const IconoCategorias = styled(IconoCategoria)`
  fill: #f5f5f5;
  width: 2rem;
  height: auto;
`;
const IconoLista = styled(IconoList)`
  fill: #f5f5f5;
  width: 2rem;
  height: auto;
`;
const Fondo = styled(IconoFondo)`
  position: absolute;
  z-index: 0;
  opacity: 0.03;
  left: 0;
  width: 80%;
  transform: scale(1) rotate(197deg);
  fill: #00000098;
  @media(max-width:60rem){
    width:100%;
  }
`;
const Fondo2 = styled(IconoFondo2)`
  position: absolute;
  z-index: 0;
  opacity: 0.01;
  width: 80%;
  right: 0;
  transform: scale(1) rotate(164deg);
  fill: #ffffff98;
  @media(max-width:60rem){
    width:100%;
  }
`;
export default HeaderFormulario;
