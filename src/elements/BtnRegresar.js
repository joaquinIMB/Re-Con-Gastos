import { styled } from "styled-components";
import {ReactComponent as IconoFlecha} from "./../img-mias/arrow-31.svg"
import { useNavigate } from "react-router-dom";

const BtnRegresar = ({ruta = "/"}) => {
    const navigate = useNavigate()
    return ( 
        <Btn onClick={() => navigate(ruta)}>
            <Icono/>
        </Btn>
     );
}

const Btn = styled.button`
    display: block;
    width: 2.12rem; /* 50px */
    height:2.12rem; /* 50px */
    text-align: center;
    border: none;
    background:none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
 
    @media(max-width: 60rem){ /* 950px */
        width: 2.5rem; /* 40px */
        height: 2.5rem; /* 40px */
        line-height: 2.5rem; /* 40px */
    }
`;
 
const Icono = styled(IconoFlecha)`
    height: auto;
    fill: #00000095;
    transform:rotate(180deg);
    &:hover{
        fill:#000;
    }
`;
 
export default BtnRegresar;