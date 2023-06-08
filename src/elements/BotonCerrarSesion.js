import React, {useState} from "react";
import { styled } from "styled-components";
import Boton from "./Boton";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./../firebase/FirebaseConfig";
import { ReactComponent as IconoLog } from "./../img-curso/log-out.svg";
import theme from "../theme";

const BotonCerrarSesion = () => {
  const navigate = useNavigate();
  const [confirmarCerrarSesion, cambiarConfirmacion] = useState(false);
  const cerrarSesion = async () => {
    try {
      await signOut(auth);
      navigate("/iniciar-sesion");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    {confirmarCerrarSesion ? 
    <ContenedorConfirmacion>
      <AlertaConfirmacion>¿Desea cerrar sesion?</AlertaConfirmacion>
      <ContenedorBotonesConfirmacion>
      <BotonConfirmar
          primario
          primarioHover
          colorTexto
          fontSize
          onClick={cerrarSesion}
        >
          Si
        </BotonConfirmar>
      <BotonConfirmar BotonDenegar
          colorTexto
          fontSize
          onClick={() => cambiarConfirmacion(!confirmarCerrarSesion)}
        >
         No
        </BotonConfirmar>
      </ContenedorBotonesConfirmacion>
    </ContenedorConfirmacion>
    : 
    <Boton otroboton justifyContent onClick={() => cambiarConfirmacion(true)}>
    Cerrar Sesion
    <IconoLogOut />
    </Boton>
  }
    </>
  );
};

const IconoLogOut = styled(IconoLog)`
    fill: #f5f5f5;
    height: auto;
`;

const ContenedorConfirmacion = styled.section`
position:absolute;
width:100%;
background:#1c1c1c;
display: flex;
justify-content:center;
gap:2rem;
padding:1rem 0rem;
z-index:999;
overflow:hidden;
animation:collapse 0.5s ease;
@keyframes collapse {
  0%{
    width: 0%;
  }
  100%{
    width:100%;
  }
}
@media (max-width:50rem){
  flex-direction:column;
  gap:0.5rem;
  padding:2rem 0rem;
}
`
const AlertaConfirmacion = styled.h1`
font-size:1.5rem;
color: #f5f5f5;
font-weight: 500;
text-align: center;
align-self: center;
animation:collapseTitle 0.5s ease;
@keyframes collapseTitle {
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0;
  }
  100%{
    opacity:1;
  }
}
`
const ContenedorBotonesConfirmacion = styled.div`
display:flex;
flex-direction:row;
gap: 2rem;
@media (max-width:50rem){
  justify-content: center;
}
`
const BotonConfirmar = styled.a`
text-decoration: none;
border:none;
color:${(props) => (props.BotonDenegar ? `${theme.rojo}`: `${theme.verde}`)};
font-size:1.5rem;
cursor:pointer;
background:transparent;
position:relative;
animation:move 0.5s ease;
@keyframes move {
  0%{
    left: 10px;
  }
  100%{
    left:0px;
  }
}
`
export default BotonCerrarSesion;
