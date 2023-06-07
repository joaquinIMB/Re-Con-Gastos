import React from 'react';
import { styled } from 'styled-components';
import FormatearCantidad from '../funciones/ConvertirMoneda';
import { useTotalDelMes } from '../contextos/TotalGastadoContext';

const BarraTotal = styled.div`
    font-size: 1.25rem;
    letter-spacing: 1px;
    /* background:linear-gradient(288deg, rgb(8 20 10), #43a854); */
    background:#1c1c1c;
    font-weight: 500;
    padding: 0.32rem 1.85rem;
    color: #fff;
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
    box-shadow: 0px -3px 4px #00000035;
    align-items: center;
    position: relative;
    bottom: 0;
    left: 0;
    width:100%;
    @media(max-width: 31.25rem) { /* 500px */
    flex-direction: row;
    font-size: 17px;
    gap: 0.3rem;
    padding: .62rem 1rem;
    }
    @media(max-width: 22.5rem) { /* 500px */
    font-size:15px;
    }
    @media (max-height: 30rem) {
    display:none;
    }
`;

const BarraTotalGastado = () => {
    const {total} = useTotalDelMes();
    return ( 
        <BarraTotal>
            <p>Total Gastado en el Mes: </p>
            <p>{FormatearCantidad(total)}</p>
        </BarraTotal>

     );
}
 
export default BarraTotalGastado;