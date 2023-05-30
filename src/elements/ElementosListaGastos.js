import { styled } from "styled-components";
import theme from "../theme";

const ContenedorLista = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100vh;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 12;
`;

const Lista = styled.ul`
    list-style: none;
    padding: 0 0 2.7rem 0;
    height: 100%;
    overflow-y: auto;
    width: 100%;
    align-self: center;
  &::-webkit-scrollbar {
    width: 0.75rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #00000040;
  }
  li {
    grid-template-columns: 1fr 1fr 1fr auto;
  }

  @media (max-width: 50rem) {
    li {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }
`;

const ElementoLista = styled.li`
    padding: 1.25rem 0;
    display: grid;
    gap: 5.31rem;
    justify-content: space-between;
    border-radius: 0 0.31rem 0.31rem 0.31rem;
    background: #d7d7d72b;
    width: 95%;
    margin: auto;

  & > div {
    width: 100%;
    display: flex;
    align-items: center;
  }
`;

const ListaDeCategorias = styled.ul`
  list-style: none;
  padding: 0 2.5rem;
  height: 100%;
  overflow-y: auto;
`;

const ElementoListaCategorias = styled.li`
  padding: 1.25rem 0;
  border-bottom: 2px solid #f2f2f2;
  display: flex;
  justify-content: space-between;
`;

const Categoria = styled.div`
  font-weight: 500;
  font-size: 1.25rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;

  svg {
    width: 3.12rem;
    height: auto;
    margin-left: 1.25rem;
    border-radius: 0.62rem;
  }

  @media (max-width: 50rem) {
    font-size: 1.12rem;
  }
`;

const Descripcion = styled.div`
  justify-content: center;
  font-size: 1.25rem;
  text-transform: capitalize;
  @media (max-width: 50rem) {
    justify-content: end;
  }
`;

const Valor = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  justify-content: center;
  color:${theme.verde};
  @media (max-width: 50rem) {
    justify-content: start;
  }
`;

const Fecha = styled.div`
    border-radius: 0.31rem 0.31rem 0 0;
    background: #59c36a;
    text-align: center;
    color: #fff;
    padding: 0.62rem 3.12rem;
    display: inline-block;
    margin: 1.25rem 0 0 2.15rem;
  @media (max-width: 50rem) {
    width: 100%;
  }
`;

const ContenedorBotones = styled.div`
  @media (max-width: 50rem) {
    justify-content: end;
  }
`;

const BotonAccion = styled.button`
  outline: none;
  background: ${theme.grisClaro};
  border: none;
  width: 2.5rem;
  display: inline-block;
  height: 2.5rem;
  line-height: 2.5rem;
  font-size: 16px;
  cursor: pointer;
  border-radius: 0.31rem;
  margin-right: 0.625rem;
  transition: 0.3s ease all;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: ${theme.grisClaro2};
  }

  svg {
    width: 1.125rem;
  }

  @media (max-width: 50rem) {
    opacity: 1;
  }
`;

const ContenedorSubtitulo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Subtitulo = styled.h3`
  color: ${theme.grisClaro2};
  font-weight: 400;
  font-size: 40px;
  padding: 2.5rem 0;
`;

const ContenedorBotonCentral = styled.div`
  display: flex;
  justify-content: center;
  margin: 2.5rem;
`;

const BotonCargarMas = styled.button`
  background: ${theme.grisClaro};
  border: none;
  border-radius: 7px;
  color: #000;
  font-family: "Work Sans", sans-serif;
  padding: 1rem 1.87rem;

  font-size: 1.25rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
  transition: 0.3s ease all;

  &:hover {
    background: ${theme.grisClaro2};
  }
`;

export {
  ContenedorLista,
  Lista,
  ElementoLista,
  ListaDeCategorias,
  ElementoListaCategorias,
  Categoria,
  Descripcion,
  Valor,
  Fecha,
  ContenedorBotones,
  BotonAccion,
  BotonCargarMas,
  ContenedorBotonCentral,
  ContenedorSubtitulo,
  Subtitulo,
};
