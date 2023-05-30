import {styled, css} from 'styled-components';

const Contenedor = styled.div`
    width: 100%;
    max-width: 100%;
    height: 100vh;
    max-height: 50rem;  
    overflow-y: auto;
    margin: auto;
    background:transparent;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    z-index: 12;
    ${(props) => props.contenedorpequeño && css`
    width:500px;
    height:95vh;
    background:#fff;
    box-shadow:0px 3px 20px #00000040;
    border-radius:5px;
    overflow-y: hidden;
    flex-direction: column;
    justify-content: space-between;
    padding: 0rem 2rem;
    @media(max-width: 40rem){
        height:90vh;
        width:100%;
    }   
    `}
`
;

export default Contenedor;