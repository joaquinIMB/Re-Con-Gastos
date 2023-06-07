import React from "react";
import { Helmet } from "react-helmet";
import { Titulo } from "./../elements/Header";
import BtnRegresar from "../elements/BtnRegresar";
import BarraTotalGastado from "./BarraTotalGastado";
import useObtenerGastosPorCategoria from "../hooks/useObtenerGastosPorCategoria";
import {
  ContenedorLista,
  Lista,
  ElementoLista,
  Categoria,
  Valor,
  Descripcion
} from './../elements/ElementosListaGastos';
import IconosCategorias from "./../elements/IconosCategorias";
import ConvertirMoneda from './../funciones/ConvertirMoneda'

const GastosCategoria = () => {
const gastos = useObtenerGastosPorCategoria();
  return (
    <>
      <Helmet>
        <title>ReCon - Categorias</title>
      </Helmet>
      <ContenedorLista>
      <Titulo>
        <BtnRegresar />
        Categorias
        </Titulo>
        <Lista tamañoPadding>
          {gastos.map((elemento, index) => {
            return(
              <ElementoLista tamañoChico key={index}>
                <Categoria>
                  <IconosCategorias id={elemento.categoria}/>
                </Categoria>
                <Descripcion>{elemento.categoria}</Descripcion>
                <Valor valorRight>{ConvertirMoneda(elemento.valor)}</Valor>
              </ElementoLista>
            )
          })}
        </Lista>
      <BarraTotalGastado/>
      </ContenedorLista>
    </>
  );
};

export default GastosCategoria;
