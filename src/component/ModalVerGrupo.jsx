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
  Select,
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
import { MultiSelect } from "./DiseñoModalAñadirCurso";
import { ContainerCarga, ImagenCarga } from "./DiseñoPantallaPrincipal";
import { makeStyles } from "@material-ui/core/styles";

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
    cursor: "pointer",
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
export default function ModalVerGrupo({
  estado,
  cambiarEstado,
  datos,
  ocultar,
  sede,
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
  const classes = styles();
  var cantidad = 0;
  const [carga, setCarga] = useState(null);
  useEffect(() => {
    if (estado) {
      setCarga(true);
      axios
        .get(url + "obtenerGrupo/" + datos.CODCURSO + "/" + sede)
        .then((resp) => {
          setCarga(false);
          setListaGrupos(resp.data);
          setActualizo(false);
        });
    }
  }, [actualizo, datos]);

  const agregarGrupo = () => {
    var fechaActual = new Date();
    var añoActual = fechaActual.getFullYear();
    var codigoGrupo = añoActual + grupo.campo.replace(/\s/g, "");
    const grupoNuevo = {
      CODSEDE: sede,
      CODCURSO: datos.CODCURSO,
      LIMITE: parseInt(cantidadGrupo.campo),
      NOMBREGRUPO: grupo.campo,
      CODGRUPO: codigoGrupo.toUpperCase(),
      PRECIO: parseFloat(precio.campo),
      HORA: hora.campo,
      DIAS: diaSelec,
    };
    axios.post(url + "agregarGrupo", grupoNuevo).then((response) => {
      setAñadirGrupo("false");
      setGrupo("");
      setPrecio("");
      setHora("");
      setCantidadGrupo("");
      setActualizo(true);
    });
  };
  const [precio, setPrecio] = useState({ campo: "", valido: null });
  const [diaSelec, setDiaSelec] = useState([]);
  const [hora, setHora] = useState("");
  const horas = [
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ];
  return (
    <>
      {estado && (
        <Overlay>
          <ContenedorModal añadir={añadirGrupo}>
            <EncabezadoModal>
              <Titulo>{"MATERIA DE " + datos.CURSO.toUpperCase()}</Titulo>
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
            {carga && (
              <DetalleUsuario>
                <ContainerCarga>
                  <ImagenCarga src={require("../Imagenes/Carga.gif")} />
                </ContainerCarga>
              </DetalleUsuario>
            )}
            {!carga && (
              <>
                {añadirGrupo === "false" && (
                  <DetalleUsuario>
                    <ContainerTabla>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell className={classes.celdas} >Nº</TableCell>
                            <TableCell className={classes.celdas}>Curso</TableCell>
                            <TableCell className={classes.celdas}>Precio</TableCell>
                            <TableCell className={classes.celdas}>Sede</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {listaGrupos.map((grupo) => {
                            return (
                              <TableRow className={classes.fila}>
                                <TableCell className={classes.texto}>
                                  {(cantidad = cantidad + 1)}
                                </TableCell>
                                <TableCell className={classes.texto}>{grupo.NOMBREGRUPO}</TableCell>
                                <TableCell align="center">
                                  {grupo.PRECIO}
                                </TableCell >
                                <TableCell className={classes.texto}>{grupo.CODSEDE}</TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </ContainerTabla>
                    <BotonAñadir title="Agregar grupo"
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
                      estado={precio}
                      cambiarEstado={setPrecio}
                      tipo="number"
                      label="Precio:"
                      placeholder="Precio"
                      name="precio"
                      expresionRegular={expresiones.numero}
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
                    <BoxCampo campo={"true"}>
                      <TextBox>Dias:</TextBox>
                      <MultiSelect
                        options={[
                          "Lunes",
                          "Martes",
                          "Miercoles",
                          "Jueves",
                          "Viernes",
                        ]}
                        isObject={false}
                        placeholder="Seleccionar dias"
                        onRemove={(event) => {
                          setDiaSelec(event);
                        }}
                        onSelect={(event) => {
                          setDiaSelec(event);
                        }}
                      />
                    </BoxCampo>
                    <BoxCampo campo={"true"}>
                      <TextBox>Hora</TextBox>
                      <Select
                        value={hora.campo}
                        valido={hora.valido}
                        onChange={(e) => {
                          setHora({ ...hora, campo: e.target.value });
                        }}
                      >
                        <option value="">Seleccione Hora</option>
                        {horas.map((hor) => {
                          return <option value={hor}>{hor}</option>;
                        })}
                      </Select>
                    </BoxCampo>
                    <BoxCampo boton={"true"}>
                      <BotonGrupo onClick={agregarGrupo}>Añadir</BotonGrupo>
                    </BoxCampo>
                  </DetalleUsuario>
                )}
              </>
            )}
          </ContenedorModal>
        </Overlay>
      )}
    </>
  );
}
/*<TableCell>
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
                                              CODGRUPO: grupo.CODGRUPO,
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
                                </TableCell>{" "} */