import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {
  BoxCampo,
  IconoValidacion,
  InputBox,
  TextBox,
} from "./DiseñoInputValidar";

export default function InputValidar({
  estado,
  cambiarEstado,
  tipo,
  label,
  placeholder,
  name,
  expresionRegular,
  crear,
  sub
}) {

  function calcularEdad(fecha_nacimiento) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha_nacimiento);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    return edad;
}

  const validacion = () => {
    if (tipo != "date") {
      if (expresionRegular) {
        if (expresionRegular.test(estado.campo)) {
          cambiarEstado({ ...estado, valido: "true" });
        } else {
          cambiarEstado({ ...estado, valido: "false" });
        }
      }
    } else {
      var edad = calcularEdad(estado.campo);
      if (edad >= 5) {
        cambiarEstado({ ...estado, valido: "true" });
      } else {
        cambiarEstado({ ...estado, valido: "false" });
      }
    }
  };
  return (
    <BoxCampo crear = {crear} sub = {sub}>
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
