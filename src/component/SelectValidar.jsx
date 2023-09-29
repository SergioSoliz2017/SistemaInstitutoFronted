import React from "react";
import { BoxCampo, TextBox, Select } from "./DiseñoInputValidar";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
export default function InputValidar({
  estado,
  cambiarEstado,
  label,
  name,
  crear,
  datos,
}) {
  const validacion = () => {
    if (estado.campo != "") {
      cambiarEstado({ ...estado, valido: "true" });
    } else {
      cambiarEstado({ ...estado, valido: "false" });
    }
  };
  const url = "http://127.0.0.1:8000/";

  const [listaEstudiantes, setListaEstudiantes] = useState([]);
  useEffect(() => {
    axios.get(url + "obtenerEstudiantes").then((datos) => {
      setListaEstudiantes(datos.data);
    });
  }, [datos]);

  const listaRelacion = [
    "Padre",
    "Madre",
    "Tio",
    "Tia",
    "Abuelo",
    "Abuela",
    "Tutor legar",
    "No tiene",
  ];
  const listTipoColegio = ["Fiscal", "Convenio", "Particular"];
  const listTurno = ["Mañana", "Tarde", "Noche"];
  const listCurso = [
    "1° Primaria",
    "2° Primaria",
    "3° Primaria",
    "4° Primaria",
    "5° Primaria",
    "6° Primaria",
    "1° Secundaria",
    "2° Secundaria",
    "3° Secundaria",
    "4° Secundaria",
    "5° Secundaria",
    "6° Secundaria",
  ];
  return (
    <BoxCampo crear={crear}>
      <TextBox>{label}</TextBox>
      <Select
        id={name}
        value={estado.campo}
        valido={estado.valido}
        onChange={(e) => {
          cambiarEstado({ ...estado, campo: e.target.value });
        }}
        onKeyUp={validacion}
        onBlur={validacion}
      >
        {label === "Turno" && (
          <>
            <option value="">Seleccione turno de colegio</option>
            {listTurno.map((datos) => {
              return <option value={datos}>{datos}</option>;
            })}
          </>
        )}
        {label === "Curso" && (
          <>
            <option value="">Seleccione curso</option>
            {listCurso.map((datos) => {
              return <option value={datos}>{datos}</option>;
            })}
          </>
        )}
        {label === "Tipo colegio" && (
          <>
            <option value="">Seleccione tipo de colegio</option>
            {listTipoColegio.map((datos) => {
              return <option value={datos}>{datos}</option>;
            })}
          </>
        )}
        {label === "Relacion con el estudiante" && (
          <>
            <option value="">Seleccione relacion</option>
            {listaRelacion.map((datos) => {
              return <option value={datos}>{datos}</option>;
            })}
          </>
        )}
        {label === "Estudiantes" && (
          <>
            <option value="">Selecciones estudiante</option>
            {listaEstudiantes.map((datos) => {
              return (
                <option value={datos.CODESTUDIANTE}>
                  {datos.NOMBREESTUDIANTE}
                </option>
              );
            })}
          </>
        )}
      </Select>
    </BoxCampo>
  );
}