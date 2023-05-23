import React, { useState } from "react";
import { styled } from "styled-components";
import {Input,Formulario,ContenedorFiltros,ContenedorBoton} from "./../elements/ElementosFormulario";
import Boton from './../elements/Boton'
import SelectCategorias from "./SelectCategorias";

const FormularioGastos = () => {
const [descripcion, nuevaDescripcion] = useState('');
const [valor, nuevoValor] = useState('');
const [categoriaInicial, categoriaSeleccionada] = useState('Categorias')

const handleChange = (e) => {
    switch (e.target.name) {
      case "descripcion":
        nuevaDescripcion(e.target.value);
        break;
      case "valor":
        nuevoValor(e.target.value.replace(/[^0-9.]/g, ''));
        break;
      default:
        break;
    }
  };
  const handleSubmit = (e) => e.preventDefault()
  return (
    <>
      <Formulario onSubmit={handleSubmit}>
        <ContenedorFiltros>
          <SelectCategorias categoriaInicial={categoriaInicial} categoriaSeleccionada={categoriaSeleccionada}/>
          <h1>Date Picker</h1>
        </ContenedorFiltros>
        <ContenedorDeInput>
        <TituloInput>Gasto </TituloInput>
        <Input inputFormularioGastos
          type="text"
          name="descripcion"
          placeholder="Descripción"
          value={descripcion}
          id="descripcion"
          onChange={handleChange}
        />
        <TituloInput>Valor en $ </TituloInput>
        <Input inputFormularioGastos 
        type="text" 
        name="valor" 
        placeholder="$0.00" 
        value={valor} 
        id="valor"
        onChange={handleChange}
        />
        </ContenedorDeInput>
        <ContenedorBoton>
          <Boton 
          as={'button'} 
          type='submit' 
          primario 
          conIcono 
          borderRadius
          primarioHover
          colorTexto
          justifyContent
          sombraHover
          >Agregar Gasto
          </Boton>
        </ContenedorBoton>
      </Formulario>
    </>
  );
};

const ContenedorDeInput = styled.div`
margin:0 auto;
width:70%;
@media (max-width: 60rem) {
    width:100%;
  }
`
const TituloInput = styled.h2`
font-size:1.75rem;
margin:1.25rem 0;
`

export default FormularioGastos;
