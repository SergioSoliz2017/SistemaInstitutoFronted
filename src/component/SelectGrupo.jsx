import React from "react";
import { BoxCampo, TextBox, Select } from "./DiseñoInputValidar";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function SelectGrupo({
  estado,
  cambiarEstado,
  label,
  name,
  dato,
}) {
  const [listaGrupos, setListaGrupos] = useState([]);
  const url = "https://sistema-instituto.fly.dev/";

  useEffect(() => {
    if (dato != "") {
      axios.get(url + "obtenerGrupo/" + dato).then((grupo) => {
        
        setListaGrupos(grupo.data);
      });
    }
  }, [dato]);
  const validacion = () => {
    if (estado.campo != "") {
      cambiarEstado({ ...estado, valido: "true" });
    } else {
      cambiarEstado({ ...estado, valido: "false" });
    }
  };

  return (
    <BoxCampo>
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
        <option value="">Seleccionar Grupo</option>
        {listaGrupos.map((grupo) => {
          return <option value={grupo.NOMBREGRUPO}>{grupo.NOMBREGRUPO}</option>;
        })}
      </Select>
    </BoxCampo>
  );
}
