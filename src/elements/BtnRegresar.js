import { styled } from "styled-components";
import {ReactComponent as IconoFlecha} from "./../img-curso/arrow-31.svg"
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
    position:absolute;
    display: block;
    width: 3.12rem; /* 50px */
    height:3.12rem; /* 50px */
    text-align: center;
    border: none;
    background:none;
    top:0;
    left:0;
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
    transition:.5s all ease;
    
    &:hover{
        fill:#000;       
    }
`;
 
export default BtnRegresar;