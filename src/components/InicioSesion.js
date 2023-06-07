import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {Input,Formulario,ContenedorBoton} from "./../elements/ElementosFormulario";
import Contenedor from "../elements/Contenedor";
import Boton from "./../elements/Boton";
import { ReactComponent as SvgLogin } from "./../img-curso/login.svg";
import { ReactComponent as SvgEye } from "./../img-curso/eye.svg";
import { ReactComponent as SvgEyeSlash } from "./../img-curso/eyeSlash.svg";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import Alerta from "../elements/Alerta";
import { auth } from "./../firebase/FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ContenedorIniciarRegistrar, Redireccion } from "../elements/RedireccionFormulario";
import theme from "../theme";
import Fondo from "../elements/Fondo";

const InicioSesion = () => {
  const navigate = useNavigate();
  const [correo, establecerCorreo] = useState("");
  const [password, establecerPassword] = useState("");
  const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
  const [alerta, cambiarAlerta] = useState({});
  const [icono, cambiarIcono] = useState(true)

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

          {icono ? 
          <ContenedorInputSlash>
            <Input
            type="password"
            placeholder="Contraseña "
            name="password"
            value={password}
            onChange={handleChange}
            />
            <SvgEye1 onClick={() => cambiarIcono(!icono)}/> 
            </ContenedorInputSlash>
            :
            <ContenedorInputSlash>
            <Input
            type="text"
            placeholder="Contraseña "
            name="password"
            value={password}
            onChange={handleChange}
            />
            <SvgEyeSlash1 onClick={() => cambiarIcono(!icono)}/>
            </ContenedorInputSlash>
          }
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
              Iniciar Sesion
            </Boton>
          </ContenedorBoton>
          <ContenedorIniciarRegistrar>
          <Redireccion>¿Todavía no te registraste?</Redireccion>
          <Redireccion ruta onClick={() => navigate('/registro-usuario')}>Crea tu cuenta</Redireccion>
        </ContenedorIniciarRegistrar>
        </Formulario>
      </Contenedor>
      <Fondo />
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
const SvgEye1 = styled(SvgEye)`
    width: 1.8rem;
    height: auto;
    position: absolute;
    right: 5%;
    bottom: 32%;
    fill:${theme.verdeAgua};
`
const SvgEyeSlash1 = styled(SvgEyeSlash)`
    width: 1.8rem;
    height: auto;
    position: absolute;
    right: 5%;
    bottom: 32%;
    fill:${theme.verdeAgua};
`
const ContenedorInputSlash = styled.div `
    width:100%;
    position:relative;
`
export default InicioSesion;
