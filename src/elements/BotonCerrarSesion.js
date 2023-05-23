import React from 'react';
import { ReactComponent as IconoCerrarSesion } from './../img-curso/log-out.svg';
import Boton from './Boton';
import { useNavigate } from 'react-router-dom'
import {signOut} from 'firebase/auth'
import {auth} from './../firebase/FirebaseConfig'

const BotonCerrarSesion = () => {

    const cerrarSesion = async () => {
        try {
            await signOut(auth);
            navigate('/iniciar-sesion')
        } catch (error) {
            console.log(error)
        }
    }


    const navigate = useNavigate()
    return ( 
        <Boton iconoGrande colorTexto borderRadius as={'button'} onClick={cerrarSesion}>
            Cerrar Sesion
            <IconoCerrarSesion/>
        </Boton>
     );
}


export default BotonCerrarSesion;