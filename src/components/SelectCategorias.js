import React, { useState } from "react";
import { styled } from "styled-components";
import theme from "../theme";
import IconosCategorias from "../elements/IconosCategorias";
import { ReactComponent as IconoDown } from "./../img-curso/down.svg";
import { ReactComponent as IconoUp } from "./../img-curso/arrow-up.svg";

const SelectCategorias = ({ categoriaInicial, categoriaSeleccionada }) => {
  const [select, cambiarValorSelect] = useState(false);
  const categorias = [
    { id: "comida", texto: "Comida" },
    { id: "cuentas y pagos", texto: "Cuentas y pagos" },
    { id: "hogar", texto: "Hogar" },
    { id: "transporte", texto: "Transporte" },
    { id: "ropa", texto: "Ropa" },
    { id: "educacion", texto: "Educación" },
    { id: "compras", texto: "Compras" },
    { id: "entretenimiento", texto: "Entretenimiento" },
  ];
  const handleClick = (e) =>
    categoriaSeleccionada(e.currentTarget.dataset.valor);
  return (
    <ContenedorSelect onClick={() => cambiarValorSelect(!select)}>
      <OpcionSeleccionada>
        {categoriaInicial}
        {select ?
        <IconoUp/>
        :
        <IconoDown />
        }
      </OpcionSeleccionada>
      {select && (
        <Opciones>
          {categorias.map((categoria) => (
            <Opcion
              key={categoria.id}
              data-valor={categoria.id}
              onClick={handleClick}
            >
              <IconosCategorias id={categoria.id} />
              {categoria.texto}
            </Opcion>
          ))}
        </Opciones>
      )}
    </ContenedorSelect>
  );
};

const ContenedorSelect = styled.div`
  background: ${theme.grisClaro};
  cursor: pointer;
  border-radius: 0.625rem;
  position: relative;
  height: 5rem;
  width: 25rem;
  padding: 0px 1.25rem;
  font-size: 1.5rem;
  text-align: center;
  display: flex;
  align-items: center;
  transition: 0.5s ease all;
  &:hover {
    background: #d7d7d7;
  }
  @media (max-width: 64.375rem) {
    width: 20rem;
  }
`;

const OpcionSeleccionada = styled.div`
    width: 100%;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
  svg {
    width: 1.25rem;
    height: auto;
    margin-left: 1.25rem;
    transition:all 0.3s ease;
  }
`;

const Opciones = styled.div`
  background: ${theme.grisClaro};
  position: absolute;
  top: 5.62rem;
  left: 0;
  width: 100%;
  z-index: 888;
  border-radius: 0.625rem;
  max-height: 18.75rem;
  overflow-y: auto;
  box-shadow: 0px 5px 13px #00000060;
  &::-webkit-scrollbar {
    width: 0.75rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #00000040;
    border-radius: 1.25rem;
  }
`;

const Opcion = styled.div`
  padding: 1rem;
  display: flex;
  align-items:center;
  svg {
    width: 2.4rem;
    height: auto;
    margin-right: 3.25rem;
  }
  &:hover {
    background: #d7d7d7;
  }
  @media (max-width:64rem){
    font-size: 18px;
  }
`;

export default SelectCategorias;
