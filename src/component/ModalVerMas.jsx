import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  BotonCerrar,
  ContainerTabla,
  ContenedorModal,
  DetalleUsuario,
  EncabezadoModal,
  Overlay,
  Titulo,
} from "./DiseñoModalVerMas";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles({
  encabezado: {
    background: "#000",
  },
  celdas: {
    height: "50px",
    fontFamily: "bold",
    fontWeight: "1000",
    fontSize: "15px",
    borderBottom: "1px solid #d6d6d6",
    borderLeft: "1px solid #d6d6d6",
    borderTop: "1px solid #d6d6d6",
    color: "#d6d6d6",
  },
  fila: {
    borderBottom: "2px solid white",
    "&:hover": {
      backgroundColor: "#a09fa2",
      borderBottom: "2px solid black",
    },
  },
  texto: {
    height: "50px",
    fontFamily: "bold",
    fontSize: "16px",
  },
  icon: {
    height: "50px",
    width: "50px",
    fontFamily: "bold",
    fontSize: "14px",
  },
});
export default function ModalVerMas({
  estado,
  cambiarEstado,
  datos,
  ocultar,
  tipo,
}) {
  const [listaTutores, setListaTutores] = useState([]);
  const [listaEstudiantes, setListaEstudiantes] = useState([]);
  const url = "http://127.0.0.1:8000/";
  const classes = styles();
  
  useEffect(() => {
    if (tipo === "Estudiante") {
      axios.get(url + "obtenerTutores/" + datos).then((response) => {
        setListaTutores(response.data);
      });
    } else {
      axios.get(url + "obtenerEstudiantes/" + datos).then((response) => {
        setListaEstudiantes(response.data);
      });
    }
  }, [datos]);
  return (
    <>
      {estado && (
        <Overlay>
          <ContenedorModal tipo={tipo}>
            <EncabezadoModal>
              <Titulo>
                {tipo === "Estudiante" ? "TUTORES" : "ESTUDIANTES"}
              </Titulo>
            </EncabezadoModal>
            <BotonCerrar
              onClick={() => {
                cambiarEstado(false);
                ocultar("false");
              }}
            >
              <FontAwesomeIcon icon={faXmark} />
            </BotonCerrar>
            <DetalleUsuario>
              <ContainerTabla>
                {tipo === "Estudiante" && (
                  <Table>
                    <TableHead>
                      <TableRow className={classes.encabezado}>
                        <TableCell className={classes.celdas}>CODIGO</TableCell>
                        <TableCell className={classes.celdas}>NOMBRE</TableCell>
                        <TableCell className={classes.celdas}>
                          APELLIDO
                        </TableCell>
                        <TableCell className={classes.celdas}>
                          FECHA NACIMIENTO
                        </TableCell>
                        <TableCell className={classes.celdas}>
                          CELULAR
                        </TableCell>
                        <TableCell className={classes.celdas}>GENERO</TableCell>
                        <TableCell className={classes.celdas}>
                          OCUPACION
                        </TableCell>
                        <TableCell className={classes.celdas}>CORREO</TableCell>
                        <TableCell className={classes.celdas}>
                          RELACION
                        </TableCell>
                        <TableCell className={classes.celdas}>ESTADO</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {listaTutores.map((tutor) => {
                        return (
                          <TableRow className={classes.fila}>
                            <TableCell className={classes.texto}>
                              {tutor.CODTUTOR}
                            </TableCell>
                            <TableCell className={classes.texto}>
                              {tutor.NOMBRETUTOR}
                            </TableCell>
                            <TableCell className={classes.texto}>
                              {tutor.APELLIDOTUTOR}
                            </TableCell>
                            <TableCell className={classes.texto}>
                              {tutor.FECHANACIMIENTOTUTOR}
                            </TableCell>
                            <TableCell className={classes.texto}>
                              {tutor.CELULARTUTOR}
                            </TableCell>
                            <TableCell className={classes.texto}>
                              {tutor.GENEROTUTOR}
                            </TableCell>
                            <TableCell className={classes.texto}>
                              {tutor.OCUPACION}
                            </TableCell>
                            <TableCell className={classes.texto}>
                              {tutor.CORREO}
                            </TableCell>
                            <TableCell className={classes.texto}>
                              {tutor.RELACION}
                            </TableCell>
                            <TableCell className={classes.texto}>
                              {tutor.ESTADO}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                )}
                {tipo === "Tutor" && (
                  <Table>
                    <TableHead>
                      <TableRow className={classes.encabezado}>
                        <TableCell className={classes.celdas}>CODIGO</TableCell>
                        <TableCell align="center" className={classes.celdas}>
                          NOMBRE
                        </TableCell>
                        <TableCell align="center" className={classes.celdas}>
                          APELLIDO
                        </TableCell>
                        <TableCell align="center" className={classes.celdas}>
                          FECHA NACIMIENTO
                        </TableCell>
                        <TableCell align="center" className={classes.celdas}>
                          GENERO
                        </TableCell>
                        <TableCell align="center" className={classes.celdas}>
                          DIRECCION
                        </TableCell>
                        <TableCell align="center" className={classes.celdas}>
                          PAIS
                        </TableCell>
                        <TableCell align="center" className={classes.celdas}>
                          DEPARTAMENTO
                        </TableCell>
                        <TableCell align="center" className={classes.celdas}>
                          CIUDAD
                        </TableCell>
                        <TableCell align="center" className={classes.celdas}>
                          COLEGIO
                        </TableCell>
                        <TableCell align="center" className={classes.celdas}>
                          TIPO COLEGIO
                        </TableCell>
                        <TableCell align="center" className={classes.celdas}>
                          CURSO
                        </TableCell>
                        <TableCell align="center" className={classes.celdas}>
                          TURNO
                        </TableCell>
                        <TableCell align="center" className={classes.celdas}>
                          HABILITADO
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {listaEstudiantes.map((estudiante) => {
                        return (
                          <TableRow className={classes.fila}>
                            <TableCell align="center" className={classes.texto}>
                              {estudiante.NOMBREESTUDIANTE}
                            </TableCell>
                            <TableCell className={classes.texto}>
                              {estudiante.APELLIDOESTUDIANTE}
                            </TableCell>
                            <TableCell className={classes.texto}>
                              {estudiante.FECHANACIMIENTOESTUDIANTE}
                            </TableCell>
                            <TableCell className={classes.texto}>
                              {estudiante.GENEROESTUDIANTE}
                            </TableCell>
                            <TableCell className={classes.texto}>
                              {estudiante.DIRECCION}
                            </TableCell>
                            <TableCell className={classes.texto}>
                              {estudiante.PAIS}
                            </TableCell>
                            <TableCell className={classes.texto}>
                              {estudiante.DEPARTAMENTO}
                            </TableCell>
                            <TableCell className={classes.texto}>
                              {estudiante.CIUDAD}
                            </TableCell>
                            <TableCell className={classes.texto}>
                              {estudiante.COLEGIO}
                            </TableCell>
                            <TableCell className={classes.texto}>
                              {estudiante.TIPOCOLEGIO}
                            </TableCell>
                            <TableCell className={classes.texto}>
                              {estudiante.CURSO}
                            </TableCell>
                            <TableCell className={classes.texto}>
                              {estudiante.TURNO}
                            </TableCell>
                            <TableCell className={classes.texto}>
                              {estudiante.HABILITADO}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                )}
              </ContainerTabla>
            </DetalleUsuario>
          </ContenedorModal>
        </Overlay>
      )}
    </>
  );
}
