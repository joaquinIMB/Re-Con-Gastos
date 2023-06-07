import { styled, css } from "styled-components";

const Contenedor = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
  margin: auto;
  background: transparent;
  position: relative;
  z-index: 12;
  ${(props) =>
    props.contenedorpequeño &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 500px;
      max-height: 50rem;
      background: #fdfdfd;
      box-shadow: 0px 3px 20px #00000040;
      overflow-y: hidden;
      overflow-x: hidden;
      padding: 1rem 1.5rem;
      z-index: 12;
    `}
`;
export default Contenedor;
