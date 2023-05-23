import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Input,
  Formulario,
  ContenedorBoton,
} from "./../elements/ElementosFormulario";
import Contenedor from "../elements/Contenedor";
import Boton from "./../elements/Boton";
import { ReactComponent as SvgLogin } from "./../img-curso/login.svg";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import Alerta from "../elements/Alerta";
import { auth } from "./../firebase/FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ContenedorIniciarRegistrar, Redireccion } from "../elements/RedireccionFormulario";

const InicioSesion = () => {
  const navigate = useNavigate();
  const [correo, establecerCorreo] = useState("");
  const [password, establecerPassword] = useState("");
  const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
  const [alerta, cambiarAlerta] = useState({});

  const handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        establecerCorreo(e.target.value);
        break;
      case "password":
        establecerPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    cambiarEstadoAlerta(false);
    cambiarAlerta({});
    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    if (!expresionRegular.test(correo)) {
      cambiarEstadoAlerta(true);
      cambiarAlerta({
        tipo: "error",
        mensaje: "Por favor ingresa un correo válido",
      });
      return;
    }
    if (correo === "" || password === "") {
      cambiarEstadoAlerta(true);
      cambiarAlerta({
        tipo: "error",
        mensaje: "Por favor rellena todos los campos",
      });
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, correo, password);
      navigate("/");
    } catch (error) {
      cambiarEstadoAlerta(true);

      switch (error.code) {
        case "auth/wrong-password":
          cambiarEstadoAlerta(true);
          cambiarAlerta({
            tipo: "error",
            mensaje: "La contraseña no es correcta",
          });
          break;
        case "auth/user-not-found":
          cambiarEstadoAlerta(true);
          cambiarAlerta({
            tipo: "error",
            mensaje: "No se encontró ningun usuario con estos datos",
          });
          break;
        default:
          cambiarEstadoAlerta(true);
          cambiarAlerta({
            tipo: "error",
            mensaje: "Hubo un error al intentar iniciar sesion",
          });
          break;
      }
    }
  };

  return (
    <>
      <Contenedor contenedorpequeño>
        <Helmet>
          <title>Iniciar Sesion</title>
        </Helmet>
        <Formulario onSubmit={handleSubmit}>
          <Svg />
          <Input
            type="email"
            placeholder="Email "
            name="email"
            value={correo}
            onChange={handleChange}
          />
          <Input
            type="password"
            placeholder="Contraseña "
            name="password"
            value={password}
            onChange={handleChange}
          />
          <ContenedorBoton>
            <Boton
              as={"button"}
              type="submit"
              primario
              colorTexto
              borderRadius
              primarioHover
              sombraHover
            >
              Iniciar Sesion
            </Boton>
          </ContenedorBoton>
          <ContenedorIniciarRegistrar>
          <Redireccion>¿Todavía no te registraste?</Redireccion>
          <Redireccion ruta onClick={() => navigate('/registro-usuario')}>Crea tu cuenta</Redireccion>
        </ContenedorIniciarRegistrar>
        </Formulario>
      </Contenedor>
      <Alerta
        tipo={alerta.tipo}
        mensaje={alerta.mensaje}
        estadoAlerta={estadoAlerta}
        cambiarEstadoAlerta={cambiarEstadoAlerta}
      />
    </>
  );
};
const Svg = styled(SvgLogin)`
  width: 70%;
  height: auto;
  margin: auto;
  position: relative;
`;
export default InicioSesion;
