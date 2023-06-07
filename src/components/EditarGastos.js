import React from "react";
import { Helmet } from "react-helmet";
import FormularioGastos from "./FormularioGastos";
import { ContenedorLista } from "../elements/ElementosListaGastos";
import { useParams } from "react-router-dom";
import useObtenerGasto from "../hooks/useObtenerGasto";

const EditarGastos = () => {
  const { id } = useParams();
  const [gasto] = useObtenerGasto(id);
  return (
    <>
      <Helmet>
        <title>ReCon - Editar Gasto</title>
      </Helmet>
      <ContenedorLista>
        <FormularioGastos gasto={gasto}/>
      </ContenedorLista>
    </>
  );
};

export default EditarGastos;
