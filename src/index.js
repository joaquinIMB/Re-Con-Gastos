import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import WebFont from "webfontloader";
import Contenedor from "./elements/Contenedor";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditarGastos from "./components/EditarGastos";
import GastosCategoria from "./components/GastosCategoria";
import InicioSesion from "./components/InicioSesion";
import ListaGastos from "./components/ListaGastos";
import RegistroUsuario from "./components/RegistroUsuario";
import { Helmet } from "react-helmet";
import favicon from "./img-curso/favicon.png";
import Fondo from "./elements/Fondo";
import { AuthProvider } from "./contextos/authContext";
import RutaPrivada from "./components/RutaPrivada";

WebFont.load({
  google: {
    families: ["Work Sans:400,500,700", "sans-serif", "Ubuntu", "PT Sans"],
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <>
      <Helmet>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
        <title>ReCon</title>
      </Helmet>
      <AuthProvider>
        <BrowserRouter>
          <Contenedor>
            <Routes>
              <Route path="/registro-usuario" element={<RegistroUsuario />} />
              <Route path="/iniciar-sesion" element={<InicioSesion />} />
              <Route
                path="/categoria-gastos"
                element={
                  <RutaPrivada>
                    <GastosCategoria />
                  </RutaPrivada>
                }
              />
              <Route
                path="/editar-gastos/:id"
                element={
                  <RutaPrivada>
                    <EditarGastos />
                  </RutaPrivada>
                }
              />
              <Route
                path="/lista-gastos"
                element={
                  <RutaPrivada>
                    <ListaGastos />
                  </RutaPrivada>
                }
              />
              <Route
                path="/"
                element={
                  <RutaPrivada>
                    <App />
                  </RutaPrivada>
                }
              />
            </Routes>
          </Contenedor>
        </BrowserRouter>
      </AuthProvider>
      <Fondo />
    </>
  </React.StrictMode>
);
