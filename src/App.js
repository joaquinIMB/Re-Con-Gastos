import React from "react";
import { Helmet } from "react-helmet";
import {Header,Titulo,ContenedorBotones,ContenedorHeader} from "./elements/Header";
import Boton from "./elements/Boton";
import BotonCerrarSesion from "./elements/BotonCerrarSesion";
import FormularioGastos from "./components/FormularioGastos";

const App = () => {
  return (
    <>
      <Helmet>
        <title>ReCon - Inicio</title>
      </Helmet>
      <ContenedorHeader>
        <Header headergeneral>
          <Titulo>Agregar Gasto</Titulo>
          <ContenedorBotones>
            <Boton otroboton to={"/categoria-gastos"}>Categorias</Boton>
            <Boton otroboton to={"/lista-gastos"}>Lista de Gastos</Boton>
            <BotonCerrarSesion/>
          </ContenedorBotones>
        </Header>
      </ContenedorHeader>
      <FormularioGastos/>
    </>
  );
};

export default App;
