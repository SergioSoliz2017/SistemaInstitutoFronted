import React from "react";
import { url } from "./VariableEntornos";
import { BoxCampo, TextBox, Select } from "./DiseñoInputValidarModal";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
export default function InputValidar({
  estado,
  cambiarEstado,
  label,
  name,
  obtener,
  sede,rol
}) {
  const validacion = () => {
    if (estado.campo != "") {
      cambiarEstado({ ...estado, valido: "true" });
    } else {
      cambiarEstado({ ...estado, valido: "false" });
    }
  };
  const genero = ["Hombre", "Mujer"];

  const [listaEstudiantes, setListaEstudiantes] = useState([]);
  useEffect(() => {
    if (obtener) {
      axios.get(url + "obtenerEstudiantes").then((datos) => {
        setListaEstudiantes(datos.data);
      });
    }
    if(sede){
      axios.get(url + "obtenerSedes").then((datos) => {
        setListaSedes(datos.data);
      });
    }
  }, []);

  const listaRol = rol === "Director" ? ["Gerente", "Secretaria","Maestro"] : ["Secretaria","Maestro"];
  const listaRelacion = [
    "Padre",
    "Madre",
    "Tio",
    "Tia",
    "Abuelo",
    "Abuela",
    "Tutor legar",
  ];
  const listTipoColegio = ["Fiscal", "Convenio", "Particular"];
  const [listaSedes,setListaSedes] = useState([])
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
    <BoxCampo tipo={label}>
      <TextBox>{label}</TextBox>
      <Select
        tipo={label}
        id={name}
        value={estado.campo}
        valido={estado.valido}
        onChange={(e) => {
          cambiarEstado({ ...estado, campo: e.target.value });
        }}
        onKeyUp={validacion}
        onBlur={validacion}
      >
        {label === "Turno:" && (
          <>
            <option value="">Seleccione turno de colegio</option>
            {listTurno.map((datos) => {
              return <option value={datos}>{datos}</option>;
            })}
          </>
        )}
        {label === "Curso:" && (
          <>
            <option value="">Seleccione curso</option>
            {listCurso.map((datos) => {
              return <option value={datos}>{datos}</option>;
            })}
          </>
        )}
        {label === "Tipo colegio:" && (
          <>
            <option value="">Seleccione tipo de colegio</option>
            {listTipoColegio.map((datos) => {
              return <option value={datos}>{datos}</option>;
            })}
          </>
        )}
        {label === "Relacion:" && (
          <>
            <option value="">Seleccione relacion</option>
            {listaRelacion.map((datos) => {
              return <option value={datos}>{datos}</option>;
            })}
          </>
        )}
        {label === "Estudiantes:" && (
          <>
            <option value="">Seleccione estudiante</option>
            {listaEstudiantes.map((datos) => {
              return (
                <option value={datos.CODESTUDIANTE}>
                  {datos.NOMBREESTUDIANTE + " " + datos.APELLIDO}
                </option>
              );
            })}
          </>
        )}
        {label === "Genero:" && (
          <>
            <option value="">Seleccione genero</option>
            {genero.map((datos) => {
              return <option value={datos}>{datos}</option>;
            })}
          </>
        )}
        {label === "Rol:" && (
          <>
            <option value="">Seleccione rol</option>
            {listaRol.map((datos) => {
              return <option value={datos}>{datos}</option>;
            })}
          </>
        )}
        {label === "Sede:" && (
          <>
            <option value="">Seleccione sede</option>
            {listaSedes.map((datos) => {
              return <option value={datos.NOMBRESEDE}>{datos.NOMBRESEDE}</option>;
            })}
          </>
        )}
      </Select>
    </BoxCampo>
  );
}
