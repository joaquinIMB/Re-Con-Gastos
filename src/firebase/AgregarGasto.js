import { db } from "./FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const AgregarGasto = ({ categoria, descripcion, valor, fecha, uidUsuario }) => {
  return addDoc(collection(db, "Gastos"), {
    descripcion: descripcion,
    valor: Number(valor),
    categoria: categoria,
    fecha: fecha,
    uidUsuario: uidUsuario,
  });
};

export default AgregarGasto;
