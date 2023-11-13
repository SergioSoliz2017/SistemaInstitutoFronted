import {
  faAdd,
  faMoneyBill,
  faPercent,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {
  BotonBuscar,
  BotonCerrar,
  BotonSiguiente,
  BoxCampo,
  ContainerBoton,
  ContainerBotonBusqueda,
  ContainerCurso,
  ContainerImgIcon,
  ContainerTabla,
  ContenedorModal,
  DetalleUsuario,
  EncabezadoModal,
  IconoDescuento,
  ImgIcon,
  InputBox,
  Overlay,
  Select,
  TextBox,
  TextPrecio,
  Titulo,
} from "./DiseñoModalAgregarEstudiante";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { url } from "./VariableEntornos";
import SelectCurso from "./SelectCurso";
import SelectGrupo from "./SelectGrupo";
import toast, { Toaster } from "react-hot-toast";
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
export default function ModalAgregarEstudiante({
  estado,
  cambiarEstado,
  ocultar,
  datos,
  sede,
}) {
  const classes = styles();
  const [listaTutores, setListaTutores] = useState([]);
  const [relacion, setRelacion] = useState("");
  const [tutor, setTutor] = useState("");
  let tutorDatos = [];
  const listaRelacion = [
    "Padre",
    "Madre",
    "Tio",
    "Tia",
    "Abuelo",
    "Abuela",
    "Tutor legal",
    "No tiene",
  ];
  const [paso, setPaso] = useState(1);
  useEffect(() => {
    if (paso === 1) {
      axios
        .get(url + "obtenerTutores/" + datos.CODESTUDIANTE)
        .then((response) => {
          setListaTutores(response.data);
        });
    }
    if (paso === 2) {
      axios.get(url + "obtenerCursos").then((response) => {
        setListaCursos(response.data);
      });
    }
  }, [estado, paso]);
  const [cursoRegistrados, setCursoRegistrados] = useState({
    campo: "",
    valido: null,
  });
  const [listaCursos, setListaCursos] = useState([]);
  const [grupo, setGrupo] = useState({ campo: "", valido: null });
  const [precioConDescuento, setPrecioConDescuento] = useState(null);
  const [descuento, setDescuento] = useState("");
  const [precio, setPrecio] = useState("");
  const [montoPagado, setMontoPagado] = useState("");
  const [saldoTotal, setSaldoTotal] = useState(0);
  const [cantidadCursos, setCantidadCursos] = useState(0);
  const [listaCursosRes, setListaCursosRes] = useState([]);
  const [horarios, setHorarios] = useState([]);

  const handleDescuentoChange = (valor, porcentaje, cantidad) => {
    setDescuento(valor);
    setPrecio(
      listaCursos.find((curso) => curso.CODCURSO === cursoRegistrados.campo)
        ?.PRECIO
    );
    if (!isNaN(valor) && valor !== "" && valor >= 0) {
      const descuentoNumerico = parseFloat(valor);
      const precioOriginal = listaCursos.find(
        (curso) => curso.CODCURSO === cursoRegistrados.campo
      )?.PRECIO;
      if (porcentaje) {
        const nuevoPrecioConDescuento =
          precioOriginal - (precioOriginal * descuentoNumerico) / 100;
        setPrecioConDescuento(nuevoPrecioConDescuento);
      } else {
        const nuevoPrecioConDescuento = precioOriginal - descuentoNumerico;
        setPrecioConDescuento(nuevoPrecioConDescuento);
      }
    } else {
      setPrecioConDescuento(null);
    }
  };
  const [esPorcentaje, setEsPorcentaje] = useState(true);
  const diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
  const cursosPorHora = {
    "12:00": [],
    "13:00": [],
    "14:00": [],
    "15:00": [],
    "16:00": [],
    "17:00": [],
    "18:00": [],
  };
  horarios.forEach((horario) => {
    const hora = horario.HORA.split(":").slice(0, 2).join(":");
    if (!cursosPorHora.hasOwnProperty(hora)) {
      cursosPorHora[hora] = [];
    }
    const cursosEnHoraYDia = cursosPorHora[hora].filter(
      (c) => c.dia === horario.DIA
    );
    if (cursosEnHoraYDia.length > 0) {
      const cursoExistente = cursosEnHoraYDia.find(
        (c) => c.curso === horario.CURSO && c.grupo === horario.GRUPO
      );
      if (cursoExistente) {
        cursoExistente.grupo = horario.GRUPO;
      } else {
        cursosPorHora[hora].push({
          dia: horario.DIA,
          curso: horario.CURSO,
          grupo: horario.GRUPO,
        });
      }
    } else {
      cursosPorHora[hora].push({
        dia: horario.DIA,
        curso: horario.CURSO,
        grupo: horario.GRUPO,
      });
    }
  });
  const filas = Object.entries(cursosPorHora).map(([hora, cursos]) => (
    <TableRow key={hora}>
      <TableCell className={classes.texto}>{hora.slice(0, 5)}</TableCell>
      {diasSemana.map((dia) => (
        <TableCell className={classes.texto} key={dia}>
          {cursos
            .filter((curso) => curso.dia === dia)
            .map((curso, index) => (
              <ContainerCurso
                onClick={() => {
                  console.log(listaCursosRes.length);
                  const nuevoHorario = horarios.filter((horario) => {
                    return (
                      horario.CURSO !== curso.curso ||
                      horario.GRUPO !== curso.grupo
                    );
                  });
                  setHorarios(nuevoHorario);
                  const cursoEncontrado = listaCursosRes.find((curs) => {
                    return (
                      curs.NOMBRECURSO === curso.curso &&
                      curs.GRUPOCURSO === curso.grupo
                    );
                  });
                  const nuevaLista = listaCursosRes.filter((curs) => {
                    return !(
                      curs.NOMBRECURSO === curso.curso &&
                      curs.GRUPOCURSO === curso.grupo
                    );
                  });
                  const nuevoSaldo = cursoEncontrado
                    ? cursoEncontrado.SALDO
                    : null;
                  setSaldoTotal(saldoTotal - nuevoSaldo);
                  setListaCursosRes((prev) => {
                    return nuevaLista;
                  });
                  setCantidadCursos((prevCantidad) => prevCantidad - 1);
                }}
                key={index}
              >
                {curso.curso} {curso.grupo}
              </ContainerCurso>
            ))}
        </TableCell>
      ))}
    </TableRow>
  ));
  return (
    <>
      {estado && (
        <Overlay>
          <ContenedorModal paso={paso === 2 ? "true" : "false"}>
            <EncabezadoModal>
              <Titulo>{datos.CODESTUDIANTE}</Titulo>
            </EncabezadoModal>
            <BotonCerrar
              onClick={() => {
                cambiarEstado(false);
                ocultar("false");
                setTutor("");
                setPaso(1);
                setListaCursosRes([]);
                setHorarios([]);
              }}
            >
              <FontAwesomeIcon icon={faXmark} />
            </BotonCerrar>
            <DetalleUsuario>
              {paso === 1 && (
                <>
                  <ContainerBoton>
                    <BoxCampo>
                      <TextBox>Tutores</TextBox>
                      <Select
                        value={tutor}
                        onChange={(e) => {
                          const selectedTutor = listaTutores.find(
                            (t) => t.CODTUTOR === e.target.value
                          );
                          setTutor(e.target.value);
                          tutorDatos(selectedTutor); // Almacena todos los datos del tutor seleccionado
                        }}
                      >
                        <option value="">Seleccione tutor</option>
                        {listaTutores.map((tutor) => (
                          <option key={tutor.CODTUTOR} value={tutor.CODTUTOR}>
                            {tutor.NOMBRETUTOR} {tutor.APELLIDOTUTOR}
                          </option>
                        ))}
                      </Select>
                    </BoxCampo>
                    <BoxCampo>
                      <TextBox>Relacion</TextBox>
                      <Select
                        value={relacion}
                        onChange={(e) => {
                          setRelacion(e.target.value);
                        }}
                      >
                        <option value="">Seleccione relacion</option>
                        {listaRelacion.map((datos) => {
                          return <option value={datos}>{datos}</option>;
                        })}
                      </Select>
                    </BoxCampo>
                  </ContainerBoton>
                  <ContainerBoton>
                    <BotonSiguiente
                      onClick={() => {
                        setPaso(2);
                      }}
                    >
                      Siguiente
                    </BotonSiguiente>
                  </ContainerBoton>
                </>
              )}
              {paso === 2 && (
                <>
                  <SelectCurso
                    estado={cursoRegistrados}
                    cambiarEstado={setCursoRegistrados}
                    label="Cursos:"
                    name="cursos"
                    dato={listaCursos}
                  />
                  <SelectGrupo
                    estado={grupo}
                    cambiarEstado={setGrupo}
                    label="Grupos:"
                    name="grupos"
                    dato={cursoRegistrados.campo}
                  />
                  <BoxCampo precio={"true"} precioT={"true"}>
                    <TextBox>Precio:</TextBox>
                    <TextPrecio>
                      {precioConDescuento !== null
                        ? precioConDescuento
                        : listaCursos.find(
                            (curso) => curso.CODCURSO === cursoRegistrados.campo
                          )?.PRECIO}{" "}
                      {" Bs."}
                    </TextPrecio>
                  </BoxCampo>
                  <BoxCampo precio={"true"}>
                    <TextBox>
                      Descuento:{" "}
                      <ContainerImgIcon precio={"true"}>
                        <IconoDescuento
                          onClick={() => {
                            handleDescuentoChange(descuento, !esPorcentaje);
                            setEsPorcentaje(!esPorcentaje);
                          }}
                          icon={esPorcentaje ? faPercent : faMoneyBill}
                        />
                      </ContainerImgIcon>
                    </TextBox>
                    <InputBox
                      type="number"
                      placeholder="Descuento"
                      value={descuento}
                      onChange={(e) =>
                        handleDescuentoChange(e.target.value, esPorcentaje)
                      }
                    />
                  </BoxCampo>
                  <BoxCampo precio={"true"}>
                    <TextBox>Pago:</TextBox>
                    <InputBox
                      type="number"
                      placeholder="Monto"
                      value={montoPagado}
                      onChange={(e) => {
                        setMontoPagado(e.target.value);
                      }}
                    />
                  </BoxCampo>
                  <BoxCampo saldo={"true"}>
                    <TextBox saldo={"true"}>
                      Cantidad cursos: {cantidadCursos}
                    </TextBox>
                    <TextBox saldo={"true"}>
                      Saldo :{" "}
                      {precioConDescuento !== null
                        ? isNaN(precioConDescuento - montoPagado)
                          ? "0"
                          : precioConDescuento - montoPagado
                        : isNaN(
                            listaCursos.find(
                              (curso) =>
                                curso.CODCURSO === cursoRegistrados.campo
                            )?.PRECIO - montoPagado
                          )
                        ? "0"
                        : listaCursos.find(
                            (curso) => curso.CODCURSO === cursoRegistrados.campo
                          )?.PRECIO - montoPagado}
                    </TextBox>
                    <TextBox saldo={"true"}>Saldo total: {saldoTotal}</TextBox>
                  </BoxCampo>
                  <BoxCampo boton={"true"}>
                    <ContainerBotonBusqueda add={"true"}>
                      <BotonBuscar
                        onClick={() => {
                          if (
                            cursoRegistrados.campo !== "" &&
                            grupo.campo !== ""
                          ) {
                            var cursoTemp = {
                              NOMBRECURSO: cursoRegistrados.texto,
                              GRUPOCURSO: grupo.campo,
                              CODCURSO: cursoRegistrados.campo,
                              SEDE: sede,
                              SALDO:
                                precioConDescuento !== null
                                  ? precioConDescuento - montoPagado
                                  : listaCursos.find(
                                      (curso) =>
                                        curso.CODCURSO ===
                                        cursoRegistrados.campo
                                    )?.PRECIO - montoPagado,
                              PRECIO:
                                precioConDescuento !== null
                                  ? precioConDescuento
                                  : listaCursos.find(
                                      (curso) =>
                                        curso.CODCURSO ===
                                        cursoRegistrados.campo
                                    )?.PRECIO,
                            };
                            setListaCursosRes((prevLista) => [
                              ...prevLista,
                              cursoTemp,
                            ]);
                            const updatedLista = [...listaCursosRes, cursoTemp];
                            setSaldoTotal(() => {
                              return updatedLista.reduce(
                                (total, curso) =>
                                  total + parseFloat(curso.SALDO),
                                0
                              );
                            });
                            axios
                              .get(url + "obtenerHorario")
                              .then((response) => {
                                setHorarios((prevHorarios) => [
                                  ...prevHorarios,
                                  ...response.data.filter(
                                    (item) =>
                                      item.CODSEDE === cursoTemp.SEDE &&
                                      item.GRUPO === cursoTemp.GRUPOCURSO &&
                                      item.CODCURSO === cursoTemp.CODCURSO
                                  ),
                                ]);
                                setCursoRegistrados({
                                  campo: "",
                                  valido: null,
                                });
                                setGrupo({ campo: "", valido: null });
                                setDescuento("");
                                setPrecioConDescuento(null);
                                setMontoPagado("");
                                setCantidadCursos(
                                  (prevCantidad) => prevCantidad + 1
                                );
                              });
                          } else {
                            toast(
                              cursoRegistrados.campo === ""
                                ? "Seleccionar curso"
                                : "Seleccionar grupo",
                              {
                                icon: "⚠️",
                                duration: 3000,
                                style: {
                                  border: "2px solid #000",
                                  padding: "10px",
                                  color: "#000",
                                  background: "#d6d6d6",
                                  borderRadius: "20px",
                                  fontFamily: "bold",
                                  fontWeight: "1000",
                                },
                              }
                            );
                          }
                        }}
                      >
                        <ImgIcon buscar={"true"} icon={faAdd} />
                      </BotonBuscar>
                    </ContainerBotonBusqueda>
                  </BoxCampo>
                  <ContainerTabla>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell className={classes.celdas}>Hora</TableCell>
                          {diasSemana.map((dia) => (
                            <TableCell
                              align="center"
                              className={classes.celdas}
                              key={dia}
                            >
                              {dia}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>{filas}</TableBody>
                    </Table>
                  </ContainerTabla>
                  <ContainerBoton botones={"true"}>
                    <BotonSiguiente
                      onClick={() => {
                        setPaso(1);
                      }}
                    >
                      Atras
                    </BotonSiguiente>
                    <BotonSiguiente
                      onClick={() => {
                        //aumentar cambio estado estudiante
                        //agregar relacion tabla pivote
                        //modificar registro saldo
                        const dataCurso = {
                          CODESTUDIANTE: datos.CODESTUDIANTE,
                          LISTACURSOS: listaCursosRes,
                        };
                        axios
                          .post(url + "agregarCursoInscrito", dataCurso)
                          .then((response) => {
                            cambiarEstado(false);
                            ocultar("false");
                            setTutor("");
                            setPaso(1);
                            setListaCursosRes([]);
                            setHorarios([]);
                          });
                      }}
                    >
                      Guardar
                    </BotonSiguiente>
                  </ContainerBoton>
                </>
              )}
            </DetalleUsuario>
          </ContenedorModal>
        </Overlay>
      )}
    </>
  );
}