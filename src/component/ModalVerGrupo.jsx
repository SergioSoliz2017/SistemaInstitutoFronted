import React from "react";
import {
  BotonAñadir,
  BotonCerrar,
  BotonGrupo,
  BoxCampo,
  ContainerImgIcon,
  ContainerTabla,
  ContenedorModal,
  DetalleUsuario,
  EncabezadoModal,
  ImgIcon,
  Overlay,
  TextBox,
  Titulo,
} from "./DiseñoModalVerGrupo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faXmark } from "@fortawesome/free-solid-svg-icons";
import alerta from "sweetalert2";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useEffect } from "react";
import axios from "axios";
import { url } from "./VariableEntornos";
import { useState } from "react";
import InputValidar from "./InputValidarModal";

export default function ModalVerGrupo({
  estado,
  cambiarEstado,
  datos,
  ocultar,
}) {
  const [listaGrupos, setListaGrupos] = useState([]);
  const [actualizo, setActualizo] = useState(false);
  const [añadirGrupo, setAñadirGrupo] = useState("false");
  const [grupo, setGrupo] = useState({ campo: "", valido: null });
  const [cantidadGrupo, setCantidadGrupo] = useState({
    campo: "",
    valido: null,
  });
  const expresiones = {
    nombre: /^(?=\S)(?!.*\s{2})[a-zA-ZÀ-ÿ\s-]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    letra: /^(?=\S)(?!.*\s{2})(?!.*\s$)[a-zA-Z0-9\-: ]{3,40}$/,
    numero: /^\d{1,3}$/,
  };
  var cantidad = 0;
  useEffect(() => {
    axios.get(url + "obtenerGrupo/" + datos.CODCURSO).then((resp) => {
      setListaGrupos(resp.data);
      setActualizo(false);
    });
  }, [actualizo, datos]);

  const agregarGrupo = () => {
    const grupoNuevo = {
      CODSEDE: datos.CODSEDE,
      CODCURSO: datos.CODCURSO,
      CANTIDADMAXIMA: parseInt(cantidadGrupo.campo),
      NOMBREGRUPO: grupo.campo,
    };
    axios.post(url + "agregarGrupo", grupoNuevo).then((response) => {
      setAñadirGrupo("false");
      setGrupo("");
      setCantidadGrupo("");
      setActualizo(true);
    });
  };

  return (
    <>
      {estado && (
        <Overlay>
          <ContenedorModal añadir={añadirGrupo}>
            <EncabezadoModal>
              <Titulo>{"CURSO DE " + datos.CURSO.toUpperCase()}</Titulo>
            </EncabezadoModal>
            <BotonCerrar
              onClick={() => {
                if (añadirGrupo === "false") {
                  cambiarEstado(false);
                  ocultar("false");
                } else {
                  setAñadirGrupo("false");
                }
              }}
            >
              <FontAwesomeIcon icon={faXmark} />
            </BotonCerrar>
            {añadirGrupo === "false" && (
              <DetalleUsuario>
                <ContainerTabla>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Nº</TableCell>
                        <TableCell>Curso</TableCell>
                        <TableCell align="center">Eliminar</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {listaGrupos.map((grupo) => {
                        return (
                          <TableRow>
                            <TableCell>{(cantidad = cantidad + 1)}</TableCell>
                            <TableCell>{grupo.NOMBREGRUPO}</TableCell>
                            <TableCell>
                              <ContainerImgIcon
                                onClick={() => {
                                  alerta
                                    .fire({
                                      title: "¿Esta seguro de eliminar?",
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
                                          title: "Operacion Exitosa",
                                          icon: "success",
                                          confirmButtonColor: "#000",
                                          background: "#d6d6d6",
                                          iconColor: "#000",
                                          color: "#000",
                                        });
                                        const grupoEliminar = {
                                          CODSEDE: grupo.CODSEDE,
                                          CODCURSO: grupo.CODCURSO,
                                          NOMBREGRUPO: grupo.NOMBREGRUPO,
                                        };
                                        axios
                                          .delete(url + "eliminarGrupo", {
                                            data: grupoEliminar,
                                          })
                                          .then((response) =>
                                            setActualizo(true)
                                          );
                                      }
                                    });
                                }}
                              >
                                <ImgIcon icon={faXmark} />
                              </ContainerImgIcon>
                            </TableCell>{" "}
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </ContainerTabla>
                <BotonAñadir
                  onClick={() => {
                    setAñadirGrupo("true");
                  }}
                >
                  <FontAwesomeIcon icon={faAdd} />
                </BotonAñadir>
              </DetalleUsuario>
            )}
            {añadirGrupo === "true" && (
              <DetalleUsuario>
                <InputValidar
                  estado={grupo}
                  cambiarEstado={setGrupo}
                  tipo="text"
                  label="Grupo:"
                  placeholder="Grupo"
                  name="Grupo"
                  expresionRegular={expresiones.letra}
                />
                <InputValidar
                  estado={cantidadGrupo}
                  cambiarEstado={setCantidadGrupo}
                  tipo="number"
                  label="Cantidad:"
                  placeholder="Cantidad"
                  name="Cantidad"
                  expresionRegular={expresiones.numero}
                />
                <BoxCampo>
                  <BotonGrupo onClick={agregarGrupo}>Añadir</BotonGrupo>
                </BoxCampo>
              </DetalleUsuario>
            )}
          </ContenedorModal>
        </Overlay>
      )}
    </>
  );
}
