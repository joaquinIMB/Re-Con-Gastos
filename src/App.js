import React from "react";
import { styled } from "styled-components";
import { Helmet } from "react-helmet";
import {Header,ContenedorBotones,ContenedorHeader} from "./elements/Header";
import Boton from "./elements/Boton";
import BotonCerrarSesion from "./elements/BotonCerrarSesion";
import FormularioGastos from "./components/FormularioGastos";
import {ReactComponent as IconoCategoria} from './img-curso/categorias.svg';
import {ReactComponent as IconoList} from './img-curso/list.svg';


const App = () => {
  return (
    <>
      <Helmet>
        <title>ReCon - Inicio</title>
      </Helmet>
      <ContenedorHeader>
        <Header>
          <ContenedorBotones>
            <Boton otroboton justifyContent direccionOpuesta to={"/categoria-gastos"}>Categorias
              <IconoCategorias/>
            </Boton>
            <Boton otroboton justifyContent direccionOpuesta to={"/lista-gastos"}>Tus Gastos
            <IconoLista/>
            </Boton>
          </ContenedorBotones>
            <BotonCerrarSesion/>
        </Header>
      </ContenedorHeader>
      <FormularioGastos/>
    </>
  );
};

const IconoCategorias = styled(IconoCategoria)`
fill: #f5f5f5;
width:2rem;
height:auto;
`
const IconoLista = styled(IconoList)`
fill: #f5f5f5;
width:2rem;
height:auto;
`

export default App;
