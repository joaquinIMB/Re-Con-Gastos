import React, { useState } from "react";
import { Helmet } from "react-helmet"; //Para reescribir nuestro html
import {Input,Formulario,ContenedorBoton,} from "./../elements/ElementosFormulario";
import Contenedor from "../elements/Contenedor";
import Boton from "./../elements/Boton";
import { ReactComponent as SvgRegistro } from "./../img-curso/registro.svg"; //Para importar SVG
import { styled } from "styled-components";
import { auth } from "./../firebase/FirebaseConfig"; //Autenticación base de datos
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Para redirigir a otra ruta
import Alerta from "../elements/Alerta";
import {ContenedorIniciarRegistrar,Redireccion,} from "./../elements/RedireccionFormulario";
import Fondo from "../elements/Fondo";

const RegistroUsuario = () => {
  const navigate = useNavigate();
  const [correo, establecerCorreo] = useState("");
  const [password, establecerPassword] = useState("");
  const [password2, establecerPassword2] = useState("");
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
      case "password2":
        establecerPassword2(e.target.value);
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
    if (correo === "" || password === "" || password2 === "") {
      cambiarEstadoAlerta(true);
      cambiarAlerta({
        tipo: "error",
        mensaje: "Por favor rellena todos los campos",
      });
      return;
    }
    if (password !== password2) {
      cambiarEstadoAlerta(true);
      cambiarAlerta({
        tipo: "error",
        mensaje: "Las contraseñas no coinciden",
      });
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, correo, password);
      navigate("/");
    } catch (error) {
      switch (error.code) {
        case "auth/weak-password":
          cambiarEstadoAlerta(true);
          cambiarAlerta({
            tipo: "error",
            mensaje: "La contraseña tiene que ser de al menos 6 caracteres",
          });
          break;
        case "auth/email-already-in-use":
          cambiarEstadoAlerta(true);
          cambiarAlerta({
            tipo: "error",
            mensaje:
              "Ya existe una cuenta con el correo electrónico proporcionado",
          });
          break;
        case "auth/invalid-email":
          cambiarEstadoAlerta(true);
          cambiarAlerta({
            tipo: "error",
            mensaje: "El correo electrónico no es válido",
          });
          break;
        default:
          cambiarEstadoAlerta(true);
          cambiarAlerta({
            tipo: "error",
            mensaje: "Hubo un error al intentar crear la cuenta",
          });
          break;
      }
    }
  };

  return (
    <>
      <Contenedor contenedorpequeño>
        <Helmet>
          <title>Registrarse</title>
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
          <Input
            type="password"
            placeholder="Repetir Contraseña "
            name="password2"
            value={password2}
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
              justifyContent
              fontSize
            >
              Crear Cuenta
            </Boton>
          </ContenedorBoton>
          <ContenedorIniciarRegistrar>
            <Redireccion>¿Ya tenes cuenta?</Redireccion>
            <Redireccion ruta onClick={() => navigate("/iniciar-sesion")}>
              Inicia Sesion
            </Redireccion>
          </ContenedorIniciarRegistrar>
        </Formulario>
      </Contenedor>
      <Fondo/>
      <Alerta
        tipo={alerta.tipo}
        mensaje={alerta.mensaje}
        estadoAlerta={estadoAlerta}
        cambiarEstadoAlerta={cambiarEstadoAlerta}
      />
    </>
  );
};

const Svg = styled(SvgRegistro)`
    width: 100%;
    height: auto;
    margin: 2rem auto;
    position: relative;
    right: 5px;
    @media(max-height:30rem){
      margin: auto;
    }
`;
export default RegistroUsuario;
