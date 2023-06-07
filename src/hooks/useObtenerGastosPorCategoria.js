import { useEffect, useState } from "react";
import useObtenerGastosMes from "./useObtenerGastosMes";

const useObtenerGastosPorCategoria = () => {
  const [gastosPorCategoria, cambiarGastosPorCategoria] = useState([]);
  const gastos = useObtenerGastosMes();
  useEffect(() => {
    const sumaDeGastos = gastos.reduce(
      (objetoResultante, objetoActual) => {
        const categoriaActual = objetoActual.categoria;
        const cantidadActual = objetoActual.valor;
         objetoResultante[categoriaActual] = +cantidadActual;
         return objetoResultante;
      },
      {
        'comida': 0,
        'cuentas': 0,
        'hogar': 0,
        'transporte': 0,
        'ropa': 0,
        'educacion': 0,
        'compras': 0,
        'entretenimiento': 0,
      });
      cambiarGastosPorCategoria(
      Object.keys(sumaDeGastos).map((elemento) => {
        return { categoria: elemento, valor: sumaDeGastos[elemento] };
      }));
    }, [gastos, cambiarGastosPorCategoria]);
    return gastosPorCategoria;
};
export default useObtenerGastosPorCategoria;
