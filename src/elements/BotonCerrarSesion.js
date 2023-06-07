import React from "react";
import { styled } from "styled-components";
import Boton from "./Boton";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./../firebase/FirebaseConfig";
import { ReactComponent as IconoLog } from "./../img-curso/log-out.svg";

const BotonCerrarSesion = () => {
  const navigate = useNavigate();
  const cerrarSesion = async () => {
    try {
      await signOut(auth);
      navigate("/iniciar-sesion");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Boton otroboton justifyContent onClick={cerrarSesion}>
      Cerrar Sesion
      <IconoLogOut />
    </Boton>
  );
};

const IconoLogOut = styled(IconoLog)`
    fill: #f5f5f5;
    height: auto;
`;

export default BotonCerrarSesion;
