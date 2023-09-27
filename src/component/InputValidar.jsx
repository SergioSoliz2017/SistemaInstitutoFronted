import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { BoxCampo, IconoValidacion, InputBox, TextBox } from "./DiseñoInputValidar"
export default function InputValidar({
  estado,
  cambiarEstado,
  tipo,
  label,
  placeholder,
  name,
  expresionRegular
}) {
  const validacion = () => {
    if (expresionRegular) {
      if (expresionRegular.test(estado.campo)) {
        cambiarEstado({ ...estado, valido: "true" });
      } else {
        cambiarEstado({ ...estado, valido: "false" });
      }
    }
  };
  return (
    <BoxCampo>
      <TextBox>{label}</TextBox>
      <InputBox
        type={tipo}
        placeholder={placeholder}
        id={name}
        value={estado.campo}
        onChange={(e) => {
          cambiarEstado({ ...estado, campo: e.target.value });
        }}
        onKeyUp={validacion}
        onBlur={validacion}
        valido={estado.valido}
      />
      <IconoValidacion
        icon={estado.valido === "true" ? faCircleCheck : faCircleXmark}
        valido={estado.valido}
      />
    </BoxCampo>
  );
}
