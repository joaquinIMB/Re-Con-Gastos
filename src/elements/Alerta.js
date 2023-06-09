import React, {useEffect} from 'react';
import styled, {keyframes} from 'styled-components';
import theme from '../theme';

const slideDown = keyframes`
    0% {
        transform: translateY(-1.25rem);
        opacity: 0;
    }
 
    10% {
        transform: translateY(1.25rem);
        opacity: 1;
    }
    
    90% {
        transform: translateY(1.25rem);
        opacity: 1;
    }
 
    100% {
        transform: translateY(1.25rem);
        opacity: 0;
    }
`;
 
const ContenedorAlerta = styled.div`
    z-index: 1000;
    width: 100%;
    left: 0;
    top: 1.25rem; 
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${slideDown} 2.3s ease forwards;
    p {
 
        background: ${(props) => {
            if(props.tipo === 'error'){
                return theme.rojo;
            } else if (props.tipo === 'exito') {
                return theme.verde;
            } else {
                return '#000';
            }
        }};
        color: #fff;
        padding: 1.25rem 2.5rem;
        border-radius: 0.31rem;
        box-shadow: 0px 0px 15px rgba(0,0,0,.1);
        text-align: center;
    }
`;
 
const Alerta = ({mensaje, tipo, estadoAlerta, cambiarEstadoAlerta}) => {
    useEffect(() => {
        let tiempo;
        if(estadoAlerta === true){
          tiempo = setTimeout(() => {
                cambiarEstadoAlerta(false)
            }, 2300)
        }return(() => clearTimeout(tiempo))
    }, [estadoAlerta, cambiarEstadoAlerta])
    return ( 
        <>
        {/* EstadoAlerta es true mostramos el componente si es falso no */}
        {estadoAlerta &&   
        <ContenedorAlerta tipo={tipo}>
            <p>{mensaje}</p>
        </ContenedorAlerta>}
        
        </>
     );
}

export default Alerta;