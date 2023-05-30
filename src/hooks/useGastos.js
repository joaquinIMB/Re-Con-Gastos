import { useState, useEffect } from "react";
import { db } from "./../firebase/FirebaseConfig";
import {
  collection,
  onSnapshot,
  where,
  limit,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";
import { useAuth } from "./../contextos/authContext";

const useGastos = () => {
  const { usuario } = useAuth();
  const [gastos, cambiarGastos] = useState([]);
  const [masElementos, cargarMasElementos] = useState(false);
  const [ultimoGasto, cambiarUltimoGasto] = useState(null);

  const obtenerMasGastos = () => {
    const consultaMasGastos = query(
      collection(db, "Gastos"),
      where("uidUsuario", "==", usuario.uid),
      orderBy("fecha", "desc"),
      limit(10),
      startAfter(ultimoGasto)
    );
    const alObtenerMasgastos = onSnapshot(consultaMasGastos, (snapshot) => {
      if (snapshot.docs.length > 0) {
        cambiarUltimoGasto(snapshot.docs[snapshot.docs.length - 1]);
        cambiarGastos(
          gastos.concat(
            snapshot.docs.map((gasto) => {
              return { ...gasto.data(), id: gasto.id };
            })
          )
        );
      }else{
        cargarMasElementos(false)
      }
    })
    return alObtenerMasgastos;
  };

  useEffect(() => {
    const consulta = query(
      collection(db, "Gastos"),
      where("uidUsuario", "==", usuario.uid),
      orderBy("fecha", "desc"),
      limit(10)
    );
    const unsuscribe = onSnapshot(consulta, (snapshot) => {
      if (snapshot.docs.length > 0 && snapshot.docs.length === 10) {
        cambiarUltimoGasto(snapshot.docs[snapshot.docs.length - 1]);
        cargarMasElementos(true);
      } else {
        cargarMasElementos(false);
      }
      cambiarGastos(
        snapshot.docs.map((gasto) => {
          return { ...gasto.data(), id: gasto.id };
        })
      );
    });
    return unsuscribe;
  }, [usuario]);
  return [gastos, obtenerMasGastos, masElementos];
};

export default useGastos;
