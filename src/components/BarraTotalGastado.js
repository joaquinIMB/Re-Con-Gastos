import React from 'react';
import { styled } from 'styled-components';
import FormatearCantidad from '../funciones/ConvertirMoneda';

const BarraTotal = styled.div`
    font-size: 1.25rem;
    letter-spacing: 1px;
    /* background:linear-gradient(288deg, rgb(8 20 10), #43a854); */
    background:#1c1c1c;
    font-weight: 500;
    text-transform: uppercase;
    padding: 0.32rem 1.85rem;
    color: #fff;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px -3px 8px #0000007a;
    align-items: center;
    position: relative;
    bottom: 0;
    left: 0;
    width:100%;
    @media(max-width: 31.25rem) { /* 500px */
        flex-direction: column;
        font-size: 14px;
    }
`;

const BarraTotalGastado = () => {
    return ( 
        <BarraTotal>
            <p>Total Gastado</p>
            <p>{FormatearCantidad(0.00)}</p>
        </BarraTotal>

     );
}
 
export default BarraTotalGastado;