import { TableCell, TableRow } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ContainerImgIcon, ImgIcon } from "./DiseñoPantallaPrincipal";
import {
  faFolder,
  faFolderOpen,
  faToggleOff,
  faToggleOn,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { url } from "./VariableEntornos";
import alerta from "sweetalert2";

const styles = makeStyles({
  celdas: {
    fontFamily: "bold",
    fontWeight: "1000",
    borderBottom: "1px solid #d6d6d6",
    borderLeft: "1px solid #d6d6d6",
    borderTop: "1px solid #d6d6d6",
    color: "#000",
  },
  fila: {
    borderBottom: "2px solid white",
    "&:hover": {
      backgroundColor: "#a09fa2",
    },
  },
  texto: {
    height: "40px",
    fontFamily: "bold",
  },
  opciones: {
    display: "flex",
  },
});

export default function FilaTabla({
  cantidad,
  estudiante,
  modalInformacion,
  ocultar,
  estudianteElegido,
  tipo,
  actualizo,
}) {
  const [hovered, setHovered] = useState(false);
  const classes = styles();
  return (
    <TableRow className={classes.fila}>
      <TableCell className={classes.texto}>{cantidad}</TableCell>
      <TableCell className={classes.texto}>
        {estudiante.CODESTUDIANTE}
      </TableCell>
      <TableCell className={classes.texto}>
        {estudiante.NOMBREESTUDIANTE}
      </TableCell>
      <TableCell className={classes.texto}>
        {estudiante.APELLIDOESTUDIANTE}
      </TableCell>
      <TableCell className={classes.opciones}>
        <ContainerImgIcon
          onClick={() => {
            modalInformacion(true);
            ocultar("true");
            estudianteElegido(estudiante);
            tipo("Estudiante");
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <ImgIcon icon={hovered ? faFolderOpen : faFolder} />
        </ContainerImgIcon>
        <ContainerImgIcon
          switch={"true"}
          onClick={() => {
            alerta
              .fire({
                title: "¿Esta seguro?",
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "#000",
                cancelButtonColor: "#d33",
                reverseButtons: true,
                confirmButtonText: "Si",
                cancelButtonText: "No",
                background: "#d6d6d6",
                iconColor: "#000",
                color: "#000",
              })
              .then((result) => {
                if (result.isConfirmed) {
                  alerta.fire({
                    title: "Cambio realizado",
                    icon: "success",
                    confirmButtonColor: "#000",
                    background: "#d6d6d6",
                    iconColor: "#000",
                    color: "#000",
                  });
                  const cambiar = {
                    HABILITADO:
                      estudiante.HABILITADO === "Habilitado"
                        ? "Deshabilitado"
                        : "Habilitado",
                  };
                  axios
                    .put(
                      url +
                        "actualizarEstadoEstudiante/" +
                        estudiante.CODESTUDIANTE,
                      cambiar
                    )
                    .then((response) => {
                      actualizo(true);
                    });
                }
              });
          }}
        >
          <ImgIcon
            tabla={"true"}
            icon={
              estudiante.HABILITADO === "Habilitado" ? faToggleOn : faToggleOff
            }
          />
        </ContainerImgIcon>
      </TableCell>
    </TableRow>
  );
}
