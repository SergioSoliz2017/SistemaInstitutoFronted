import React, { useState } from "react";
import {
  BotonCerrar,
  BotonTutores,
  BoxCampo,
  ContainerBoton,
  ContenedorModal,
  DetalleUsuario,
  EncabezadoModal,
  Overlay,
  Texto,
  Titulo,
  TituloNombre,
  ContainerImgIcon,
  ImgIcon,
  ContainerTutores,
  ContainerVerTutores,
  TituloNombreEdit,
  ContainerTabla,
} from "./DiseñoModalInformacion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import alerta from "sweetalert2";
import {
  faPenToSquare,
  faSave,
  faToggleOff,
  faToggleOn,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { url } from "./VariableEntornos";
import axios from "axios";
import { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  makeStyles,
} from "@material-ui/core";
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

export default function ModalInformacion({
  estado,
  cambiarEstado,
  datos,
  ocultar,
  tipo,
  actualizo,
}) {
  function calcularEdad(fecha) {
    const fechaNacimiento = new Date(fecha);
    const fechaActual = new Date();
    const anioActual = fechaActual.getFullYear();
    const mesActual = fechaActual.getMonth();
    const diaActual = fechaActual.getDate();
    const anioNacimiento = fechaNacimiento.getFullYear();
    const mesNacimiento = fechaNacimiento.getMonth();
    const diaNacimiento = fechaNacimiento.getDate();

    let edad = anioActual - anioNacimiento;

    if (
      mesNacimiento > mesActual ||
      (mesNacimiento === mesActual && diaNacimiento > diaActual)
    ) {
      edad--;
    }

    return edad;
  }

  const [valor, setValor] = useState("");
  const [habilitado, setHabilitado] = useState();
  const [opcion, setOpcion] = useState(1);
  const [listaTutores, setListaTutores] = useState([]);
  const [listaEstudiantes, setListaEstudiantes] = useState([]);
  const [editarEstudiante, setEditarEstudiante] = useState(false);
  const [editarTutor, setEditarTutor] = useState(false);
  const [nombre, setNombre] = useState({
    campo: datos.NOMBREESTUDIANTE,
    valido: null,
  });
  const [apellido, setApellido] = useState({
    campo: datos.APELLIDOESTUDIANTE,
    valido: null,
  });
  const [colegio, setColegio] = useState({
    campo: datos.COLEGIO,
    valido: null,
  });
  const [direccion, setDireccion] = useState({
    campo: datos.DIRECCION,
    valido: null,
  });
  const [ciudad, setCiudad] = useState({
    campo: datos.CIUDAD,
    valido: null,
  });
  const [departamento, setDepartamento] = useState({
    campo: datos.DEPARTAMENTO,
    valido: null,
  });
  const [pais, setPais] = useState({
    campo: datos.PAIS,
    valido: null,
  });
  const [nombreTutor, setNombreTutor] = useState({
    campo: datos.NOMBRETUTOR,
    valido: null,
  });
  const [apellidoTutor, setApellidoTutor] = useState({
    campo: datos.APELLIDOTUTOR,
    valido: null,
  });
  const [celular, setCelular] = useState({
    campo: datos.CELULARTUTOR,
    valido: null,
  });
  const [fechaNacimientoEstudiante, setFechaNacimientoEstudiante] = useState({
    campo: datos.FECHANACIMIENTOESTUDIANTE,
    valido: null,
  });
  const borrar = () => {
    setNombre("");
    setApellido("");
    setColegio("");
    setDireccion("");
    setCiudad("");
    setDepartamento("");
    setPais("");
    setNombreTutor("");
    setCelular("");
    setFechaNacimientoEstudiante("");
    setFechaNacimientoTutor("");
  };

  useEffect(() => {
    setValor(datos.HABILITADO);
    setHabilitado(datos.HABILITADO === "Habilitado" ? faToggleOn : faToggleOff);
    if (tipo === "Estudiante") {
      if (editarEstudiante) {
        nombre.campo === undefined
          ? setNombre({
              campo: datos.NOMBREESTUDIANTE,
              valido: null,
            })
          : setNombre({
              campo: nombre.campo,
              valido: null,
            });
        apellido.campo === undefined
          ? setApellido({
              campo: datos.APELLIDOESTUDIANTE,
              valido: null,
            })
          : setApellido({
              campo: apellido.campo,
              valido: null,
            });
        colegio.campo === undefined
          ? setColegio({
              campo: datos.COLEGIO,
              valido: null,
            })
          : setColegio({
              campo: colegio.campo,
              valido: null,
            });
        direccion.campo === undefined
          ? setDireccion({
              campo: datos.DIRECCION,
              valido: null,
            })
          : setDireccion({
              campo: direccion.campo,
              valido: null,
            });
        ciudad.campo === undefined
          ? setCiudad({
              campo: datos.CIUDAD,
              valido: null,
            })
          : setCiudad({
              campo: ciudad.campo,
              valido: null,
            });
        departamento.campo === undefined
          ? setDepartamento({
              campo: datos.DEPARTAMENTO,
              valido: null,
            })
          : setDepartamento({
              campo: departamento.campo,
              valido: null,
            });
        pais.campo === undefined
          ? setPais({
              campo: datos.PAIS,
              valido: null,
            })
          : setPais({
              campo: pais.campo,
              valido: null,
            });
        fechaNacimientoEstudiante.campo === undefined
          ? setFechaNacimientoEstudiante({
              campo: datos.FECHANACIMIENTOESTUDIANTE,
              valido: null,
            })
          : setFechaNacimientoEstudiante({
              campo: fechaNacimientoEstudiante.campo,
              valido: null,
            });
      }
      axios
        .get(url + "obtenerTutores/" + datos.CODESTUDIANTE)
        .then((response) => {
          setListaTutores(response.data);
        });
    } else {
      if (tipo == "Tutor") {
        if (editarTutor) {
          nombreTutor.campo === undefined
            ? setNombreTutor({
                campo: datos.NOMBRETUTOR,
                valido: null,
              })
            : setNombreTutor({
                campo: nombreTutor.campo,
                valido: null,
              });
          apellidoTutor.campo === undefined
            ? setApellidoTutor({
                campo: datos.APELLIDOTUTOR,
                valido: null,
              })
            : setApellidoTutor({
                campo: apellidoTutor.campo,
                valido: null,
              });
          celular.campo === undefined
            ? setCelular({
                campo: datos.CELULARTUTOR,
                valido: null,
              })
            : setCelular({
                campo: celular.campo,
                valido: null,
              });
          fechaNacimientoTutor.campo === undefined
            ? setFechaNacimientoTutor({
                campo: datos.FECHANACIMIENTOTUTOR,
                valido: null,
              })
            : setFechaNacimientoTutor({
                campo: fechaNacimientoTutor.campo,
                valido: null,
              });
        }
        axios
          .get(url + "obtenerEstudiantes/" + datos.CODTUTOR)
          .then((response) => {
            setListaEstudiantes(response.data);
          });
      }
    }
  }, [datos, editarEstudiante, editarTutor]);
  const classes = styles();
  const guardarTutor = () => {
    const tutor = {
      NOMBRETUTOR: nombreTutor.campo,
      APELLIDOTUTOR: apellidoTutor.campo,
      CELULARTUTOR: celular.campo,
    };
    axios
      .put(url + "actualizarTutor/" + datos.CODTUTOR, tutor)
      .then((response) => {
        alerta.fire({
          title: "Cambio realizado",
          icon: "success",
          confirmButtonColor: "#000",
          background: "#d6d6d6",
          iconColor: "#000",
          color: "#000",
        });
      });
  };

  const guardarEstudiante = () => {
    const estudiante = {
      NOMBREESTUDIANTE: nombre.campo,
      APELLIDOESTUDIANTE: apellido.campo,
      DIRECCION: direccion.campo,
      COLEGIO: colegio.campo,
      PAIS: pais.campo,
      DEPARTAMENTO: departamento.campo,
      CIUDAD: ciudad.campo,
      FECHANACIMIENTOESTUDIANTE: fechaNacimientoEstudiante.campo,
    };
    axios
      .put(url + "actualizarEstudiante/" + datos.CODESTUDIANTE, estudiante)
      .then((response) => {
        alerta.fire({
          title: "Cambio realizado",
          icon: "success",
          confirmButtonColor: "#000",
          background: "#d6d6d6",
          iconColor: "#000",
          color: "#000",
        });
      });
  };
  const [fechaNacimientoTutor, setFechaNacimientoTutor] = useState({
    campo: datos.FECHANACIMIENTOTUTOR,
    valido: null,
  });
  return (
    <>
      {estado && (
        <Overlay>
          <ContenedorModal>
            <EncabezadoModal>
              <Titulo>
                {tipo === "Estudiante" ? datos.CODESTUDIANTE : datos.CODTUTOR}
              </Titulo>
            </EncabezadoModal>
            <BotonCerrar
              onClick={() => {
                cambiarEstado(false);
                ocultar("false");
                setEditarEstudiante(false);
                setEditarTutor(false);
                borrar();
                actualizo(true);
              }}
            >
              <FontAwesomeIcon icon={faXmark} />
            </BotonCerrar>
            <DetalleUsuario>
              {tipo === "Estudiante" && (
                <>
                  {!editarEstudiante && (
                    <>
                      <TituloNombre>
                        {nombre.campo === undefined
                          ? datos.NOMBREESTUDIANTE
                          : nombre.campo}{" "}
                        {apellido.campo === undefined
                          ? datos.APELLIDOESTUDIANTE
                          : apellido.campo}
                      </TituloNombre>
                      <ContainerImgIcon
                        onClick={() => {
                          setEditarEstudiante(true);
                        }}
                      >
                        <ImgIcon tabla={"true"} icon={faPenToSquare} />
                      </ContainerImgIcon>
                      <BoxCampo>
                        <Texto>Fecha de nacimiento:</Texto>
                        {fechaNacimientoEstudiante.campo === undefined
                          ? datos.FECHANACIMIENTOESTUDIANTE
                          : fechaNacimientoEstudiante.campo}{" "}
                      </BoxCampo>
                      <BoxCampo>
                        <Texto>Genero:</Texto>
                        {datos.GENEROESTUDIANTE}
                      </BoxCampo>
                      <BoxCampo>
                        <Texto>Colegio:</Texto>{" "}
                        {colegio.campo === undefined
                          ? datos.COLEGIO
                          : colegio.campo}
                      </BoxCampo>
                      <BoxCampo>
                        <Texto>Direccion:</Texto>
                        {direccion.campo === undefined
                          ? datos.DIRECCION
                          : direccion.campo}
                        {" - "}
                        {ciudad.campo === undefined
                          ? datos.CIUDAD
                          : ciudad.campo}
                        {" - "}
                        {departamento.campo === undefined
                          ? datos.DEPARTAMENTO
                          : departamento.campo}
                        {" - "}
                        {pais.campo === undefined ? datos.PAIS : pais.campo}
                      </BoxCampo>
                      <ContainerImgIcon habilitar={"true"}>
                        <ImgIcon
                          habilitar={"true"}
                          icon={habilitado}
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
                                      valor === "Habilitado"
                                        ? "Deshabilitado"
                                        : "Habilitado",
                                  };
                                  setHabilitado(
                                    cambiar.HABILITADO === "Habilitado"
                                      ? faToggleOn
                                      : faToggleOff
                                  );
                                  setValor(cambiar.HABILITADO);
                                  axios
                                    .put(
                                      url +
                                        "actualizarEstadoEstudiante/" +
                                        datos.CODESTUDIANTE,
                                      cambiar
                                    )
                                    .then((response) => {
                                      actualizo(true);
                                    });
                                }
                              });
                          }}
                        />
                      </ContainerImgIcon>
                    </>
                  )}
                  {editarEstudiante && (
                    <>
                      <ContainerImgIcon
                        onClick={() => {
                          setEditarEstudiante(false);
                          guardarEstudiante();
                        }}
                      >
                        <ImgIcon tabla={"true"} icon={faSave} />
                      </ContainerImgIcon>
                      <BoxCampo editar={"true"}>
                        <Texto sub={"true"}>Nombre completo:</Texto>
                        <TituloNombreEdit
                          value={nombre.campo}
                          placeholder="Nombre"
                          onChange={(e) => {
                            setNombre({ ...nombre, campo: e.target.value });
                          }}
                        />
                        <TituloNombreEdit
                          value={apellido.campo}
                          placeholder="Apellido"
                          onChange={(e) => {
                            setApellido({ ...apellido, campo: e.target.value });
                          }}
                        />
                      </BoxCampo>
                      <BoxCampo editar={"true"}>
                        <Texto sub={"false"}>Fecha nacimiento:</Texto>
                        <TituloNombreEdit
                          value={fechaNacimientoEstudiante.campo}
                          type="date"
                          placeholder="FechaNacimiento"
                          onChange={(e) => {
                            setFechaNacimientoEstudiante({
                              ...fechaNacimientoEstudiante,
                              campo: e.target.value,
                            });
                          }}
                        />
                      </BoxCampo>
                      <BoxCampo editar={"true"}>
                        <Texto sub={"false"}>Colegio:</Texto>
                        <TituloNombreEdit
                          value={colegio.campo}
                          placeholder="Colegio"
                          onChange={(e) => {
                            setColegio({ ...colegio, campo: e.target.value });
                          }}
                        />
                      </BoxCampo>
                      <BoxCampo editar={"true"}>
                        <Texto sub={"true"}>Direccion:</Texto>
                        <TituloNombreEdit
                          value={direccion.campo}
                          placeholder="Direccion"
                          onChange={(e) => {
                            setDireccion({
                              ...direccion,
                              campo: e.target.value,
                            });
                          }}
                        />
                        <TituloNombreEdit
                          value={ciudad.campo}
                          placeholder="Ciudad"
                          onChange={(e) => {
                            setCiudad({ ...ciudad, campo: e.target.value });
                          }}
                        />
                      </BoxCampo>
                      <BoxCampo editar={"true"}>
                        <Texto sub={"true"}></Texto>
                        <TituloNombreEdit
                          value={departamento.campo}
                          placeholder="Departamento"
                          onChange={(e) => {
                            setDepartamento({
                              ...departamento,
                              campo: e.target.value,
                            });
                          }}
                        />
                        <TituloNombreEdit
                          value={pais.campo}
                          placeholder="Pais"
                          onChange={(e) => {
                            setPais({ ...pais, campo: e.target.value });
                          }}
                        />
                      </BoxCampo>
                    </>
                  )}
                  <ContainerTutores>
                    <ContainerBoton>
                      <BotonTutores
                        seleccionado={opcion == 1 ? "true" : "false"}
                        onClick={() => {
                          setOpcion(1);
                        }}
                      >
                        Tutores
                      </BotonTutores>
                      <BotonTutores
                        segundo={"true"}
                        seleccionado={opcion == 2 ? "true" : "false"}
                        onClick={() => {
                          setOpcion(2);
                        }}
                      >
                        Horario
                      </BotonTutores>
                    </ContainerBoton>
                    {opcion === 1 && (
                      <ContainerVerTutores>
                        <ContainerTabla>
                          <Table>
                            <TableHead>
                              <TableRow>
                                <TableCell className={classes.celdas}>
                                  Nombre
                                </TableCell>
                                <TableCell className={classes.celdas}>
                                  Relacion
                                </TableCell>
                                <TableCell className={classes.celdas}>
                                  Celular
                                </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {listaTutores.map((tutor) => {
                                return (
                                  <>
                                    <TableRow className={classes.fila}>
                                      <TableCell className={classes.texto}>
                                        {tutor.NOMBRETUTOR +
                                          " " +
                                          tutor.APELLIDOTUTOR}{" "}
                                      </TableCell>
                                      <TableCell className={classes.texto}>
                                        {tutor.RELACION}{" "}
                                      </TableCell>
                                      <TableCell className={classes.texto}>
                                        {tutor.CELULARTUTOR}
                                      </TableCell>
                                    </TableRow>
                                  </>
                                );
                              })}
                            </TableBody>
                          </Table>
                        </ContainerTabla>
                      </ContainerVerTutores>
                    )}
                  </ContainerTutores>
                </>
              )}
              {tipo === "Tutor" && (
                <>
                  {!editarTutor && (
                    <>
                      <TituloNombre>
                        {nombreTutor.campo === undefined
                          ? datos.NOMBRETUTOR
                          : nombreTutor.campo}{" "}
                        {apellidoTutor.campo === undefined
                          ? datos.APELLIDOTUTOR
                          : apellidoTutor.campo}
                      </TituloNombre>
                      <ContainerImgIcon
                        onClick={() => {
                          setEditarTutor(true);
                        }}
                      >
                        <ImgIcon tabla={"true"} icon={faPenToSquare} />
                      </ContainerImgIcon>
                      <BoxCampo>
                        <Texto>Fecha de nacimiento:</Texto>
                        {fechaNacimientoTutor.campo === undefined
                          ? datos.FECHANACIMIENTOTUTOR
                          : fechaNacimientoTutor.campo}
                      </BoxCampo>
                      <BoxCampo>
                        <Texto>Genero:</Texto>
                        {datos.GENEROTUTOR}
                      </BoxCampo>
                      <BoxCampo>
                        <Texto>Celular:</Texto>{" "}
                        {celular.campo === undefined
                          ? datos.CELULARTUTOR
                          : celular.campo}
                      </BoxCampo>
                      <ContainerImgIcon habilitar={"true"}>
                        <ImgIcon
                          habilitar={"true"}
                          icon={habilitado}
                          onClick={() => {}}
                        />
                      </ContainerImgIcon>
                    </>
                  )}
                  {editarTutor && (
                    <>
                      <ContainerImgIcon
                        onClick={() => {
                          setEditarTutor(false);
                          guardarTutor();
                        }}
                      >
                        <ImgIcon tabla={"true"} icon={faSave} />
                      </ContainerImgIcon>
                      <BoxCampo editar={"true"}>
                        <Texto sub={"true"}>Nombre completo:</Texto>
                        <TituloNombreEdit
                          value={nombreTutor.campo}
                          placeholder="Nombre"
                          onChange={(e) => {
                            setNombreTutor({
                              ...nombreTutor,
                              campo: e.target.value,
                            });
                          }}
                        />
                        <TituloNombreEdit
                          value={apellidoTutor.campo}
                          placeholder="Apellido"
                          onChange={(e) => {
                            setApellidoTutor({
                              ...apellidoTutor,
                              campo: e.target.value,
                            });
                          }}
                        />
                      </BoxCampo>
                      <BoxCampo editar={"true"}>
                        <Texto sub={"false"}>Fecha nacimiento:</Texto>
                        <TituloNombreEdit
                          value={fechaNacimientoTutor.campo}
                          type="date"
                          placeholder="FechaNacimiento"
                          onChange={(e) => {
                            setFechaNacimientoTutor({
                              ...fechaNacimientoTutor,
                              campo: e.target.value,
                            });
                          }}
                        />
                      </BoxCampo>
                      <BoxCampo editar={"true"}>
                        <Texto sub={"false"}>Celular:</Texto>
                        <TituloNombreEdit
                          value={celular.campo}
                          placeholder="Colegio"
                          onChange={(e) => {
                            setCelular({ ...celular, campo: e.target.value });
                          }}
                        />
                      </BoxCampo>
                    </>
                  )}
                  <ContainerTutores>
                    <ContainerBoton>
                      <BotonTutores
                        seleccionado={opcion == 1 ? "true" : "false"}
                        onClick={() => {
                          setOpcion(1);
                        }}
                      >
                        Estudiantes
                      </BotonTutores>
                    </ContainerBoton>
                    {opcion === 1 && (
                      <ContainerVerTutores>
                        <ContainerTabla>
                          <Table>
                            <TableHead>
                              <TableRow>
                                <TableCell className={classes.celdas}>
                                  Nombre
                                </TableCell>
                                <TableCell className={classes.celdas}>
                                  Fecha nacimiento
                                </TableCell>
                                <TableCell className={classes.celdas}>
                                  Estado
                                </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {listaEstudiantes.map((estudiante) => {
                                return (
                                  <>
                                    <TableRow className={classes.fila}>
                                      <TableCell className={classes.texto}>
                                        {estudiante.NOMBREESTUDIANTE +
                                          " " +
                                          estudiante.APELLIDOESTUDIANTE}{" "}
                                      </TableCell>
                                      <TableCell className={classes.texto}>
                                        {estudiante.FECHANACIMIENTOESTUDIANTE}
                                      </TableCell>
                                      <TableCell className={classes.texto}>
                                        {estudiante.HABILITADO}
                                      </TableCell>
                                    </TableRow>
                                  </>
                                );
                              })}
                            </TableBody>
                          </Table>
                        </ContainerTabla>
                      </ContainerVerTutores>
                    )}
                  </ContainerTutores>
                </>
              )}
            </DetalleUsuario>
          </ContenedorModal>
        </Overlay>
      )}
    </>
  );
}
/*<ContainerBoton>
                <BotonTutores
                  onClick={() => {
                    setOcultarModal("true");
                    setModalVerMas(true);
                  }}
                >
                  {tipo === "Estudiante" ? "Ver tutores" : "Ver Estudiantes"}
                </BotonTutores>
              </ContainerBoton>*/
