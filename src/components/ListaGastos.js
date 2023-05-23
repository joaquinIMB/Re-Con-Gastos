import React from "react";
import { Helmet } from "react-helmet";
import { Header, Titulo } from "./../elements/Header";
import BtnRegresar from "../elements/BtnRegresar";


const ListaGastos = () => {
  return (
    <>
      <Helmet>
        <title>ReCon - Lista de Gastos</title>
      </Helmet>
      <Header headerGeneral>
        <BtnRegresar />
        <Titulo>Lista de Gastos</Titulo>
      </Header>
    </>    
  );
};

export default ListaGastos;
