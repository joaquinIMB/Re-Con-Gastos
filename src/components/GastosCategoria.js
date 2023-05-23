import React from "react";
import { Helmet } from "react-helmet";
import { Header, Titulo } from "./../elements/Header";
import BtnRegresar from "../elements/BtnRegresar";

const GastosCategoria = () => {
  return (
    <>
      <Helmet>
        <title>ReCon - Categorias</title>
      </Helmet>
      <Header headerGeneral>
        <BtnRegresar />
        <Titulo>Categorias</Titulo>
      </Header>
    </>
  );
};

export default GastosCategoria;
