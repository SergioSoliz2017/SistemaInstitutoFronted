import React from "react";
import { BoxCampo, TextBox, Select } from "./DiseñoInputValidar";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { url } from "./VariableEntornos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
export default function SelectGrupo({
  estado,
  cambiarEstado,
  label,
  name,
  dato,
  sub,
  sede,
}) {
  const [listaGrupos, setListaGrupos] = useState([]);

  useEffect(() => {
    if (dato !== "") {
      axios.get(url + "obtenerGrupoLimite/" + dato + "/" + sede).then((grupo) => {
        setListaGrupos(grupo.data);
        console.log(grupo.data)
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
    <BoxCampo curso={"true"} sub={sub}>
      <TextBox>{label}</TextBox>
      <Select
        id={name}
        value={estado.campo}
        valido={estado.valido}
        onChange={(e) => {
          const precio =
            listaGrupos.find((grupo) => grupo.CODGRUPO === e.target.value)
              ?.PRECIO || "";
          const texto = listaGrupos.find((grupo) => grupo.CODGRUPO === e.target.value)
          ?.NOMBREGRUPO || "";
          cambiarEstado({
            ...estado,
            campo: e.target.value,
            precio: precio,
            texto : texto
          });
        }}
        onKeyUp={validacion}
        onBlur={validacion}
      >
        <option value="">Seleccionar Grupo</option>
        {listaGrupos.map((grupo) => {
  return (
    <option key={grupo.CODGRUPO} value={grupo.CODGRUPO}>
      {grupo.NOMBREGRUPO} {grupo.LIMITE === "HAY" ? "✅" : grupo.LIMITE === "⚠️" ? "E" : "❌"}
    </option>
  );
})}
      </Select>
    </BoxCampo>
  );
}
