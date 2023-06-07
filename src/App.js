import React from "react";
import { Helmet } from "react-helmet";
import FormularioGastos from "./components/FormularioGastos";

const App = () => {
  return (
    <>
      <Helmet>
        <title>ReCon - Inicio</title>
      </Helmet>
      <FormularioGastos />
    </>
  );
};

export default App;
