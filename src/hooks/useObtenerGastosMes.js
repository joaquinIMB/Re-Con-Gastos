import {useState, useEffect} from 'react';
import { db } from '../firebase/FirebaseConfig';
import { collection, orderBy, onSnapshot, where, query } from 'firebase/firestore';
import { startOfMonth, endOfMonth, getUnixTime } from 'date-fns';
import { useAuth } from '../contextos/authContext';

const useObtenerGastosMes = () => {
    const {usuario} = useAuth();
    const [gastos, establecerGastos] = useState([]);
    
    useEffect(() => {
        const inicioDeMes = getUnixTime(startOfMonth(new Date()));
        const finDeMes = getUnixTime(endOfMonth(new Date()));
        if(usuario){
            const consulta = query(
                collection(db, 'Gastos'),
                orderBy('fecha', 'desc'),
                where('fecha', '>=', inicioDeMes),
                where('fecha', '<=', finDeMes),
                where('uidUsuario', '==', usuario.uid))
            const unSuscribe = onSnapshot(consulta, (snapshot) => {
                establecerGastos(snapshot.docs.map((documento) => {
                return {...documento.data(), id: documento.id}}))
            }, (error) => console.log(error))
            return unSuscribe;
        }
    }, [usuario])

    return gastos;
}
 
export default useObtenerGastosMes;