import React, { useState, useContext, useEffect } from "react";
import useObtenerGastosMes from './../hooks/useObtenerGastosMes'

const TotalGastadoContext = React.createContext();

//Creamos un hook para acceder al contexto desde cualquier componente
const useTotalDelMes = () => useContext(TotalGastadoContext);

const TotalGastadoProvider = ({ children }) => {
  const [total, cambiarTotal] = useState();
  const gastos = useObtenerGastosMes()

  useEffect(() => {
    let acumulado = 0;
    gastos.forEach((gasto) => {
        acumulado += gasto.valor
    })
    cambiarTotal(acumulado);
  },[gastos])

  return (
    <TotalGastadoContext.Provider value={{ total: total }}>
      {children}
    </TotalGastadoContext.Provider>
  );
};

export {TotalGastadoProvider, useTotalDelMes};
