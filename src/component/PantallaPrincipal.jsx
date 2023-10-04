import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { GlobalStyle } from "./DiseñosInicio";
import {
  Nav,
  ImagenLogo,
  ContainerBotonNav,
  BotonNav,
  ContainerPrincipal,
  ImagenLogoCentro,
  ContainerContenido,
  ContainerLateral,
  ContainerRegistro,
  TituloLateral,
  TituloRegistro,
  PasosLateral,
  ContainerBotonSiguientePasos,
  BotonSiguientePasos,
  ImgIcon,
  ContainerDatos,
  Category,
  Label,
  Radio,
  Titulo,
  ContainerTodo,
  ContainerPasosLateral,
  CircleProgress,
  Rectangulo,
  ContainerCarga,
  ImagenCarga,
  ContainerTabla,
  ContainerImgIcon,
  ContainerBotonBusqueda,
  BotonBuscar,
} from "./DiseñoPantallaPrincipal";
import InputValidar from "./InputValidar";
import { useState } from "react";
import {
  faAngleRight,
  faAngleLeft,
  faCheck,
  fa1,
  fa2,
  fa3,
  faChess,
  faPenToSquare,
  faSearch,
  fa4,
  fa5,
  faXmark,
  faAdd,
  faQuestion,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";
import alerta from "sweetalert2";
import SelectInput from "./SelectValidar";
import axios from "axios";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ModalEditar from "./ModalEditar";
import { useEffect } from "react";
import ModalBuscar from "./ModalBuscar";
import SelectCurso from "./SelectCurso";
import SelectGrupo from "./SelectGrupo";
import ModalTutor from "./ModalTutor";
import ModalAñadirTutor from "./ModalAñadirTutor";
import ModalInformacion from "./ModalInformacion";
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
export default function PantallaPrincipal() {
  const [opcion, setOpcion] = useState(0);
  const [opcionPasos, setOpcionPasos] = useState(1);
  //estudiante
  const [nombre, setNombre] = useState({ campo: "", valido: null });
  const [apellido, setApellido] = useState({ campo: "", valido: null });
  const [fechaNacimientoEstudiante, setFechaNacimientoEstudiante] = useState({
    campo: "",
    valido: null,
  });
  const [generoEstudiante, setGeneroEstudiante] = useState("");
  //tutor
  const [nombreTutor, setNombreTutor] = useState({ campo: "", valido: null });
  const [apellidoTutor, setApellidoTutor] = useState({
    campo: "",
    valido: null,
  });
  const [fechaNacimientoTutor, setFechaNacimientoTutor] = useState({
    campo: "",
    valido: null,
  });
  const [generoTutor, setGeneroTutor] = useState("");
  const [celularTutor, setCelularTutor] = useState({ campo: "", valido: null });
  const [correoTutor, setCorreoTutor] = useState({ campo: "", valido: null });
  const [ocupacionTutor, setOcupacionTutor] = useState({
    campo: "",
    valido: null,
  });
  //datosExtras
  const [direccion, setDireccion] = useState({ campo: "", valido: null });
  const [colegio, setColegio] = useState({ campo: "", valido: null });
  const [turno, setTurno] = useState({ campo: "", valido: null });
  const [curso, setCurso] = useState({ campo: "", valido: null });
  const [tipoColegio, setTipoColegio] = useState({ campo: "", valido: null });
  const [relacion, setRelacion] = useState({ campo: "", valido: null });
  const [pais, setPais] = useState({ campo: "", valido: null });
  const [ciudad, setCiudad] = useState({ campo: "", valido: null });
  const [departamento, setDepartamento] = useState({ campo: "", valido: null });
  //carga
  const [seSubio, setSeSubio] = useState(false);
  //database
  const url = "https://sistema-instituto.fly.dev/";
  //listas
  const [lista, setLista] = useState(0);
  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s- ]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,8}$/, // 7 a 14 numeros.
    carnet: /^[a-zA-Z0-9-]{6,15}$/,
    fecha: /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/,
    lugar: /^[a-zA-ZÀ-ÿ\s0-9- ]{3,40}$/,
  };
  //cursos
  const [cursoRegistrados, setCursoRegistrados] = useState({
    campo: "",
    valido: null,
  });
  const [grupo, setGrupo] = useState({ campo: "", valido: null });
  const [listaCursos, setListaCursos] = useState([]);
  function esValido() {
    var esValido = true;
    if (opcionPasos === 1) {
      if (nombre.campo === "") {
        esValido = false;
        setNombre({ ...nombre, valido: "false" });
        toast("Ingresar nombre del estudiante", {
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
      } else {
        if (nombre.valido === "false") {
          esValido = false;
          toast("Nombre del estudiante invalido", {
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
      }
      if (apellido.campo == "") {
        esValido = false;
        setApellido({ ...apellido, valido: "false" });
        toast("Ingresar apellido del estudiante", {
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
      } else {
        if (apellido.valido == "false") {
          esValido = false;
          toast("Apellido del estudiante invalido", {
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
      }
      if (fechaNacimientoEstudiante.campo == "") {
        esValido = false;
        setFechaNacimientoEstudiante({
          ...fechaNacimientoEstudiante,
          valido: "false",
        });
        toast("Ingresar fecha de nacimiento del estudiante", {
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
      } else {
        if (fechaNacimientoEstudiante.valido == "false") {
          esValido = false;
          toast("Fecha nacimiento del estudiante invalido", {
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
      }
      if (generoEstudiante == "") {
        esValido = false;
        toast("Ingresar genero del estudiante", {
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
    }
    if (opcionPasos == 2) {
      if (nombreTutor.campo == "") {
        esValido = false;
        setNombreTutor({ ...nombreTutor, valido: "false" });
        toast("Ingresar nombre del tutor", {
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
      } else {
        if (nombreTutor.valido == "false") {
          esValido = false;
          toast("Nombre del tutor invalido", {
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
      }
      if (apellidoTutor.campo == "") {
        esValido = false;
        setApellidoTutor({ ...apellidoTutor, valido: "false" });
        toast("Ingresar apellido del tutor", {
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
      } else {
        if (apellidoTutor.valido == "false") {
          esValido = false;
          toast("Apellido del tutor invalido", {
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
      }
      if (fechaNacimientoTutor.campo == "") {
        esValido = false;
        setFechaNacimientoTutor({ ...fechaNacimientoTutor, valido: "false" });
        toast("Ingresar fecha de tutor del estudiante", {
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
      } else {
        if (fechaNacimientoTutor.valido == "false") {
          esValido = false;
          toast("Fecha nacimiento del tutor invalido", {
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
      }
      if (celularTutor.campo == "") {
        esValido = false;
        setCelularTutor({ ...celularTutor, valido: "false" });
        toast("Ingresar celular del tutor", {
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
      } else {
        if (celularTutor.valido == "false") {
          esValido = false;
          toast("Celular del tutor invalido", {
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
      }
      if (correoTutor.campo == "") {
        esValido = false;
        setCorreoTutor({ ...correoTutor, valido: "false" });
        toast("Ingresar correo del tutor", {
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
      } else {
        if (correoTutor.valido == "false") {
          esValido = false;
          toast("Correo del tutor invalido", {
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
      }
      if (ocupacionTutor.campo == "") {
        esValido = false;
        setOcupacionTutor({ ...ocupacionTutor, valido: "false" });
        toast("Ingresar ocupacion del tutor", {
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
      } else {
        if (ocupacionTutor.valido == "false") {
          esValido = false;
          toast("Ocupacion del tutor invalido", {
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
      }
      if (generoTutor == "") {
        esValido = false;
        toast("Ingresar genero del tutor", {
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
    }
    if (opcionPasos == 3) {
      if (direccion.campo == "") {
        esValido = false;
        setDireccion({ ...direccion, valido: "false" });
        toast("Ingresar direccion", {
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
      } else {
        if (direccion.valido == "false") {
          esValido = false;
          toast("Direccion invalida", {
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
      }
      if (colegio.campo == "") {
        esValido = false;
        setColegio({ ...colegio, valido: "false" });
        toast("Ingresar colegio", {
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
      } else {
        if (colegio.valido == "false") {
          esValido = false;
          toast("Colegio invalido", {
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
      }
      if (pais.campo == "") {
        esValido = false;
        setCelularTutor({ ...pais, valido: "false" });
        toast("Ingresar pais", {
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
      } else {
        if (pais.valido == "false") {
          esValido = false;
          toast("Pais invalido", {
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
      }
      if (departamento.campo == "") {
        esValido = false;
        setCelularTutor({ ...departamento, valido: "false" });
        toast("Ingresar departamento", {
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
      } else {
        if (departamento.valido == "false") {
          esValido = false;
          toast("Departamento invalido", {
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
      }
      if (ciudad.campo == "") {
        esValido = false;
        setCelularTutor({ ...ciudad, valido: "false" });
        toast("Ingresar ciudad", {
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
      } else {
        if (ciudad.valido == "false") {
          esValido = false;
          toast("Ciudad invalida", {
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
      }
      if (turno.campo == "") {
        esValido = false;
        setTurno({ ...turno, valido: "false" });
        toast("Ingresar turno", {
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
      } else {
        if (turno.valido == "false") {
          esValido = false;
          toast("Turno invalido", {
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
      }
      if (curso.campo == "") {
        esValido = false;
        setCurso({ ...curso, valido: "false" });
        toast("Ingresar curso", {
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
      } else {
        if (curso.valido == "false") {
          esValido = false;
          toast("Curso invalido", {
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
      }
      if (tipoColegio.campo == "") {
        esValido = false;
        setTipoColegio({ ...tipoColegio, valido: "false" });
        toast("Ingresar tipo de colegio", {
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
      } else {
        if (tipoColegio.valido == "false") {
          esValido = false;
          toast("Tipo de colegio invalido", {
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
      }
      if (relacion.campo == "") {
        esValido = false;
        setCelularTutor({ ...relacion, valido: "false" });
        toast("Ingresar relacion", {
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
      } else {
        if (relacion.valido == "false") {
          esValido = false;
          toast("Relacion invalido", {
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
      }
    }
    return esValido;
  }
  const siguientePasoRegistro = () => {
    if (opcionPasos + 1 < 5) {
      if (esValido()) {
        if (opcionPasos + 1 == 2) {
          alerta
            .fire({
              title: "¿Tiene tutor?",
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
              if (result.isDismissed) {
                setRelacion({ campo: "No tiene", valido: "true" });
                setNombreTutor(nombre);
                setApellidoTutor(apellido);
                setFechaNacimientoTutor(fechaNacimientoEstudiante);
                setGeneroTutor(generoEstudiante);
              }
              if (result.isConfirmed) {
                setNombreTutor({ campo: "", valido: null });
                setApellidoTutor({ campo: "", valido: null });
                setFechaNacimientoTutor({ campo: "", valido: null });
                setGeneroTutor("");
              }
              setOpcionPasos(opcionPasos + 1);
            });
        } else {
          if (opcionPasos + 1 == 4) {
            obtenerCursos();
          }
          setOpcionPasos(opcionPasos + 1);
        }
      }
    } else {
      if (esValido()) {
        setSeSubio(true);
        subirBaseDatos();
      }
    }
  };
  const obtenerCursos = () => {
    axios.get(url + "obtenerCursos").then((response) => {
      setListaCursos(response.data);
    });
  };
  const atrasPasoRegistro = () => {
    if (opcionPasos - 1 > 0) {
      setOpcionPasos(opcionPasos - 1);
    }
  };
  const cambioGenero = (e) => {
    setGeneroEstudiante(e.target.value);
  };
  const cambioGeneroTutor = (e) => {
    setGeneroTutor(e.target.value);
  };
  function generarCodigoEstudiante() {
    var codigo = "";
    var subNombre = nombre.campo.substring(0, 3);
    var subApellido = apellido.campo.substring(0, 3);
    var año = new Date().getFullYear();
    var mes = new Date().getMonth() + 1;
    var fecha = new Date().getDate();
    codigo = año + "" + mes + "" + fecha + "" + subNombre + subApellido;
    return codigo.toUpperCase();
  }
  function generarCodigoTutor() {
    var codigo = "";
    var subNombre = nombreTutor.campo.substring(0, 3);
    var subApellido = apellidoTutor.campo.substring(0, 3);
    var año = new Date().getFullYear();
    var mes = new Date().getMonth() + 1;
    var fecha = new Date().getDate();
    codigo = año + "" + mes + "" + fecha + "" + subNombre + subApellido;
    return codigo.toUpperCase();
  }
  function subirBaseDatos() {
    var codigoEstudiante = generarCodigoEstudiante();
    var codigoTutor = generarCodigoTutor();
    var codigoInscripcion = generarCodInscripcion();
    const hoy = new Date().toLocaleDateString();
    const estudiante = {
      CODESTUDIANTE: codigoEstudiante,
      CODINSCRIPCION: codigoInscripcion,
      CODCURSOINSCRITO: cursoRegistrados,
      NOMBREESTUDIANTE: nombre.campo,
      APELLIDOESTUDIANTE: apellido.campo,
      FECHANACIMIENTOESTUDIANTE: fechaNacimientoEstudiante.campo,
      GENEROESTUDIANTE: generoEstudiante,
      DIRECCION: direccion.campo,
      PAIS: pais.campo,
      DEPARTAMENTO: departamento.campo,
      CIUDAD: ciudad.campo,
      COLEGIO: colegio.campo,
      TURNO: turno.campo,
      CURSO: curso.campo,
      TIPOCOLEGIO: tipoColegio.campo,
      HABILITADO: "Habilitado",
      HUELLAESTUDIANTE: "AVER",
      FECHAINSCRIPCION: hoy,
      COSTOINSCRIPCION: 50,
      SEDE: "COCHABAMBA",
    };
    const tutor = {
      CODTUTOR: codigoTutor,
      NOMBRETUTOR: nombreTutor.campo,
      FECHANACIMIENTOTUTOR: fechaNacimientoTutor.campo,
      CELULARTUTOR: celularTutor.campo,
      APELLIDOTUTOR: apellidoTutor.campo,
      GENEROTUTOR: generoTutor,
      OCUPACION: ocupacionTutor.campo,
      CORREO: correoTutor.campo,
      RELACION: relacion.campo,
      ESTADO: "Activo",
    };
    const EstudianteTutor = {
      estudiante_id: codigoEstudiante,
      tutor_id: codigoTutor,
    };
    axios.post(url + "agregarEstudiante", estudiante).then((response) => {
      axios.get(url + "obtenerTutor/" + codigoTutor).then((response) => {
        if (response.data.length > 0) {
          axios
            .post(url + "asignar-tutor", EstudianteTutor)
            .then((response) => {
              axios
                .get(url + "obtenerCurso/" + cursoRegistrados.campo)
                .then((curso) => {
                  const CursoInscrito = {
                    CODCURSOINSCRITO: cursoRegistrados.campo,
                    CODESTUDIANTE: codigoEstudiante,
                    CURSOINSCRITO: curso.data[0].CURSO,
                    DURACIONCURSO: curso.data[0].DURACIONCURSO,
                  };
                  axios
                    .get(url + "obtenerGrupoNombre/" + grupo.campo)
                    .then((grupo) => {
                      var i = 0;
                      var grupoEncontrado = "";
                      while (i < grupo.data.length) {
                        if (grupo.data[i].CODCURSO == cursoRegistrados.campo) {
                          grupoEncontrado = grupo.data[i];
                        }
                        i = i + 1;
                      }
                      const GrupoInscrito = {
                        CODCURSOINSCRITO: grupoEncontrado.CODCURSO,
                        CANTIDADMAXIMA: grupoEncontrado.CANTIDADMAXIMA,
                        NOMBREGRUPO: grupoEncontrado.NOMBREGRUPO,
                      };
                      axios
                        .post(url + "agregarCursoInscrito", CursoInscrito)
                        .then((respose) => {
                          axios
                            .post(url + "agregarGrupoInscrito", GrupoInscrito)
                            .then((response) => {
                              setSeSubio(false);
                              borrarDatos();
                            });
                        });
                    });
                });
            });
        } else {
          axios.post(url + "agregarTutor", tutor).then((response) => {
            axios
              .post(url + "asignar-tutor", EstudianteTutor)
              .then((response) => {
                axios
                  .get(url + "obtenerCurso/" + cursoRegistrados.campo)
                  .then((curso) => {
                    const CursoInscrito = {
                      CODCURSOINSCRITO: cursoRegistrados.campo,
                      CODESTUDIANTE: codigoEstudiante,
                      CURSOINSCRITO: curso.data[0].CURSO,
                      DURACIONCURSO: curso.data[0].DURACIONCURSO,
                    };
                    axios
                      .get(url + "obtenerGrupoNombre/" + grupo.campo)
                      .then((grupo) => {
                        var i = 0;
                        var grupoEncontrado = "";
                        while (i < grupo.data.length) {
                          if (
                            grupo.data[i].CODCURSO == cursoRegistrados.campo
                          ) {
                            grupoEncontrado = grupo.data[i];
                          }
                          i = i + 1;
                        }
                        const GrupoInscrito = {
                          CODCURSOINSCRITO: grupoEncontrado.CODCURSO,
                          CANTIDADMAXIMA: grupoEncontrado.CANTIDADMAXIMA,
                          NOMBREGRUPO: grupoEncontrado.NOMBREGRUPO,
                        };
                        axios
                          .post(url + "agregarCursoInscrito", CursoInscrito)
                          .then((respose) => {
                            axios
                              .post(url + "agregarGrupoInscrito", GrupoInscrito)
                              .then((response) => {
                                setSeSubio(false);
                                borrarDatos();
                              });
                          });
                      });
                  });
              });
          });
        }
      });
    });
  }
  function borrarDatos() {
    setOpcion(0);
    setOpcionPasos(1);
    setNombre({ campo: "", valido: null });
    setApellido({ campo: "", valido: null });
    setFechaNacimientoEstudiante({ campo: "", valido: null });
    setGeneroEstudiante("");
    setNombreTutor({ campo: "", valido: null });
    setApellidoTutor({ campo: "", valido: null });
    setFechaNacimientoTutor({ campo: "", valido: null });
    setGeneroTutor("");
    setCelularTutor({ campo: "", valido: null });
    setDireccion({ campo: "", valido: null });
    setColegio({ campo: "", valido: null });
    setTurno({ campo: "", valido: null });
    setCurso({ campo: "", valido: null });
    setTipoColegio({ campo: "", valido: null });
    setCorreoTutor({ campo: "", valido: null });
    setPais({ campo: "", valido: null });
    setDepartamento({ campo: "", valido: null });
    setCiudad({ campo: "", valido: null });
    setRelacion({ campo: "", valido: null });
    setOcupacionTutor({ campo: "", valido: null });
    setCursoRegistrados({ campo: "", valido: null });
    setGrupo({ campo: "", valido: null });
  }
  function generarCodInscripcion() {
    var codigo = "";
    var subNombre = nombreTutor.campo.substring(0, 3);
    var subApellido = apellidoTutor.campo.substring(0, 3);
    var año = new Date().getFullYear();
    var mes = new Date().getMonth() + 1;
    var fecha = new Date().getDate();
    codigo =
      año +
      "" +
      mes +
      "" +
      fecha +
      "" +
      subNombre +
      subApellido +
      cursoRegistrados.campo +
      grupo.campo;
    return codigo.toUpperCase();
  }
  const [carga, setCarga] = useState(false);
  const [listaEstudiantes, setListaEstudiantes] = useState([]);
  const [listaTutores, setListaTutores] = useState([]);

  const obtenerListaEstudiantes = () => {
    setLista(1);
    setCarga(true);
    axios.get(url + "obtenerEstudiantes").then((response) => {
      if (response.data.length > 0) {
        setCarga(false);
        setListaEstudiantes(response.data);
      } else {
        setCarga(false);
        alert("algo paso");
      }
    });
  };
  const obtenerListaTutores = () => {
    setLista(2);
    setCarga(true);
    axios.get(url + "obtenerTutores").then((response) => {
      if (response.data.length > 0) {
        setCarga(false);
        setListaTutores(response.data);
      } else {
        setCarga(false);
        alert("algo paso");
      }
    });
  };
  const classes = styles();
  const [editEstudiante, setEditEstudiante] = useState(false);
  const [estudianteElegido, setEstudianteElegido] = useState([]);
  const [modalBuscar, setModalBuscar] = useState(false);
  const [tutorElegido, setTutorElegido] = useState([]);
  const [modalTutor, setModalTutor] = useState(false);
  useEffect(() => {
    if (lista === 1) {
      axios.get(url + "obtenerEstudiantes").then((response) => {
        if (response.data.length > 0) {
          setCarga(false);
          setListaEstudiantes(response.data);
        } else {
          setCarga(false);
        }
      });
    }
    if (lista == 2) {
      axios.get(url + "obtenerTutores").then((response) => {
        if (response.data.length > 0) {
          setCarga(false);
          setListaTutores(response.data);
        } else {
          setCarga(false);
        }
      });
    }
  }, [editEstudiante, modalTutor]);
  const [ocultar, setOcultar] = useState("false");
  const [modalAñadirTutor, setAñadirTutor] = useState(false);
  function colocar(estado) {
    var icon = faQuestion;
    if (estado == "Activo") {
      icon = faCheck;
    } else {
      if (estado == "Baja") {
        icon = faXmark;
      }
    }
    return icon;
  }
  const [modalInformacion, setModalInformacion] = useState(false);
  const [tipo, setTipo] = useState("");
  return (
    <GlobalStyle>
      <Nav>
        <ImagenLogo
          src={require("../Imagenes/Logo.png")}
          onClick={() => {
            setOpcion(0);
          }}
          seleccionado={opcion == 0 ? "false" : "true"}
        />
        <ContainerBotonNav>
          <BotonNav
            onClick={() => {
              setOpcion(1);
            }}
            seleccionado={opcion == 1 ? "true" : "false"}
          >
            REGISTRAR NUEVOS ESTUDIANTES
          </BotonNav>
          <BotonNav
            onClick={() => {
              setOpcion(2);
            }}
            seleccionado={opcion == 2 ? "true" : "false"}
          >
            VER LISTAS
          </BotonNav>
          <BotonNav
            onClick={() => {
              setOpcion(3);
            }}
            seleccionado={opcion == 3 ? "true" : "false"}
          >
            LISTA TUTORES
          </BotonNav>
        </ContainerBotonNav>
      </Nav>
      <ContainerPrincipal ocultar={ocultar}>
        {opcion === 0 && (
          <ImagenLogoCentro src={require("../Imagenes/Logo.png")} />
        )}
        {opcion === 1 && (
          <>
            <ContainerContenido>
              <ContainerLateral>
                <TituloLateral>REGISTRAR ESTUDIANTE</TituloLateral>
                <ContainerPasosLateral>
                  <CircleProgress
                    seleccionado={opcionPasos >= 1 ? "true" : "false"}
                  >
                    {opcionPasos == 1 ? (
                      <ImgIcon lateral={"true"} icon={fa1} />
                    ) : (
                      <ImgIcon lateral={"true"} icon={faCheck} />
                    )}
                  </CircleProgress>
                  <PasosLateral
                    seleccionado={opcionPasos >= 1 ? "true" : "false"}
                  >
                    Informacion del estudiante
                  </PasosLateral>
                </ContainerPasosLateral>
                <Rectangulo
                  seleccionado={opcionPasos >= 2 ? "true" : "false"}
                />
                <ContainerPasosLateral>
                  <CircleProgress
                    seleccionado={opcionPasos >= 2 ? "true" : "false"}
                  >
                    {opcionPasos <= 2 ? (
                      <ImgIcon lateral={"true"} icon={fa2} />
                    ) : (
                      <ImgIcon lateral={"true"} icon={faCheck} />
                    )}
                  </CircleProgress>
                  <PasosLateral
                    seleccionado={opcionPasos >= 2 ? "true" : "false"}
                  >
                    Informacion del tutor
                  </PasosLateral>
                </ContainerPasosLateral>
                <Rectangulo
                  seleccionado={opcionPasos >= 3 ? "true" : "false"}
                />
                <ContainerPasosLateral>
                  <CircleProgress
                    seleccionado={opcionPasos >= 3 ? "true" : "false"}
                  >
                    {opcionPasos <= 3 ? (
                      <ImgIcon lateral={"true"} icon={fa3} />
                    ) : (
                      <ImgIcon lateral={"true"} icon={faCheck} />
                    )}
                  </CircleProgress>
                  <PasosLateral
                    seleccionado={opcionPasos >= 3 ? "true" : "false"}
                  >
                    Informacion opcional
                  </PasosLateral>
                </ContainerPasosLateral>
                <Rectangulo
                  seleccionado={opcionPasos >= 4 ? "true" : "false"}
                />
                <ContainerPasosLateral>
                  <CircleProgress
                    seleccionado={opcionPasos >= 4 ? "true" : "false"}
                  >
                    {opcionPasos <= 4 ? (
                      <ImgIcon lateral={"true"} icon={fa4} />
                    ) : (
                      <ImgIcon lateral={"true"} icon={faCheck} />
                    )}
                  </CircleProgress>
                  <PasosLateral
                    seleccionado={opcionPasos >= 4 ? "true" : "false"}
                  >
                    Registro de curso y biometrico
                  </PasosLateral>
                </ContainerPasosLateral>
              </ContainerLateral>
              {!seSubio && (
                <ContainerRegistro>
                  {opcionPasos == 1 && (
                    <ContainerTodo>
                      <Titulo>DATOS PERSONALES DEL ESTUDIANTE</Titulo>
                      <ContainerDatos>
                        <InputValidar
                          estado={nombre}
                          cambiarEstado={setNombre}
                          tipo="text"
                          label="Nombre del estudiante"
                          placeholder="Nombre del estudiante"
                          name="nombreEstudiante"
                          expresionRegular={expresiones.nombre}
                        />
                        <InputValidar
                          estado={apellido}
                          cambiarEstado={setApellido}
                          tipo="text"
                          label="Apellido del estudiante"
                          placeholder="Apellido del estudiante"
                          name="apellidoEstudiante"
                          expresionRegular={expresiones.nombre}
                        />
                      </ContainerDatos>
                      <ContainerDatos>
                        <InputValidar
                          estado={fechaNacimientoEstudiante}
                          cambiarEstado={setFechaNacimientoEstudiante}
                          tipo="date"
                          label="Fecha nacimiento del estudiante"
                          placeholder="Fecha nacimiento del estudiante"
                          name="fechaNacimientoEstudiante"
                          expresionRegular={{}}
                        />
                      </ContainerDatos>
                      <Titulo>GENERO</Titulo>
                      <Category>
                        <Label for="dot-1">
                          <Radio
                            type="radio"
                            name="gender"
                            id="dot-1"
                            value="Hombre"
                            checked={
                              generoEstudiante === "Hombre" ? true : false
                            }
                            onChange={cambioGenero}
                          />
                          <span className="gender">Hombre</span>
                        </Label>
                        <Label for="dot-2">
                          <Radio
                            type="radio"
                            name="gender"
                            id="dot-2"
                            value="Mujer"
                            checked={
                              generoEstudiante === "Mujer" ? true : false
                            }
                            onChange={cambioGenero}
                          />
                          <span className="gender">Mujer</span>
                        </Label>
                      </Category>
                    </ContainerTodo>
                  )}
                  {opcionPasos == 2 && (
                    <ContainerTodo>
                      <Titulo>DATOS PERSONALES DEL TUTOR</Titulo>
                      <ContainerDatos>
                        <InputValidar
                          estado={nombreTutor}
                          cambiarEstado={setNombreTutor}
                          tipo="text"
                          label="Nombre del tutor"
                          placeholder="Nombre del tutor"
                          name="nombreTutor"
                          expresionRegular={expresiones.nombre}
                        />
                        <InputValidar
                          estado={apellidoTutor}
                          cambiarEstado={setApellidoTutor}
                          tipo="text"
                          label="Apellido del tutor"
                          placeholder="Apellido del tutor"
                          name="apellidoTutor"
                          expresionRegular={expresiones.nombre}
                        />
                      </ContainerDatos>
                      <ContainerDatos>
                        <InputValidar
                          estado={fechaNacimientoTutor}
                          cambiarEstado={setFechaNacimientoTutor}
                          tipo="date"
                          label="Fecha nacimiento del tutor"
                          placeholder="Fecha nacimiento del tutor"
                          name="fechaNacimientoTutor"
                          expresionRegular={{}}
                        />
                        <InputValidar
                          estado={celularTutor}
                          cambiarEstado={setCelularTutor}
                          tipo="number"
                          label="Celular del tutor"
                          placeholder="Celular del tutor"
                          name="CelularTutor"
                          expresionRegular={expresiones.telefono}
                        />
                      </ContainerDatos>
                      <ContainerDatos>
                        <InputValidar
                          estado={correoTutor}
                          cambiarEstado={setCorreoTutor}
                          tipo="email"
                          label="Correo electronico del tutor"
                          placeholder="Correo electronico del tutor"
                          name="Correo electronico del tutor"
                          expresionRegular={expresiones.correo}
                        />
                        <InputValidar
                          estado={ocupacionTutor}
                          cambiarEstado={setOcupacionTutor}
                          tipo="text"
                          label="Ocupacion del tutor"
                          placeholder="Ocupacion del tutor"
                          name="ocupacionTutor"
                          expresionRegular={expresiones.nombre}
                        />
                      </ContainerDatos>
                      <Titulo>GENERO</Titulo>
                      <Category>
                        <Label for="dot-1">
                          <Radio
                            type="radio"
                            name="gender"
                            id="dot-1"
                            value="Hombre"
                            checked={generoTutor === "Hombre" ? true : false}
                            onChange={cambioGeneroTutor}
                          />
                          <span className="gender">Hombre</span>
                        </Label>
                        <Label for="dot-2">
                          <Radio
                            type="radio"
                            name="gender"
                            id="dot-2"
                            value="Mujer"
                            checked={generoTutor === "Mujer" ? true : false}
                            onChange={cambioGeneroTutor}
                          />
                          <span className="gender">Mujer</span>
                        </Label>
                      </Category>
                    </ContainerTodo>
                  )}
                  {opcionPasos == 3 && (
                    <ContainerTodo>
                      <Titulo>INFORMACION ADICIONAL</Titulo>
                      <ContainerDatos>
                        <InputValidar
                          estado={direccion}
                          cambiarEstado={setDireccion}
                          tipo="text"
                          label="Direccion"
                          placeholder="Direccion"
                          name="Direccion"
                          expresionRegular={expresiones.lugar}
                        />
                        <InputValidar
                          estado={colegio}
                          cambiarEstado={setColegio}
                          tipo="text"
                          label="Colegio"
                          placeholder="Colegio"
                          name="Colegio"
                          expresionRegular={expresiones.lugar}
                        />
                      </ContainerDatos>
                      <ContainerDatos>
                        <InputValidar
                          estado={pais}
                          cambiarEstado={setPais}
                          tipo="text"
                          label="Pais"
                          placeholder="Pais"
                          name="Pais"
                          expresionRegular={expresiones.nombre}
                        />
                        <InputValidar
                          estado={departamento}
                          cambiarEstado={setDepartamento}
                          tipo="text"
                          label="Departamento"
                          name="Departamento"
                          placeholder="Departamento"
                          expresionRegular={expresiones.nombre}
                        />
                        <InputValidar
                          estado={ciudad}
                          cambiarEstado={setCiudad}
                          tipo="text"
                          label="Cuidad"
                          name="Cuidad"
                          placeholder="Cuidad"
                          expresionRegular={expresiones.nombre}
                        />
                      </ContainerDatos>
                      <ContainerDatos>
                        <SelectInput
                          estado={turno}
                          cambiarEstado={setTurno}
                          label="Turno"
                          name="Turno"
                        />
                        <SelectInput
                          estado={curso}
                          cambiarEstado={setCurso}
                          label="Curso"
                          name="curso"
                        />
                      </ContainerDatos>
                      <ContainerDatos>
                        <SelectInput
                          estado={tipoColegio}
                          cambiarEstado={setTipoColegio}
                          label="Tipo colegio"
                          name="tipoColegio"
                        />
                        <SelectInput
                          estado={relacion}
                          cambiarEstado={setRelacion}
                          label="Relacion con el estudiante"
                          name="curso"
                        />
                      </ContainerDatos>
                    </ContainerTodo>
                  )}
                  {opcionPasos == 4 && (
                    <ContainerTodo>
                      <Titulo>REGISTRO A UN CURSO</Titulo>
                      <ContainerDatos>
                        <SelectCurso
                          estado={cursoRegistrados}
                          cambiarEstado={setCursoRegistrados}
                          label="Cursos"
                          name="cursos"
                          dato={listaCursos}
                        />
                        <SelectGrupo
                          estado={grupo}
                          cambiarEstado={setGrupo}
                          label="Grupos"
                          name="grupos"
                          dato={cursoRegistrados.campo}
                        />
                      </ContainerDatos>
                      <Titulo espacio={"true"}>
                        REGISTRO DATOS BIOMETRICOS
                      </Titulo>
                    </ContainerTodo>
                  )}
                  <ContainerBotonSiguientePasos>
                    <BotonSiguientePasos
                      ocultar={opcionPasos === 1 ? "true" : "false"}
                      onClick={atrasPasoRegistro}
                    >
                      <ImgIcon icon={faAngleLeft} />
                    </BotonSiguientePasos>
                    <BotonSiguientePasos
                      right={"true"}
                      onClick={siguientePasoRegistro}
                    >
                      <ImgIcon icon={faAngleRight} />
                    </BotonSiguientePasos>
                  </ContainerBotonSiguientePasos>
                </ContainerRegistro>
              )}
              {seSubio && (
                <ContainerCarga>
                  <ImagenCarga src={require("../Imagenes/Carga.gif")} />
                </ContainerCarga>
              )}
            </ContainerContenido>
          </>
        )}
        {opcion === 2 && (
          <ContainerContenido>
            <ContainerLateral>
              <TituloLateral>LISTAS</TituloLateral>
              <ContainerPasosLateral
                onClick={obtenerListaEstudiantes}
                button="true"
                seleccionado={lista == 1 ? "true" : "false"}
              >
                <CircleProgress seleccionado={lista == 1 ? "true" : "false"}>
                  <ImgIcon lateral={"true"} icon={faChess} />
                </CircleProgress>
                <PasosLateral seleccionado={lista == 1 ? "true" : "false"}>
                  Lista de estudiantes
                </PasosLateral>
              </ContainerPasosLateral>
              <ContainerPasosLateral
                onClick={obtenerListaTutores}
                button="true"
                seleccionado={lista == 2 ? "true" : "false"}
              >
                <CircleProgress seleccionado={lista == 2 ? "true" : "false"}>
                  <ImgIcon lateral={"true"} icon={faChess} />
                </CircleProgress>
                <PasosLateral seleccionado={lista == 2 ? "true" : "false"}>
                  Lista tutores
                </PasosLateral>
              </ContainerPasosLateral>
            </ContainerLateral>
            <ContainerRegistro>
              {!carga && (
                <>
                  {lista == 1 && (
                    <>
                      <ContainerTabla>
                        <Table>
                          <TableHead>
                            <TableRow className={classes.encabezado}>
                              <TableCell className={classes.celdas}>
                                CODIGO
                              </TableCell>
                              <TableCell className={classes.celdas}>
                                NOMBRE
                              </TableCell>
                              <TableCell className={classes.celdas}>
                                APELLIDO
                              </TableCell>
                              <TableCell
                                align="center"
                                className={classes.celdas}
                              >
                                VER MAS
                              </TableCell>
                              <TableCell className={classes.celdas}>
                                EDITAR
                              </TableCell>
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
                                  <TableCell className={classes.texto}>
                                    <ContainerImgIcon
                                      onClick={() => {
                                        setModalInformacion(true);
                                        setOcultar("true");
                                        setEstudianteElegido(estudiante);
                                        setTipo("Estudiante");
                                      }}
                                    >
                                      <ImgIcon tabla={"true"} icon={faInfo} />
                                    </ContainerImgIcon>
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    className={classes.icon}
                                  >
                                    <ContainerImgIcon
                                      onClick={() => {
                                        setEditEstudiante(true);
                                        setOcultar("true");
                                        setEstudianteElegido(estudiante);
                                      }}
                                    >
                                      <ImgIcon
                                        tabla={"true"}
                                        icon={faPenToSquare}
                                      />
                                    </ContainerImgIcon>
                                  </TableCell>
                                </TableRow>
                              );
                            })}
                          </TableBody>
                        </Table>
                      </ContainerTabla>
                      <ContainerBotonBusqueda>
                        <BotonBuscar
                          onClick={() => {
                            setModalBuscar(true);
                            setOcultar("true");
                          }}
                        >
                          <ImgIcon buscar={"true"} icon={faSearch} />
                        </BotonBuscar>
                      </ContainerBotonBusqueda>
                    </>
                  )}
                  {lista == 2 && (
                    <>
                      <ContainerTabla>
                        <Table>
                          <TableHead>
                            <TableRow className={classes.encabezado}>
                              <TableCell className={classes.celdas}>
                                CODIGO
                              </TableCell>
                              <TableCell className={classes.celdas}>
                                NOMBRE
                              </TableCell>
                              <TableCell className={classes.celdas}>
                                APELLIDO
                              </TableCell>
                              <TableCell
                                align="center"
                                className={classes.celdas}
                              >
                                VER MAS
                              </TableCell>
                              <TableCell className={classes.celdas}>
                                ESTADO
                              </TableCell>
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
                                    <ContainerImgIcon
                                      onClick={() => {
                                        setModalInformacion(true);
                                        setOcultar("true");
                                        setEstudianteElegido(tutor);
                                        setTipo("Tutor");
                                      }}
                                    >
                                      <ImgIcon tabla={"true"} icon={faInfo} />
                                    </ContainerImgIcon>
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    className={classes.icon}
                                  >
                                    <ContainerImgIcon
                                      onClick={() => {
                                        setModalTutor(true);
                                        setTutorElegido(tutor);
                                        setOcultar("true");
                                      }}
                                    >
                                      <ImgIcon
                                        tabla={"true"}
                                        icon={colocar(tutor.ESTADO)}
                                      />
                                    </ContainerImgIcon>
                                  </TableCell>
                                </TableRow>
                              );
                            })}
                          </TableBody>
                        </Table>
                      </ContainerTabla>
                      <ContainerBotonBusqueda>
                        <BotonBuscar
                          onClick={() => {
                            setAñadirTutor(true);
                            setOcultar("true");
                          }}
                        >
                          <ImgIcon buscar={"true"} icon={faAdd} />
                        </BotonBuscar>
                      </ContainerBotonBusqueda>
                    </>
                  )}
                </>
              )}
              {carga && (
                <ContainerCarga>
                  <ImagenCarga src={require("../Imagenes/Carga.gif")} />
                </ContainerCarga>
              )}
            </ContainerRegistro>
          </ContainerContenido>
        )}
        {opcion === 3 && <div>aver</div>}
      </ContainerPrincipal>
      <ModalEditar
        estado={editEstudiante}
        cambiarEstado={setEditEstudiante}
        datos={estudianteElegido}
        ocultar={setOcultar}
      />
      <ModalBuscar
        estado={modalBuscar}
        cambiarEstado={setModalBuscar}
        ocultar={setOcultar}
        datos={listaEstudiantes}
      />
      <ModalTutor
        estado={modalTutor}
        cambiarEstado={setModalTutor}
        datos={tutorElegido}
        ocultar={setOcultar}
      />
      <ModalAñadirTutor
        estado={modalAñadirTutor}
        cambiarEstado={setAñadirTutor}
        ocultar={setOcultar}
        lista={setLista}
      />
      <ModalInformacion
        estado={modalInformacion}
        cambiarEstado={setModalInformacion}
        ocultar={setOcultar}
        datos={estudianteElegido}
        tipo={tipo}
      />
      <Toaster reverseOrder={true} position="top-right" />
    </GlobalStyle>
  );
}
