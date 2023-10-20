import React from "react";
import { url } from "./VariableEntornos";
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
  BotonAbrirExe,
  ContainerLogo,
  ContainerTitulo,
  TituloDasboard,
  ImagenHuella,
  ContainerHuella,
  BarraEscaneo,
  ContainerImagenCentro,
  ContainerBotonLista,
  LineaLista,
  ContainerTituloBusqueda,
  Texto,
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
  faUser,
  faFilePen,
  faListSquares,
  faClipboardList,
  faGraduationCap,
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
import { BoxCampo, TextBox } from "./DiseñoInputValidar";
import ModalAñadirCurso from "./ModalAñadirCurso";
import ModalVerGrupo from "./ModalVerGrupo";
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
  icon: {
    height: "40px",
    width: "50px",
    fontFamily: "bold",
    fontSize: "14px",
  },
  opciones: {
    display: "flex",
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
  const [generoEstudiante, setGeneroEstudiante] = useState({
    campo: "",
    valido: null,
  });
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
  const [generoTutor, setGeneroTutor] = useState({ campo: "", valido: null });
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
  //listas
  const [lista, setLista] = useState(0);
  const expresiones = {
    nombre: /^(?=\S)(?!.*\s{2})[a-zA-ZÀ-ÿ\s-]{3,40}$/, // Letras y espacios, pueden llevar acentos.
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
  const [tutorSi, setTutorSi] = useState(false);

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
      if (generoEstudiante.campo == "") {
        esValido = false;
        setGeneroEstudiante({ ...generoEstudiante, valido: "false" });
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
        console.log("entra");
        setPais({ ...pais, valido: "false" });
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
        setDepartamento({ ...departamento, valido: "false" });
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
        setCiudad({ ...ciudad, valido: "false" });
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
    }
    if (opcionPasos === 2) {
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
      if (generoTutor == "") {
        setGeneroTutor({ ...generoTutor, valido: "false" });
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
      if (relacion.campo == "") {
        esValido = false;
        setRelacion({ ...relacion, valido: "false" });
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
    if (opcionPasos === 3) {
      if (cursoRegistrados.campo === "") {
        esValido = false;
        setCursoRegistrados({ ...cursoRegistrados, valido: "false" });
        toast("Seleccionar curso", {
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
      if (grupo.campo === "") {
        esValido = false;
        setGrupo({ ...grupo, valido: "false" });
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
      }
      if (!habilitarHuella) {
        esValido = false;
        toast("Escanear huella", {
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
    return esValido;
  }
  const siguientePasoRegistro = () => {
    if (opcionPasos + 1 < 4) {
      if (esValido()) {
        if (opcionPasos + 1 == 2) {
          if (!tutorSi) {
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
                setTutorSi(true);
                setOpcionPasos(opcionPasos + 1);
              });
          } else {
            setOpcionPasos(opcionPasos + 1);
          }
        } else {
          if (opcionPasos + 1 == 3) {
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
  function generarCodigoEstudiante() {
    var codigo = "";
    var subNombre = nombre.campo.substring(0, 3);
    var subApellido = apellido.campo.substring(0, 3);
    var año = new Date().getFullYear();
    const dia = new Date().getDate();
    const mes = new Date().getMonth() + 1;
    codigo = año + "" + mes + "" + dia + "" + subNombre + subApellido;
    return codigo.toUpperCase();
  }
  function generarCodigoTutor() {
    var codigo = "";
    var subNombre = nombreTutor.campo.substring(0, 3);
    var subApellido = apellidoTutor.campo.substring(0, 3);
    var año = new Date().getFullYear();
    const dia = new Date().getDate();
    const mes = new Date().getMonth() + 1;
    codigo = año + "" + mes + "" + dia + "" + subNombre + subApellido;
    return codigo.toUpperCase();
  }

  const agregarTodo = (estudiante, EstudianteTutor) => {
    axios.post(url + "asignar-tutor", EstudianteTutor).then((response) => {
      axios
        .get(url + "obtenerCurso/" + cursoRegistrados.campo)
        .then((curso) => {
          const CursoInscrito = {
            CODCURSOINSCRITO: cursoRegistrados.campo,
            CODESTUDIANTE: estudiante.CODESTUDIANTE,
            CURSOINSCRITO: curso.data[0].CURSO,
            DURACIONCURSO: curso.data[0].DURACIONCURSO,
          };
          axios.get(url + "obtenerGrupoNombre/" + grupo.campo).then((grupo) => {
            var i = 0;
            var grupoEncontrado = "";
            while (i < grupo.data.length) {
              if (grupo.data[i].CODCURSO == cursoRegistrados.campo) {
                grupoEncontrado = grupo.data[i];
              }
              i = i + 1;
            }
            const GrupoInscrito = {
              CODESTUDIANTE: estudiante.CODESTUDIANTE,
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
                    setImagenHuella(require("../Imagenes/EscanearHuella.png"));
                  });
              });
          });
        });
    });
  };

  function subirBaseDatos() {
    var codigoEstudiante = generarCodigoEstudiante();
    var codigoTutor = generarCodigoTutor();
    var codigoInscripcion = generarCodInscripcion();
    const hoy = new Date().toLocaleDateString();
    const estudiante = {
      CODESTUDIANTE: codigoEstudiante,
      CODINSCRIPCION: codigoInscripcion,
      CODCURSOINSCRITO: cursoRegistrados.campo,
      NOMBREESTUDIANTE: nombre.campo,
      APELLIDOESTUDIANTE: apellido.campo,
      FECHANACIMIENTOESTUDIANTE: fechaNacimientoEstudiante.campo,
      GENEROESTUDIANTE: generoEstudiante.campo,
      DIRECCION: direccion.campo,
      PAIS: pais.campo,
      DEPARTAMENTO: departamento.campo,
      CIUDAD: ciudad.campo,
      COLEGIO: colegio.campo,
      TURNO: turno.campo,
      CURSO: curso.campo,
      TIPOCOLEGIO: tipoColegio.campo,
      HABILITADO: "Habilitado",
      FECHAINSCRIPCION: hoy,
      COSTOINSCRIPCION: 50,
      SEDE: "QUILLACOLLO",
    };
    const tutor = {
      CODTUTOR: codigoTutor,
      NOMBRETUTOR: nombreTutor.campo,
      FECHANACIMIENTOTUTOR: fechaNacimientoTutor.campo,
      CELULARTUTOR: celularTutor.campo,
      APELLIDOTUTOR: apellidoTutor.campo,
      GENEROTUTOR: generoTutor.campo,
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
          agregarTodo(estudiante, EstudianteTutor);
        } else {
          axios.post(url + "agregarTutor", tutor).then((response) => {
            agregarTodo(estudiante, EstudianteTutor);
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
    setHabilitarHuella(false);
    setTutorSi(false);
  }
  function generarCodInscripcion() {
    var codigo = "";
    var subNombre = nombre.campo.substring(0, 3);
    var subApellido = apellido.campo.substring(0, 3);
    var año = new Date().getFullYear();
    const dia = new Date().getDate();
    const mes = new Date().getMonth() + 1;
    codigo = año + "" + mes + "" + dia + "" + subNombre + subApellido;
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
  const [modalAñadirCurso, setModalAñadirCurso] = useState(false);

  useEffect(() => {
    if (opcion === 2) {
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
    }
    if (opcion === 3) {
      obtenerCursos();
    }
  }, [editEstudiante, modalTutor, modalAñadirCurso]);
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

  const [habilitarHuella, setHabilitarHuella] = useState(false);

  const abrirExe = () => {
    try {
      axios.post(url + "ejecutar-exe").then((response) => {
        setHabilitarHuella(true);
        setEscaneando(false);
        setImagenHuella(require("../Imagenes/HuellaRegistrada.png"));
      });
    } catch (error) {
      console.error("Error de red", error);
    }
  };

  const abrirExeVerificar = async () => {
    try {
      setOpcion(0);
      const response = await fetch(url + "ejecutar-exe-verificar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Otros encabezados si es necesario
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const [imagenHuella, setImagenHuella] = useState(
    require("../Imagenes/EscanearHuella.png")
  );
  const [escaneando, setEscaneando] = useState(false);
  let cantidad = 0;
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
  const [modalVerGrupo, setModalVerGrupo] = useState(false);
  const [grupoEscogido, setGrupoEscogido] = useState("");
  return (
    <GlobalStyle>
      <Nav>
        <ContainerLogo
          onClick={() => {
            setOpcion(0);
          }}
        >
          <ImagenLogo
            src={require("../Imagenes/Logo.png")}
            seleccionado={opcion == 0 ? "false" : "true"}
          />
          <ContainerTitulo>
            <TituloDasboard>Infinity</TituloDasboard>
            <TituloDasboard subTitutlo={"true"}>DASHBOARD</TituloDasboard>
          </ContainerTitulo>
        </ContainerLogo>
        <ContainerBotonNav>
          <BotonNav
            onClick={() => {
              setOpcion(1);
            }}
            seleccionado={opcion == 1 ? "true" : "false"}
          >
            <ImgIcon menu={"true"} icon={faFilePen} />
            Registro de estudiantes
          </BotonNav>
          <BotonNav
            onClick={() => {
              setOpcion(2);
            }}
            seleccionado={opcion == 2 ? "true" : "false"}
          >
            <ImgIcon menu={"true"} icon={faListSquares} />
            Listas
          </BotonNav>
          <BotonNav
            onClick={() => {
              setOpcion(3);
              obtenerCursos();
            }}
            seleccionado={opcion == 3 ? "true" : "false"}
          >
            <ImgIcon menu={"true"} icon={faGraduationCap} />
            Cursos
          </BotonNav>
          <BotonNav onClick={abrirExeVerificar}>
            <ImgIcon menu={"true"} icon={faClipboardList} />
            Control asistencia
          </BotonNav>
        </ContainerBotonNav>
      </Nav>
      <ContainerPrincipal ocultar={ocultar}>
        {opcion === 0 && (
          <ContainerImagenCentro>
            <ImagenLogoCentro src={require("../Imagenes/Logo.png")} />
          </ContainerImagenCentro>
        )}
        {opcion === 1 && (
          <>
            <ContainerContenido>
              <TituloLateral>Registro de estudiantes</TituloLateral>
              <ContainerLateral>
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
                </ContainerPasosLateral>
              </ContainerLateral>
              {!seSubio && (
                <ContainerRegistro>
                  <BotonSiguientePasos
                    ocultar={opcionPasos === 1 ? "true" : "false"}
                    onClick={atrasPasoRegistro}
                  >
                    <ImgIcon icon={faAngleLeft} />
                  </BotonSiguientePasos>
                  {opcionPasos == 1 && (
                    <ContainerTodo>
                      <Titulo>Datos del estudiante</Titulo>
                      <ContainerDatos>
                        <InputValidar
                          estado={nombre}
                          cambiarEstado={setNombre}
                          tipo="text"
                          label="Nombre:"
                          placeholder="Nombre"
                          name="nombreEstudiante"
                          expresionRegular={expresiones.nombre}
                        />
                        <InputValidar
                          estado={apellido}
                          cambiarEstado={setApellido}
                          tipo="text"
                          label="Apellido:"
                          placeholder="Apellido"
                          name="apellidoEstudiante"
                          expresionRegular={expresiones.nombre}
                        />

                        <InputValidar
                          estado={fechaNacimientoEstudiante}
                          cambiarEstado={setFechaNacimientoEstudiante}
                          tipo="date"
                          label="Fecha nacimiento:"
                          placeholder="Fecha nacimiento"
                          name="fechaNacimientoEstudiante"
                          expresionRegular={{}}
                        />
                        <InputValidar
                          estado={direccion}
                          cambiarEstado={setDireccion}
                          tipo="text"
                          label="Direccion:"
                          placeholder="Direccion"
                          name="Direccion"
                          expresionRegular={expresiones.lugar}
                        />
                        <BoxCampo>
                          <TextBox>Residencia:</TextBox>
                        </BoxCampo>
                        <InputValidar
                          sub={"true"}
                          estado={pais}
                          cambiarEstado={setPais}
                          tipo="text"
                          label="Pais:"
                          placeholder="Pais"
                          name="Pais"
                          expresionRegular={expresiones.nombre}
                        />
                        <InputValidar
                          sub={"true"}
                          estado={departamento}
                          cambiarEstado={setDepartamento}
                          tipo="text"
                          label="Departamento:"
                          name="Departamento"
                          placeholder="Departamento"
                          expresionRegular={expresiones.nombre}
                        />
                        <InputValidar
                          sub={"true"}
                          estado={ciudad}
                          cambiarEstado={setCiudad}
                          tipo="text"
                          label="Cuidad:"
                          name="Cuidad"
                          placeholder="Cuidad"
                          expresionRegular={expresiones.nombre}
                        />
                        <BoxCampo>
                          <TextBox>Estudios:</TextBox>
                        </BoxCampo>
                        <InputValidar
                          sub={"true"}
                          estado={colegio}
                          cambiarEstado={setColegio}
                          tipo="text"
                          label="Colegio:"
                          placeholder="Colegio"
                          name="Colegio"
                          expresionRegular={expresiones.lugar}
                        />
                        <SelectInput
                          sub={"true"}
                          estado={turno}
                          cambiarEstado={setTurno}
                          label="Turno:"
                          name="Turno"
                        />
                        <SelectInput
                          sub={"true"}
                          estado={curso}
                          cambiarEstado={setCurso}
                          label="Curso:"
                          name="curso"
                        />
                        <SelectInput
                          sub={"true"}
                          estado={tipoColegio}
                          cambiarEstado={setTipoColegio}
                          label="Tipo colegio:"
                          name="tipoColegio"
                        />
                        <SelectInput
                          estado={generoEstudiante}
                          cambiarEstado={setGeneroEstudiante}
                          label="Genero:"
                          name="genero"
                          ultimo="true"
                        />
                      </ContainerDatos>
                    </ContainerTodo>
                  )}
                  {opcionPasos == 2 && (
                    <ContainerTodo>
                      <Titulo>Datos del tutor</Titulo>
                      <ContainerDatos>
                        <InputValidar
                          estado={nombreTutor}
                          cambiarEstado={setNombreTutor}
                          tipo="text"
                          label="Nombre:"
                          placeholder="Nombre"
                          name="nombreTutor"
                          expresionRegular={expresiones.nombre}
                        />
                        <InputValidar
                          estado={apellidoTutor}
                          cambiarEstado={setApellidoTutor}
                          tipo="text"
                          label="Apellido:"
                          placeholder="Apellido"
                          name="apellidoTutor"
                          expresionRegular={expresiones.nombre}
                        />
                        <InputValidar
                          estado={fechaNacimientoTutor}
                          cambiarEstado={setFechaNacimientoTutor}
                          tipo="date"
                          label="Fecha nacimiento:"
                          placeholder="Fecha nacimiento"
                          name="fechaNacimientoTutor"
                          expresionRegular={{}}
                        />
                        <InputValidar
                          estado={celularTutor}
                          cambiarEstado={setCelularTutor}
                          tipo="number"
                          label="Celular:"
                          placeholder="Celular"
                          name="CelularTutor"
                          expresionRegular={expresiones.telefono}
                        />
                        <InputValidar
                          estado={correoTutor}
                          cambiarEstado={setCorreoTutor}
                          tipo="email"
                          label="Correo electronico:"
                          placeholder="Correo electronico"
                          name="Correo electronico del tutor"
                          expresionRegular={expresiones.correo}
                        />
                        <InputValidar
                          estado={ocupacionTutor}
                          cambiarEstado={setOcupacionTutor}
                          tipo="text"
                          label="Ocupacion:"
                          placeholder="Ocupacion"
                          name="ocupacionTutor"
                          expresionRegular={expresiones.nombre}
                        />
                        <SelectInput
                          estado={relacion}
                          cambiarEstado={setRelacion}
                          label="Relacion:"
                          name="curso"
                        />
                        <SelectInput
                          estado={generoTutor}
                          cambiarEstado={setGeneroTutor}
                          label="Genero:"
                          name="genero"
                          ultimo="true"
                        />
                      </ContainerDatos>
                    </ContainerTodo>
                  )}
                  {opcionPasos == 3 && (
                    <ContainerTodo>
                      <Titulo>Registro de cursos</Titulo>
                      <ContainerDatos>
                        <SelectCurso
                          sub={"true"}
                          estado={cursoRegistrados}
                          cambiarEstado={setCursoRegistrados}
                          label="Cursos:"
                          name="cursos"
                          dato={listaCursos}
                        />
                        <SelectGrupo
                          sub={"true"}
                          estado={grupo}
                          cambiarEstado={setGrupo}
                          label="Grupos:"
                          name="grupos"
                          dato={cursoRegistrados.campo}
                        />
                      </ContainerDatos>
                      <Titulo>Registro de huella</Titulo>
                      <ContainerDatos>
                        <Texto>{nombre.campo + " " + apellido.campo}</Texto>
                        <Texto>
                          {calcularEdad(fechaNacimientoEstudiante.campo) +
                            " Años"}
                        </Texto>
                        <ContainerHuella
                          disabled={habilitarHuella}
                          onClick={() => {
                            setImagenHuella(
                              require("../Imagenes/HuellaEscaneando.png")
                            );
                            setHabilitarHuella(true);
                            setEscaneando(true);
                            abrirExe();
                          }}
                        >
                          {escaneando && (
                            <BarraEscaneo escaneando={escaneando} />
                          )}
                          <ImagenHuella
                            src={imagenHuella}
                            escaneando={escaneando}
                          />
                        </ContainerHuella>
                      </ContainerDatos>
                    </ContainerTodo>
                  )}
                  <BotonSiguientePasos onClick={siguientePasoRegistro}>
                    <ImgIcon icon={faAngleRight} />
                  </BotonSiguientePasos>
                </ContainerRegistro>
              )}
              {seSubio && (
                <ContainerRegistro>
                  <ContainerCarga>
                    <ImagenCarga src={require("../Imagenes/Carga.gif")} />
                  </ContainerCarga>
                </ContainerRegistro>
              )}
            </ContainerContenido>
          </>
        )}
        {opcion === 2 && (
          <ContainerContenido>
            <TituloLateral>Listas</TituloLateral>
            <ContainerLateral>
              <ContainerBotonLista>
                <PasosLateral
                  onClick={obtenerListaEstudiantes}
                  seleccionado={lista == 1 ? "true" : "false"}
                >
                  Estudiantes
                </PasosLateral>
                <LineaLista />
                <PasosLateral
                  onClick={obtenerListaTutores}
                  seleccionado={lista == 2 ? "true" : "false"}
                >
                  Tutores
                </PasosLateral>
              </ContainerBotonLista>
            </ContainerLateral>
            <ContainerRegistro>
              {!carga && (
                <>
                  {lista == 1 && (
                    <>
                      <ContainerTodo
                        lista={"true"}
                        cantidad={listaEstudiantes.length}
                      >
                        <ContainerTituloBusqueda>
                          <Titulo>Listas de estudiantes</Titulo>
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
                        </ContainerTituloBusqueda>
                        <ContainerDatos>
                          <ContainerTabla>
                            <Table>
                              <TableHead>
                                <TableRow>
                                  <TableCell className={classes.celdas}>
                                    Nº
                                  </TableCell>
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
                                    OPCIONES
                                  </TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {listaEstudiantes.map((estudiante) => {
                                  return (
                                    <TableRow className={classes.fila}>
                                      <TableCell className={classes.texto}>
                                        {(cantidad = cantidad + 1)}
                                      </TableCell>
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
                                            setModalInformacion(true);
                                            setOcultar("true");
                                            setEstudianteElegido(estudiante);
                                            setTipo("Estudiante");
                                          }}
                                        >
                                          <ImgIcon
                                            tabla={"true"}
                                            icon={faInfo}
                                          />
                                        </ContainerImgIcon>
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
                        </ContainerDatos>
                      </ContainerTodo>
                    </>
                  )}
                  {lista == 2 && (
                    <>
                      <ContainerTodo
                        lista={"true"}
                        cantidad={listaTutores.length}
                      >
                        <ContainerTituloBusqueda>
                          <Titulo>Listas de estudiantes</Titulo>
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
                        </ContainerTituloBusqueda>
                        <ContainerDatos>
                          <ContainerTabla>
                            <Table>
                              <TableHead>
                                <TableRow>
                                  <TableCell className={classes.celdas}>
                                    Nº
                                  </TableCell>
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
                                    OPCIONES
                                  </TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {listaTutores.map((tutor) => {
                                  return (
                                    <TableRow className={classes.fila}>
                                      <TableCell className={classes.texto}>
                                        {(cantidad = cantidad + 1)}
                                      </TableCell>
                                      <TableCell className={classes.texto}>
                                        {tutor.CODTUTOR}
                                      </TableCell>
                                      <TableCell className={classes.texto}>
                                        {tutor.NOMBRETUTOR}
                                      </TableCell>
                                      <TableCell className={classes.texto}>
                                        {tutor.APELLIDOTUTOR}
                                      </TableCell>
                                      <TableCell className={classes.opciones}>
                                        <ContainerImgIcon
                                          onClick={() => {
                                            setModalInformacion(true);
                                            setOcultar("true");
                                            setEstudianteElegido(tutor);
                                            setTipo("Tutor");
                                          }}
                                        >
                                          <ImgIcon
                                            tabla={"true"}
                                            icon={faInfo}
                                          />
                                        </ContainerImgIcon>
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
                        </ContainerDatos>
                      </ContainerTodo>
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
        {opcion === 3 && (
          <ContainerContenido>
            <TituloLateral>Cursos</TituloLateral>
            <ContainerRegistro>
              <ContainerTodo lista={"true"} cantidad={listaCursos.length}>
                <ContainerTituloBusqueda>
                  <Titulo>Listas de estudiantes</Titulo>
                  <ContainerBotonBusqueda>
                    <BotonBuscar
                      onClick={() => {
                        setModalAñadirCurso(true);
                        setOcultar("true");
                      }}
                    >
                      <ImgIcon buscar={"true"} icon={faAdd} />
                    </BotonBuscar>
                  </ContainerBotonBusqueda>
                </ContainerTituloBusqueda>
                <ContainerDatos>
                  <ContainerTabla>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell className={classes.celdas}>Nº</TableCell>
                          <TableCell className={classes.celdas}>
                            CODIGO
                          </TableCell>
                          <TableCell className={classes.celdas}>
                            CURSO
                          </TableCell>
                          <TableCell className={classes.celdas}>
                            DURACION
                          </TableCell>
                          <TableCell align="center" className={classes.celdas}>
                            GRUPOS
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {listaCursos.map((curso) => {
                          return (
                            <TableRow className={classes.fila}>
                              <TableCell className={classes.texto}>
                                {(cantidad = cantidad + 1)}
                              </TableCell>
                              <TableCell className={classes.texto}>
                                {curso.CODCURSO}
                              </TableCell>
                              <TableCell className={classes.texto}>
                                {curso.CURSO}
                              </TableCell>
                              <TableCell className={classes.texto}>
                                {curso.DURACIONCURSO + " Meses"}
                              </TableCell>
                              <TableCell className={classes.opciones}>
                                <ContainerImgIcon
                                  onClick={() => {
                                    setModalVerGrupo(true);
                                    setOcultar("true");
                                    setGrupoEscogido(curso);
                                  }}
                                >
                                  <ImgIcon
                                    tabla={"true"}
                                    icon={faGraduationCap}
                                  />
                                </ContainerImgIcon>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </ContainerTabla>
                </ContainerDatos>
              </ContainerTodo>
            </ContainerRegistro>
          </ContainerContenido>
        )}
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
      <ModalAñadirCurso
        estado={modalAñadirCurso}
        cambiarEstado={setModalAñadirCurso}
        ocultar={setOcultar}
      />
      <ModalVerGrupo
        estado={modalVerGrupo}
        cambiarEstado={setModalVerGrupo}
        ocultar={setOcultar}
        datos={grupoEscogido}
      />
    </GlobalStyle>
  );
}
