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
   
    color: "#000",
  },
  fila: {
    borderBottom: "2px solid white",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#D6E6F2",
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
  trabajador
}) {
  const classes = styles();
  const [listaTutores, setListaTutores] = useState([]);
  const [tutor, setTutor] = useState("");
  let tutorDatos = [];
  const [paso, setPaso] = useState(1);
  useEffect(() => {
    if (paso === 1 && estado) {
      axios
        .get(url + "obtenerTutoresEstudiante/" + datos.CODESTUDIANTE)
        .then((response) => {
          setListaTutores(response.data);
        });
    }
    if (paso === 2 && estado) {
      axios.get(url + "obtenerCursos/" + sede).then((response) => {
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
  const [descuento, setDescuento] = useState("");
  const [precio, setPrecio] = useState("");
  const [montoPagado, setMontoPagado] = useState("");
  const [saldoTotal, setSaldoTotal] = useState(0);
  const [cantidadCursos, setCantidadCursos] = useState(0);
  const [listaCursosRes, setListaCursosRes] = useState([]);
  const [horarios, setHorarios] = useState([]);

  const [precioConDescuento, setPrecioConDescuento] = useState(null);
  const handleDescuentoChange = (valor, porcentaje, cantidad) => {
    setDescuento(valor);
    if (!isNaN(valor) && valor !== "" && valor >= 0) {
      const descuentoNumerico = parseFloat(valor);
      const precioOriginal = grupo.precio;
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
    "06:00": [],
    "07:00": [],
    "08:00": [],
    "09:00": [],
    "10:00": [],
    "11:00": [],
    "12:00": [],
    "13:00": [],
    "14:00": [],
    "15:00": [],
    "16:00": [],
    "17:00": [],
    "18:00": [],
    "19:00": [],
    "20:00": [],
    "21:00": [],
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
        (c) => c.curso === horario.CODCURSO && c.grupo === horario.NOMBREGRUPO
      );

      if (cursoExistente) {
        // El curso ya existe, podrías manejar esta situación si es necesario
        // Por ejemplo, mostrar un mensaje de error o no realizar ninguna acción.
      } else {
        // El curso no existe, lo agregamos a la lista.
        cursosPorHora[hora].push({
          dia: horario.DIA,
          curso: horario.CODCURSO,
          nCurso: horario.CURSO,
          grupo: horario.NOMBREGRUPO,
        });
      }
    } else {
      // No hay cursos en esta hora y día, simplemente agregamos el nuevo curso.
      cursosPorHora[hora].push({
        dia: horario.DIA,
        curso: horario.CODCURSO,
        nCurso: horario.CURSO,
        grupo: horario.NOMBREGRUPO,
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
                  const nuevoHorario = horarios.filter(
                    (horario) =>
                      horario.CODCURSO !== curso.curso ||
                      horario.NOMBREGRUPO !== curso.grupo
                  );
                  const cursoNoExistente = nuevoHorario.every(
                    (horario) =>
                      horario.CODCURSO !== curso.curso ||
                      horario.NOMBREGRUPO !== curso.grupo
                  );
                  if (cursoNoExistente) {
                    setHorarios(nuevoHorario);
                    setListaCursosRes((prev) =>
                      prev.filter(
                        (curs) =>
                          !(
                            curs.CODCURSO === curso.curso &&
                            curs.NOMBREGRUPO === curso.grupo
                          )
                      )
                    );
                  } else {
                  }
                }}
                key={index}
              >
                {curso.grupo}
              </ContainerCurso>
            ))}
        </TableCell>
      ))}
    </TableRow>
  ));
  const [diasHabiles, setDiasHabiles] = useState(22);
  function calcularDiasPagados(monto, precioDia) {
    var dias = monto / precioDia;
    return isNaN(dias) ? 0 : Math.ceil(dias);
  }

  function generarCodInscripcion() {
    var codigo = "";
    var subNombre = datos.NOMBREESTUDIANTE.substring(0, 3);
    var subApellido = datos.APELLIDOESTUDIANTE.substring(0, 3);
    var año = new Date().getFullYear();
    const dia = new Date().getDate();
    const mes = new Date().getMonth() + 1;
    codigo = año + "" + mes + "" + dia + "" + subNombre + subApellido;
    return codigo.toUpperCase();
  }
  function sumar() {
    const suma = listaCursosRes.reduce(
      (total, curso) => total + parseFloat(curso.MONTOPAGADO),
      0
    );
    return suma;
  }
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
                setCursoRegistrados({
                  campo: "",
                  valido: null,
                });
                setGrupo({
                  campo: "",
                  valido: null,
                });
                setDescuento("");
                setPrecioConDescuento(null);
                setMontoPagado("");
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
                          //tutorDatos(selectedTutor); // Almacena todos los datos del tutor seleccionado
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
                    sede={sede}
                  />
                  <BoxCampo precio={"true"} precioT={"true"}>
                    <TextBox>Precio:</TextBox>
                    <TextPrecio>
                      {precioConDescuento !== null
                        ? precioConDescuento
                        : grupo.precio}{" "}
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
                      Cantidad dias: {diasHabiles}
                    </TextBox>
                    <TextBox id="diasPagados" saldo={"true"}>
                      Dia pagados:{" "}
                      {precioConDescuento !== null
                        ? calcularDiasPagados(
                            montoPagado,
                            parseFloat(precioConDescuento) / diasHabiles
                          )
                        : calcularDiasPagados(
                            montoPagado,
                            parseFloat(grupo.precio) / diasHabiles
                          )}
                    </TextBox>
                  </BoxCampo>
                  <BoxCampo boton={"true"}>
                    <ContainerBotonBusqueda add={"true"}>
                      <BotonBuscar
                        onClick={() => {
                          if (
                            cursoRegistrados.campo !== "" &&
                            grupo.campo !== "" &&
                            montoPagado !== ""
                          ) {
                            var cursoTemp = {
                              CODCURSO: cursoRegistrados.campo,
                              CURSOINSCRITO:
                                cursoRegistrados.texto,
                              CODGRUPO: grupo.campo,
                              NOMBREGRUPO: grupo.texto,
                              MONTOPAGADO: montoPagado,
                              DIAPAGADO:
                                precioConDescuento !== null
                                  ? calcularDiasPagados(
                                      montoPagado,
                                      parseFloat(
                                        precioConDescuento
                                      ) / diasHabiles
                                    )
                                  : calcularDiasPagados(
                                      montoPagado,
                                      parseFloat(grupo.precio) /
                                        diasHabiles
                                    ),
                            };
                            // Verificamos si ya existe un curso con las mismas propiedades en listaCursosRes
                            const cursoExistente =
                              listaCursosRes.find(
                                (curs) =>
                                  curs.CODCURSO ===
                                    cursoTemp.CODCURSO &&
                                  curs.NOMBREGRUPO ===
                                    cursoTemp.NOMBREGRUPO
                              );
                            if (!cursoExistente) {
                              // El curso no existe, lo agregamos a la lista.
                              setListaCursosRes((prevLista) => [
                                ...prevLista,
                                cursoTemp,
                              ]);
                              const horarioN = {
                                CODCURSO:
                                  cursoRegistrados.campo,
                                CODSEDE: sede,
                                CODGRUPO: grupo.campo,
                              };
                              axios
                                .post(
                                  url + "obtenerHorario",
                                  horarioN
                                )
                                .then((response) => {
                                  setHorarios(
                                    (prevHorarios) => [
                                      ...prevHorarios,
                                      ...response.data,
                                    ]
                                  );
                                  setCursoRegistrados({
                                    campo: "",
                                    valido: null,
                                  });
                                  setGrupo({
                                    campo: "",
                                    valido: null,
                                  });
                                  setDescuento("");
                                  setPrecioConDescuento(null);
                                  setMontoPagado("");
                                });
                            } else {
                              toast("Curso ya agregado", {
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
                              });
                            }
                          } else {
                            toast(
                              cursoRegistrados.campo === ""
                                ? "Seleccionar curso"
                                : grupo.campo === ""
                                ? "Seleccionar grupo"
                                : "Ingresar Monto",
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
                        const hoy = new Date().toLocaleDateString();
                        const hoy1 = new Date().toISOString();
                        const estudiante = {
                          CODESTUDIANTE: datos.CODESTUDIANTE,
                          CODINSCRIPCION: generarCodInscripcion(),
                          CODTRABAJADOR:trabajador,
                          FECHAINSCRIPCION:hoy,
                          COSTOINSCRIPCION: sumar(),
                          SEDE:sede,
                          HABILITADO:"Habilitado"
                        }
                        const dataCurso = {
                          CODESTUDIANTE: datos.CODESTUDIANTE,
                          LISTACURSOS: listaCursosRes,
                          SEDE: sede,
                          FECHA: hoy1,
                        };
                        axios.post (url + "agregarRegistro",estudiante).then(res => {
                          axios
                            .post(url + "agregarCursoInscrito", dataCurso)
                            .then((response) => {
                              cambiarEstado(false);
                              ocultar("false");
                              setTutor("");
                              setPaso(1);
                              setListaCursosRes([]);
                              setHorarios([]);
                              setCursoRegistrados({
                                campo: "",
                                valido: null,
                              });
                              setGrupo({
                                campo: "",
                                valido: null,
                              });
                              setDescuento("");
                              setPrecioConDescuento(null);
                              setMontoPagado("");
                            });
                        })
                        
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
/*<BoxCampo>
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
                    </BoxCampo> */
