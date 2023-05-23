import React, { useState } from "react";
import { styled } from "styled-components";
import theme from "../theme";
import { ReactComponent as IconoDown } from "./../img-curso/down.svg";
import  IconoComida  from "./../img-curso/cat_comida.svg";
import  IconoCuentas  from "./../img-curso/cat_cuentas-y-pagos.svg";
import  IconoHogar  from "./../img-curso/cat_hogar.svg";
import  IconoTransporte  from "./../img-curso/cat_transporte.svg";
import  IconoRopa  from "./../img-curso/cat_ropa.svg";
import  IconoEscuela  from "./../img-curso/school.svg";
import  IconoCompras  from "./../img-curso/cat_compras.svg";
import  IconoDiversion  from "./../img-curso/cat_diversion.svg";

const ContenedorSelect = styled.div`
  background: ${theme.grisClaro};
  cursor: pointer;
  border-radius: 0.625rem; /* 10px */
  position: relative;
  height: 5rem; /* 80px */
  width: 35%;
  padding: 0px 1.25rem; /* 20px */
  font-size: 1.5rem; /* 24px */
  text-align: center;
  display: flex;
  align-items: center;
  transition: 0.5s ease all;
  &:hover {
    background: ${theme.grisClaro2};
  }
  @media screen and (max-width:60rem) {
    width:100%;
  }
`;

const OpcionSeleccionada = styled.div`
  width: 100%;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  svg {
    width: 1.25rem; /* 20px */
    height: auto;
    margin-left: 1.25rem; /* 20px */
  }
`;

const Opciones = styled.div`
  background: ${theme.grisClaro};
  position: absolute;
  top: 5.62rem; /* 90px */
  left: 0;
  width: 100%;
  border-radius:0 0 0.425rem 0.425rem; /* 10px */
  max-height: 18.75rem; /* 300px */
  overflow-y: auto;
  box-shadow:0px 5px 13px #00000060;
&::-webkit-scrollbar {
  width: 0.75rem;
}

&::-webkit-scrollbar-track {
  background: transparent;        /* color of the tracking area */
}

&::-webkit-scrollbar-thumb {
  background-color: #00000040;    /* color of the scroll thumb */
  border-radius: 1.25rem;       /* roundness of the scroll thumb */
}
`;

const Opcion = styled.div`
  padding: 1.25rem; 
  display: flex;
  img {
    width: 32px;
    height: auto;
    margin-right: 1.25rem; 
  }
  &:hover {
    background: ${theme.grisClaro2};
  }
`;

const SelectCategorias = ({categoriaInicial, categoriaSeleccionada}) => {
  const [select, cambiarValorSelect] = useState(false);
  const categorias = [
    {id: 'comida', texto: 'Comida',icono:IconoComida},
    {id: 'cuentas y pagos', texto: 'Cuentas y pagos',icono:IconoCuentas},
    {id: 'hogar', texto: 'Hogar',icono:IconoHogar},
    {id: 'transporte', texto: 'Transporte',icono:IconoTransporte},
    {id: 'ropa', texto: 'Ropa',icono:IconoRopa},
    {id: 'educacion', texto: 'Educación',icono:IconoEscuela},
    {id: 'compras', texto: 'Compras',icono:IconoCompras},
    {id: 'diversion', texto: 'Diversion',icono:IconoDiversion}
]
const handleClick = (e) => categoriaSeleccionada(e.currentTarget.dataset.valor)
  return (
    <ContenedorSelect onClick={() => cambiarValorSelect(!select)}>
      <OpcionSeleccionada>
        {categoriaInicial}
        <IconoDown />
      </OpcionSeleccionada>
      {select && (
        <Opciones>
          {categorias.map((categoria) => 
            <Opcion key={categoria.id} data-valor={categoria.id} onClick={handleClick}>
              <img src={categoria.icono} alt="IconoSelect"/>
            {categoria.texto}
            </Opcion>)}
        </Opciones>
      )}
    </ContenedorSelect>
  );
};

export default SelectCategorias;
