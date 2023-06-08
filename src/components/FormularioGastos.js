import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import {InputFormularioGastos,Formulario,ContenedorFiltros,ContenedorBoton,ContenedorDeInput} from "./../elements/ElementosFormulario";
import Boton from "./../elements/Boton";
import SelectCategorias from "./SelectCategorias";
import DatePicker from "./DatePicker";
import fromUnixTime from "date-fns/fromUnixTime";
import getUnixTime from "date-fns/getUnixTime";
import AgregarGasto from "../firebase/AgregarGasto";
import { useAuth } from "./../contextos/authContext";
import Alerta from "../elements/Alerta";
import BarraTotalGastado from "./BarraTotalGastado";
import { useNavigate } from "react-router-dom";
import EditandoGasto from "../firebase/EditandoGasto";
import HeaderFormulario from "./HeaderFormulario";
import { ReactComponent as IconoPlus1 } from "./../img-curso/plus.svg";
import { ReactComponent as IconoTrash1 } from "./../img-curso/trash.svg";

const FormularioGastos = ({ gasto }) => {
  const navigate = useNavigate();
  const [categoriaInicial, categoriaSeleccionada] = useState("Categorias");
  const [descripcion, nuevaDescripcion] = useState("");
  const [valor, nuevoValor] = useState("");
  const [fecha, nuevaFecha] = useState(new Date());
  const { usuario } = useAuth();
  const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
  const [alerta, cambiarAlerta] = useState({});
  useEffect(() => {
    //Comprobamos si existe el gasto
    if (gasto) {
      //Comprobamos que el gasto corresponda al usuario
      //Accedemos a cada categoria para devolverlo a nuestro componente y editar.
      if (gasto.data().uidUsuario === usuario.uid) {
        categoriaSeleccionada(gasto.data().categoria);
        nuevaDescripcion(gasto.data().descripcion);
        nuevoValor(gasto.data().valor);
        nuevaFecha(fromUnixTime(gasto.data().fecha));
      } else {
        navigate("/lista-gastos");
      }
    }
  }, [gasto, usuario, navigate]);

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
    if (categoriaInicial === "Categorias" || categoriaInicial === "") {
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
    if (gasto) {
      EditandoGasto({
        id: gasto.id,
        categoria: categoriaInicial,
        descripcion: descripcion,
        valor: valorDecimal,
        fecha: getUnixTime(fecha),
      })
        .then(() => navigate("/lista-gastos"))
        .catch((error) => console.log(error));
    } else {
      AgregarGasto({
        categoria: categoriaInicial,
        descripcion: descripcion,
        valor: valorDecimal,
        fecha: getUnixTime(fecha),
        uidUsuario: usuario.uid,
      })
        .then(() => {
          categoriaSeleccionada("Categorias");
          nuevaDescripcion("");
          nuevoValor("");
          nuevaFecha(new Date());
          cambiarEstadoAlerta(true);
          cambiarAlerta({
            tipo: "exito",
            mensaje: "¡Tu gasto fue guardado con exito!",
          });
        })
        .catch((error) => {
          cambiarEstadoAlerta(true);
          cambiarAlerta({
            tipo: "error",
            mensaje: error,
          });
        });
    }
  };
  const handleReset = () => {
    categoriaSeleccionada("Categorias");
    nuevaDescripcion("");
    nuevoValor("");
    nuevaFecha(new Date());
    cambiarEstadoAlerta(true);
    cambiarAlerta({
      tipo: "exito",
      mensaje: "Valores Reseteados",
    });
  };
  return (
    <>
      <Formulario onSubmit={handleSubmit}>
        <HeaderFormulario gasto={gasto} />
        <ContenedorFiltros>
          <SelectCategorias
            categoriaInicial={categoriaInicial}
            categoriaSeleccionada={categoriaSeleccionada}
          />
          <DatePicker fecha={fecha} nuevaFecha={nuevaFecha} />
        </ContenedorFiltros>
        <ContenedorDeInput>
          <InputFormularioGastos
            type="text"
            name="descripcion"
            value={descripcion}
            id="descripcion"
            onChange={handleChange}
          />
          {descripcion.length !== 0 ? (
            <label style={{ top: "7px", fontSize: "1.5rem" }}>
              Descripcion
            </label>
          ) : (
            <label style={{ top: "50%", left: "20px" }}>Descripcion</label>
          )}
        </ContenedorDeInput>
        <ContenedorDeInput>
          <InputFormularioGastos
            type="text"
            name="valor"
            value={valor}
            id="valor"
            onChange={handleChange}
          />
          {valor.length !== 0 ? (
            <label style={{ top: "7px", fontSize: "1.5rem" }}>Precio</label>
          ) : (
            <label style={{ top: "50%", left: "20px" }}>Precio</label>
          )}
        </ContenedorDeInput>
        <ContenedorBoton contenedorBotonesGastos>
          <Boton
            as={"button"}
            type="submit"
            primario
            primarioHover
            colorTexto 
            botonSumarBorrar
          >
            {gasto ? "Editar" : "Agregar"}
            <IconoPlus />
          </Boton>
          {!gasto &&
          <Boton  colorTexto botonSumarBorrar onClick={handleReset}>
            Restablecer
            <IconoTrash />
          </Boton>
           }
        </ContenedorBoton>
        <BarraTotalGastado />
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

const IconoPlus = styled(IconoPlus1)`
  fill: #fdfdfd;
  width: 2rem;
`;
const IconoTrash = styled(IconoTrash1)`
  fill: #fdfdfd;
  width: 2rem;
`;

export default FormularioGastos;
