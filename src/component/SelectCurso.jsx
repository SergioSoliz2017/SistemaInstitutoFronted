import React from "react";
import { BoxCampo, TextBox, Select } from "./DiseñoInputValidar";
import { useState } from "react";
import { useEffect } from "react";

export default function SelectCurso({
  estado,
  cambiarEstado,
  label,
  name,
  dato,
  sub,
}) {
  const [listaCursos, setListaCursos] = useState([]);

  useEffect(() => {
    setListaCursos(dato);
  }, [dato]);

  const validacion = () => {
    if (estado.campo != "") {
      cambiarEstado({ ...estado, valido: "true" });
    } else {
      cambiarEstado({ ...estado, valido: "false" });
    }
  };

  return (
    <BoxCampo curso={"true"} sub={sub}>
      <TextBox>{label}</TextBox>
      <Select
        id={name}
        value={estado.campo}
        valido={estado.valido}
        onChange={(e) => {
          const selectedOption = e.target.options[e.target.selectedIndex];
          const textoSeleccionado = selectedOption.text;
          cambiarEstado({ ...estado, campo: e.target.value,texto: textoSeleccionado});
        }}
        onKeyUp={validacion}
        onBlur={validacion}
      >
        <option value="">Seleccionar Curso</option>
        {listaCursos.map((curso) => {
          return <option value={curso.CODCURSO}>{curso.CURSO}</option>;
        })}
      </Select>
    </BoxCampo>
  );
}
