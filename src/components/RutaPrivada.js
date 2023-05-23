import React from 'react';
import { useAuth } from '../contextos/authContext';
import {Navigate} from 'react-router-dom'

const RutaPrivada = ({children}) => {
    const {usuario} = useAuth();
    // Condicional que permite acceder a la ruta solo si existe el usuario.
    if (usuario) {
        return children;
    }else 
    // Si el usuario no existe lo redirige.
    return <Navigate replace to={'/iniciar-sesion'} />
}
 
export default RutaPrivada;