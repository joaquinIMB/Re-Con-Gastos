import React from "react";
import { Helmet } from "react-helmet";
import { Titulo } from "./../elements/Header";
import BtnRegresar from "../elements/BtnRegresar";
import useGastos from "../hooks/useGastos";
import {
  ContenedorLista,
  Lista,
  ElementoLista,
  Categoria,
  Descripcion,
  Valor,
  Fecha,
  ContenedorBotones,
  BotonAccion,
  BotonCargarMas,
  ContenedorBotonCentral,
  ContenedorSubtitulo,
  Subtitulo,
} from "./../elements/ElementosListaGastos";
import ConvertirMoneda from "./../funciones/ConvertirMoneda";
import { ReactComponent as IconoEditar } from "./../img-curso/editar.svg";
import { ReactComponent as IconoBorrar } from "./../img-curso/borrar.svg";
import IconosCategorias from "./../elements/IconosCategorias";
import BarraTotalGastado from "./../components/BarraTotalGastado";
import { Link } from "react-router-dom";
import Boton from "./../elements/Boton";
import { format, fromUnixTime } from "date-fns";
import { es } from "date-fns/locale";
import borrarGasto from "../firebase/BorrarGasto";

const ListaGastos = () => {
  const [gastos, obtenerMasGastos, masElementos] = useGastos();
  const formatearFecha = (fecha) => {
    return format(fromUnixTime(fecha), `dd 'de' MMMM 'de' yyyy`, {
      locale: es,
    });
  };
  const siFechaEsIgual = (gastos, index, gasto) => {
    if (index !== 0) {
      const fechaActual = formatearFecha(gasto.fecha);
      const fechaGastoAnterior = formatearFecha(gastos[index - 1].fecha);
      if (fechaActual === fechaGastoAnterior) {
        return true;
      } else {
        return false;
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>ReCon - Gastos</title>
      </Helmet>
      <ContenedorLista>
        <Titulo>
          <BtnRegresar />
          Tus Gastos
        </Titulo>
        <Lista>
          {gastos.map((gasto, index) => {
            return (
              <div key={gasto.id}>
                {!siFechaEsIgual(gastos, index, gasto) && (
                  <Fecha>{formatearFecha(gasto.fecha)}</Fecha>
                )}
                <ElementoLista>
                  <Categoria>
                    <IconosCategorias id={gasto.categoria} />
                  </Categoria>
                  <Descripcion>{gasto.descripcion}</Descripcion>
                  <Valor>{ConvertirMoneda(gasto.valor)}</Valor>
                  <ContenedorBotones>
                    <BotonAccion as={Link} to={`/editar-gastos/${gasto.id}`}>
                      <IconoEditar />
                    </BotonAccion>
                    <BotonAccion onClick={() => borrarGasto(gasto.id)}>
                      <IconoBorrar />
                    </BotonAccion>
                  </ContenedorBotones>
                </ElementoLista>
              </div>
            );
          })}
          {masElementos && (
            <ContenedorBotonCentral>
              <BotonCargarMas onClick={() => obtenerMasGastos()}>
                Cargar Más
              </BotonCargarMas>
            </ContenedorBotonCentral>
          )}
          {gastos.length === 0 && (
            <ContenedorSubtitulo>
              <Subtitulo>No agendaste ningún gasto.</Subtitulo>
              <Boton
                primario
                primarioHover
                colorTexto
                justifyContent
                fontSize
                as={Link}
                to={"/"}
              >
                Agregar Gasto
              </Boton>
            </ContenedorSubtitulo>
          )}
        </Lista>
        <BarraTotalGastado />
      </ContenedorLista>
    </>
  );
};

export default ListaGastos;
