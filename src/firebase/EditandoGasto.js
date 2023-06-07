import { db } from "./FirebaseConfig";
import { updateDoc, doc } from "firebase/firestore";

const EditandoGasto = async ({ id, categoria, descripcion, valor, fecha }) => {
  const documento = doc(db, "Gastos", id);
 return await updateDoc(documento, {
    descripcion: descripcion,
    valor: Number(valor),
    categoria: categoria,
    fecha: fecha,
  });
};

export default EditandoGasto;
