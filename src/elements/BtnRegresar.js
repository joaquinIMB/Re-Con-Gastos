import { styled } from "styled-components";
import { ReactComponent as IconoFlecha } from "./../img-curso/arrow-31.svg";
import { useNavigate } from "react-router-dom";

const BtnRegresar = ({ ruta = "/" }) => {
  const navigate = useNavigate();
  return (
    <Btn onClick={() => navigate(ruta)}>
      <Icono />
    </Btn>
  );
};

const Btn = styled.button`
  position: relative;
  display: block;
  height: auto;
  width:2rem;
  text-align: center;
  border: none;
  background: none;
  top: 0;
  left: 0;
  cursor: pointer;
  z-index:999;
`;

const Icono = styled(IconoFlecha)`
  height: auto;
  fill: #fdfdfd;
  width:2rem;
  transform: rotate(180deg);
  transition: 0.5s all ease;
`;

export default BtnRegresar;
