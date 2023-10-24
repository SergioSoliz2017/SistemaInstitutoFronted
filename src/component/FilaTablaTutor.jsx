import { TableCell, TableRow } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ContainerImgIcon, ImgIcon } from "./DiseñoPantallaPrincipal";
import {
          fa0,
  faFolder,
  faFolderOpen,
  faToggleOff,
  faToggleOn,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { url } from "./VariableEntornos";
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
export default function FilaTablaTutor({
  cantidad,
  tutor,
  modalInformacion,
  ocultar,
  tutorElegido,
  tipo,
  actualizo,
  modalTutor
}) {
  const [hovered, setHovered] = useState(false);
  const classes = styles();
  return (
    <TableRow className={classes.fila}>
      <TableCell className={classes.texto}>
        {cantidad}
      </TableCell>
      <TableCell className={classes.texto}>{tutor.CODTUTOR}</TableCell>
      <TableCell className={classes.texto}>{tutor.NOMBRETUTOR}</TableCell>
      <TableCell className={classes.texto}>{tutor.APELLIDOTUTOR}</TableCell>
      <TableCell className={classes.opciones}>
        <ContainerImgIcon
          onClick={() => {
            modalInformacion(true);
            ocultar("true");
            tutorElegido(tutor);
            tipo("Tutor");
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <ImgIcon icon={hovered ? faFolderOpen : faFolder} />
        </ContainerImgIcon>
        <ContainerImgIcon
          switch={"true"}
          onClick={() => {
                    modalTutor(true);
                   tutorElegido(tutor);
                    ocultar("true");
          }}
        >
          <ImgIcon
            tabla={"true"}
            icon={
              tutor.ESTADO === "Activo" ? faToggleOn : faToggleOff
            }
          />
        </ContainerImgIcon>
      </TableCell>
    </TableRow>
  );
}
