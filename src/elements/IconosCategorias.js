import React from "react";
import {ReactComponent as IconoComida} from "./../img-curso/cat_comida.svg";
import {ReactComponent as IconoCuentas} from "./../img-curso/cat_cuentas-y-pagos.svg";
import {ReactComponent as IconoHogar} from "./../img-curso/cat_hogar.svg";
import {ReactComponent as IconoTransporte} from "./../img-curso/cat_transporte.svg";
import {ReactComponent as IconoRopa} from "./../img-curso/cat_ropa.svg";
import {ReactComponent as IconoEscuela} from "./../img-curso/school.svg";
import {ReactComponent as IconoCompras} from "./../img-curso/cat_compras.svg";
import {ReactComponent as IconoDiversion} from "./../img-curso/cat_diversion.svg";

const IconosCategorias = ({ id }) => {
    switch (id) {
      case "comida":
        return <IconoComida />;
      case "cuentas":
        return <IconoCuentas />;
      case "hogar":
        return <IconoHogar />;
      case "transporte":
        return <IconoTransporte />;
      case "ropa":
        return <IconoRopa />;
      case "educacion":
        return <IconoEscuela />;
      case "compras":
        return <IconoCompras />;
      case "entretenimiento":
        return <IconoDiversion />;
      default:
        break;
    }    

};

export default IconosCategorias;
