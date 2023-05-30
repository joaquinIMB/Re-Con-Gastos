import React, { useState } from "react";
import {Input,Formulario,ContenedorFiltros,ContenedorBoton, ContenedorDeInput} from "./../elements/ElementosFormulario";
import Boton from "./../elements/Boton";
import SelectCategorias from "./SelectCategorias";
import DatePicker from "./DatePicker";
// import fromUnixTime from "date-fns/fromUnixTime";
import getUnixTime from "date-fns/getUnixTime";
import AgregarGasto from "../firebase/AgregarGasto";
import { useAuth } from "./../contextos/authContext";
import Alerta from "../elements/Alerta";
import BarraTotalGastado from "./BarraTotalGastado";

const FormularioGastos = () => {
  const [categoriaInicial, categoriaSeleccionada] = useState("Categorias");
  const [descripcion, nuevaDescripcion] = useState("");
  const [valor, nuevoValor] = useState("");
  const [fecha, nuevaFecha] = useState(new Date());
  const { usuario } = useAuth();
  const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
  const [alerta, cambiarAlerta] = useState({});

  const handleChange = (e) => {
    switch (e.target.name) {
      case "descripcion":
        nuevaDescripcion(e.target.value);
        break;
      case "valor":
        nuevoValor(e.target.value.replace(/[^0-9.]/g, ""));
        break;
      default:
        break;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let valorDecimal = parseFloat(valor).toFixed(2);
    cambiarEstadoAlerta(false);
    cambiarAlerta({});
    if (categoriaInicial === "Categorias") {
      cambiarEstadoAlerta(true);
      cambiarAlerta({
        tipo: "error",
        mensaje: "Por favor selecciona una categoria",
      });
      return;
    }
    if (descripcion === "") {
      cambiarEstadoAlerta(true);
      cambiarAlerta({
        tipo: "error",
        mensaje: "Ingresa una descripción del servicio/producto",
      });
      return;
    }
    if (valor === "" || !valorDecimal) {
      cambiarEstadoAlerta(true);
      cambiarAlerta({
        tipo: "error",
        mensaje: "¡No te olvides del precio!",
      });
      return;
    }
    if (fecha === undefined) {
      cambiarEstadoAlerta(true);
      cambiarAlerta({
        tipo: "error",
        mensaje: "¡No te olvides de la fecha!",
      });
      return;
    }
      AgregarGasto({
      categoria: categoriaInicial,
      descripcion: descripcion,
      valor: valorDecimal,
      fecha: getUnixTime(fecha),
      uidUsuario: usuario.uid,
    }).then(() => {
      categoriaSeleccionada("Categorias");
      nuevaDescripcion("");
      nuevoValor("");
      nuevaFecha(new Date());
      cambiarEstadoAlerta(true);
      cambiarAlerta({
        tipo: "exito",
        mensaje: "¡Tu gasto fue guardado con exito!"})
    }).catch((error) => {
      cambiarEstadoAlerta(true);
      cambiarAlerta({
        tipo: "error",
        mensaje: error})
    })
  };
  const handleReset = () => {
    categoriaSeleccionada("Categorias");
    nuevaDescripcion("");
    nuevoValor("");
    nuevaFecha(new Date());
    cambiarEstadoAlerta(true);
    cambiarAlerta({
      tipo: "exito",
      mensaje: "Valores Reseteados"
    });
  };
  return (
    <>
      <Formulario onSubmit={handleSubmit}>
        <ContenedorFiltros>
          <SelectCategorias
            categoriaInicial={categoriaInicial}
            categoriaSeleccionada={categoriaSeleccionada}
          />
          <DatePicker fecha={fecha} nuevaFecha={nuevaFecha} />
        </ContenedorFiltros>
        <ContenedorDeInput>
          <Input
            inputFormularioGastos
            type="text"
            name="descripcion"
            value={descripcion}
            id="descripcion"
            onChange={handleChange}
          />
          <label>Descripción</label>
          </ContenedorDeInput>
          <ContenedorDeInput>
          <Input
            inputFormularioGastos
            type="text"
            name="valor"
            value={valor}
            id="valor"
            onChange={handleChange}
          />
          <label>Total $</label>
        </ContenedorDeInput>
        <ContenedorBoton contenedorBotonesGastos>
          <Boton
            as={"button"}
            type="submit"
            primario
            primarioHover
            colorTexto
            justifyContent

          >
            Agregar
          </Boton>
          <Boton
            justifyContent
            colorTexto
            onClick={handleReset}
          >
            Borrar Todo
          </Boton>
        </ContenedorBoton>
        <BarraTotalGastado/>
      </Formulario>
      <Alerta
        tipo={alerta.tipo}
        mensaje={alerta.mensaje}
        estadoAlerta={estadoAlerta}
        cambiarEstadoAlerta={cambiarEstadoAlerta}
      />
    </>
  );
};


export default FormularioGastos;
