import React from 'react';
import { styled} from 'styled-components';

const Fondo = () => {
    return ( 
        <>
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio='none'><path fill="#fff" fillOpacity="1" d="M0,224L80,234.7C160,245,320,267,480,277.3C640,288,800,288,960,277.3C1120,267,1280,245,1360,234.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></Svg>
        </>
     );
}


const Svg = styled.svg`
    height: 50vh;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 0;
    opacity:0.3;
`;
 
 


export default Fondo;