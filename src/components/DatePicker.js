import React, { useState } from "react";
import { styled } from "styled-components";
import { DayPicker } from "react-day-picker";
import { es } from "date-fns/locale";
import "react-day-picker/dist/style.css";
import format from "date-fns/format";
import theme from "../theme";

//dd dia MMMM mes yyyyy año, al volver a clickear la fecha seleccionada nos devuelve undefined
//entonces igualamos la fecha a una nueva para que devuelva la atual

const formatFecha = (fecha = new Date()) =>
  format(fecha, `dd 'de' MMMM 'de' yyyy`, { locale: es });

const DatePicker = ({ fecha, nuevaFecha }) => {
  const [visible, cambiarVisible] = useState(false);
  return (
    //Mode single porque queremos seleccionar una sola fecha especifica
    //Selected porque queremos que predeterminadamente tenga esa fecha actual en la que abra la web
    //onSelect para cambiar el estado y agregar la fecha seleccionada al new Date
    <ContenedorInput id="contenedor">
      <input
        inputFormularioGastos
        type="text"
        readOnly
        value={formatFecha(fecha)}
        onClick={() => cambiarVisible(!visible)}
      />
      {visible && (
        <DayPicker
          mode="single"
          selected={fecha}
          onSelect={(e) => {
            nuevaFecha(e);
            cambiarVisible(!visible);
          }}
          locale={es}
        />
      )}
    </ContenedorInput>
  );
};

const ContenedorInput = styled.div`
  position: relative;

  input {
    font-family: "Work Sans", sans-serif;
    box-sizing: border-box;
    background: ${theme.grisClaro};
    border: none;
    cursor: pointer;
    border-radius: 0.625rem;
    height: 5.2rem;
    width: 100%;
    padding: 0 1.25rem;
    font-size: 1.5rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    transition: 0.5s ease all;
    &:hover {
      background: #d7d7d7;
    }
    @media (max-width: 67.188rem) {
      width: 20rem;
    }
    @media (max-width: 64rem) {
      width: 100%;
    }
  }

  .rdp {
    position: absolute;
    margin: 0;
    top: 5.62rem;
    font-size: 40px;
    font-size: 22px;
    accent-color: #e8e801;
    top: 5.62rem;
    z-index: 757;
    @media (max-width: 26.563rem) {
      width: 100%;
    }
  }

  .rdp-months {
    display: flex;
    max-height: 23.75rem;
    min-height: 18.75rem;
  }

  .rdp-month {
    background: #ebebeb;
    box-shadow: 0px 5px 13px #00000060;
    padding: 0px 20px;
    border-radius: 0.625rem;
    width: 20rem;
    @media (max-width: 64rem) {
      padding: 0px;
      width:20.5rem;
    }
    @media (max-width: 40.625rem) {
      padding: 0px;
      width: 100%;
    }
  }
  .rdp-caption {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    text-align: left;
    text-transform:capitalize;
    @media (max-width: 40.625rem) {
      justify-content: center;
      gap:7rem;
    }
  }
  .rdp-table {
    margin: auto;
    border-collapse: collapse;
    width: 100%;
  }

  @media (max-width: 60rem) {
    & > * {
      width: 100%;
    }
  }
`;

export default DatePicker;
