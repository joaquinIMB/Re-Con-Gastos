import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase/FirebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext();

//Creamos un hook para mejorar la sintaxis del codigo y facilitar el uso del contexto.
const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [usuario, cambiarUsuario] = useState();
  //Necesitamos saber si la autenticacion se encuentra cargando, para no ejecutar la aplicacion antes de que esto suceda.
  const [cargando, cambiarCargando] = useState(true);

  //Hook para realizar una comprobación una unica vez y asi saber si el usuario ingreso.
  useEffect(() => {
    const cancelarSuscripcion = onAuthStateChanged(auth, (usuario) => {
      cambiarUsuario(usuario);
      cambiarCargando(false);
    });
    return cancelarSuscripcion;
  }, []);

  return (
    <AuthContext.Provider value={{ usuario: usuario }}>
      {/* Si la autenticacion no esta cargando (finalizó) entonces retornamos nuestros componentes hijos */}
      {!cargando && children}
    </AuthContext.Provider>
  );
};

export { AuthContext, useAuth, AuthProvider };
