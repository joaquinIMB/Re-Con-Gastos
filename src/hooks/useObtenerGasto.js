import { useState, useEffect } from "react";
import { db } from "../firebase/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const useObtenerGasto = (id) => {
  const  [gasto, establecerGasto ] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const obtenerGasto = async () => {
      const documento = await getDoc(doc(db, "Gastos", id));
      if (documento.exists) {
        establecerGasto(documento)
      } else {
        navigate("/lista-gastos");
      }
    //   
    };
    obtenerGasto();
  }, [id, navigate, establecerGasto]);

  return [gasto];
};

export default useObtenerGasto;
