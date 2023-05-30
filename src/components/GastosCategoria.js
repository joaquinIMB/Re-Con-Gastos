import React from "react";
import { Helmet } from "react-helmet";
import { ContenedorHeader, Header } from "./../elements/Header";
import BtnRegresar from "../elements/BtnRegresar";
import BarraTotalGastado from "./BarraTotalGastado";

const GastosCategoria = () => {
  return (
    <>
      <Helmet>
        <title>ReCon - Categorias</title>
      </Helmet>
      <ContenedorHeader>
        <Header>
        <BtnRegresar />
        </Header>
      </ContenedorHeader>
      <BarraTotalGastado/>
    </>
  );
};

export default GastosCategoria;
