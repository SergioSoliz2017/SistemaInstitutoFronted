import React from "react";
import {
  Overlay,
  ContenedorModal,
  EncabezadoModal,
  BotonCerrar,
  Titulo,
  DetalleUsuario,
  ContainerTabla,
  ContainerBusqueda,
  InputBusqueda,
  BotonBuscar,
  Select,
} from "./DiseñoModalBuscar";
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
import { ImgIcon } from "./DiseñoPantallaPrincipal";

const styles = makeStyles({
  encabezado: {
    background: "#000",
  },
  celdas: {
    height: "50px",
    fontFamily: "bold",
    fontWeight: "1000",
    fontSize: "18px",
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

export default function ModalBuscar({ estado, cambiarEstado, ocultar, datos }) {
  const classes = styles();

  const [listaEstudiantes, setListaEstudiantes] = useState([]);
  const [listaBusqueda, setListaBusqueda] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [busqueda, setBusqueda] = useState("");
  useEffect(() => {
    setListaEstudiantes(datos);
  }, [datos]);

  const buscar = () => {
    const lista = [];
    listaEstudiantes.map((estudiante) => {
      if (filtro == "Nombre") {
        if (estudiante.NOMBREESTUDIANTE == busqueda) {
          lista.push(estudiante);
        }
      }
      if (filtro == "Apellido") {
        if (estudiante.APELLIDOESTUDIANTE == busqueda) {
          lista.push(estudiante);
        }
      }
      if (filtro == "Genero") {
        if (estudiante.GENEROESTUDIANTE == busqueda) {
          lista.push(estudiante);
        }
      }
      if (filtro == "Turno") {
        if (estudiante.TURNO == busqueda) {
          lista.push(estudiante);
        }
      }
      if (filtro == "Curso") {
        if (estudiante.CURSO == busqueda) {
          lista.push(estudiante);
        }
      }
      if (filtro == "Pais") {
        if (estudiante.PAIS == busqueda) {
          lista.push(estudiante);
        }
      }
      if (filtro == "Departamento") {
        if (estudiante.DEPARTAMENTO == busqueda) {
          lista.push(estudiante);
        }
      }
      if (filtro == "Ciudad") {
        if (estudiante.CUIDAD == busqueda) {
          lista.push(estudiante);
        }
      }
      if (filtro == "Tipo") {
        if (estudiante.TIPOCOLEGIO == busqueda) {
          lista.push(estudiante);
        }
      }
    });
    setListaBusqueda(lista);
    console.log(listaBusqueda);
  };

  return (
    <>
      {estado && (
        <Overlay>
          <ContenedorModal>
            <EncabezadoModal>
              <Titulo>BUSCAR ESTUDIANTE</Titulo>
            </EncabezadoModal>
            <BotonCerrar
              onClick={() => {
                cambiarEstado(false);
                ocultar("false");
                setListaBusqueda([])
              }}
            >
              <FontAwesomeIcon icon={faXmark} />
            </BotonCerrar>
            <DetalleUsuario>
              <ContainerBusqueda>
                <InputBusqueda
                  id="busqueda"
                  onChange={(e) => {
                    setBusqueda(e.target.value);
                  }}
                />
                <Select
                  id="filtro"
                  onChange={(e) => {
                    setFiltro(e.target.value);
                  }}
                >
                  <option value="">Seleccione filtro</option>
                  <option value="Nombre">Nombre</option>
                  <option value="Apellido">Apellido</option>
                  <option value="Genero">Genero</option>
                  <option value="Turno">Turno</option>
                  <option value="Curso">Curso</option>
                  <option value="Tipo">Tipo Colegio</option>
                  <option value="Pais">Pais</option>
                  <option value="Departamento">Departamento</option>
                  <option value="Cuidad">Cuidad</option>
                </Select>
                <BotonBuscar onClick={buscar}>
                  <ImgIcon buscar={"true"} icon={faSearch} />
                </BotonBuscar>
              </ContainerBusqueda>
              <ContainerTabla>
                <Table>
                  <TableHead>
                    <TableRow className={classes.encabezado}>
                      <TableCell className={classes.celdas}>CODIGO</TableCell>
                      <TableCell className={classes.celdas}>NOMBRE</TableCell>
                      <TableCell className={classes.celdas}>APELLIDO</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {listaBusqueda.map((estudiante) => {
                      return (
                        <TableRow className={classes.fila}>
                          <TableCell className={classes.texto}>
                            {estudiante.CODESTUDIANTE}
                          </TableCell>
                          <TableCell className={classes.texto}>
                            {estudiante.NOMBREESTUDIANTE}
                          </TableCell>
                          <TableCell className={classes.texto}>
                            {estudiante.APELLIDOESTUDIANTE}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </ContainerTabla>
            </DetalleUsuario>
          </ContenedorModal>
        </Overlay>
      )}
    </>
  );
}
/*<ContainerImgIcon
                              onClick={() => {
                                setEditEstudiante(true);
                                setOcultar("true");
                                setEstudianteElegido(estudiante);
                              }}
                            >
                              <ImgIcon tabla={"true"} icon={faPenToSquare} />
                            </ContainerImgIcon>*/
/*{listaBusqueda.map((estudiante) => {
                <ContainerTabla>
                  <Table>
                    <TableHead>
                      <TableRow className={classes.encabezado}>
                        <TableCell className={classes.celdas}>CODIGO</TableCell>
                        <TableCell className={classes.celdas}>NOMBRE</TableCell>
                        <TableCell className={classes.celdas}>
                          APELLIDO
                        </TableCell>
                        <TableCell className={classes.celdas}>EDITAR</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {listaEstudiantes.map((estudiante) => {
                        return (
                          <TableRow className={classes.fila}>
                            <TableCell className={classes.texto}>
                              {estudiante.CODESTUDIANTE}
                            </TableCell>
                            <TableCell className={classes.texto}>
                              {estudiante.NOMBREESTUDIANTE}
                            </TableCell>
                            <TableCell className={classes.texto}>
                              {estudiante.APELLIDOESTUDIANTE}
                            </TableCell>
                            <TableCell
                              align="center"
                              className={classes.icon}
                            ></TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </ContainerTabla>;
              })}*/
