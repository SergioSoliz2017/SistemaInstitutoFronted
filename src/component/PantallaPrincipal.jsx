import React from "react";
import { url } from "./VariableEntornos";
import { GlobalStyle } from "./DiseñosInicio";
import toast, { Toaster } from "react-hot-toast";
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
  PasosLateral,
  BotonSiguientePasos,
  ImgIcon,
  ContainerDatos,
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
  InputBusqueda,
  IconoBuscar,
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
  faSearch,
  fa4,
  faXmark,
  faAdd,
  faFilePen,
  faListSquares,
  faGraduationCap,
  faListCheck,
  faPercent,
  faMoneyBill,
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
  TablePagination,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
import SelectCurso from "./SelectCurso";
import SelectGrupo from "./SelectGrupo";
import ModalTutor from "./ModalTutor";
import ModalAñadirTutor from "./ModalAñadirTutor";
import ModalInformacion from "./ModalInformacion";
import {
  BoxCampo,
  IconoDescuento,
  InputBox,
  TextBox,
  TextPrecio,
} from "./DiseñoInputValidar";
import ModalAñadirCurso from "./ModalAñadirCurso";
import ModalVerGrupo from "./ModalVerGrupo";
import { DetalleUsuario } from "./DiseñoModalEdit";
import FilaTabla from "./FilaTablaEstudiante";
import FilaTablaTutor from "./FilaTablaTutor";
import { Select } from "./DiseñoSelectDescuento";
import Modal from "./Modal";
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
  const [celularTutor2, setCelularTutor2] = useState({
    campo: "",
    valido: null,
  });
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
  const [sede, setSede] = useState("QUILLACOLLO");

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
      if (listaCursosRes.length === 0) {
        esValido = false;
        toast("Agregar curso", {
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
    if (opcionPasos === 4) {
      if (!huellaEscaneada) {
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
  const [respuesta, setRespuesta] = useState("");
  const siguientePasoRegistro = () => {
    if (opcionPasos + 1 < 5) {
      if (esValido()) {
        if (opcionPasos + 1 == 2) {
          if (!tutorSi) {
            setModal(true);
            setOcultar("true");
          } else {
            if (respuesta === "Existe") {
              setActualizo(true);
              setOpcionPasos(opcionPasos + 2);
            } else {
              setOpcionPasos(opcionPasos + 1);
            }
          }
        } else {
          if (opcionPasos + 1 == 3) {
            obtenerCursos();
            obtenerDescuento();
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
  const [horarios, setHorarios] = useState([]);
  const obtenerCursos = () => {
    axios.get(url + "obtenerCursos").then((response) => {
      setListaCursos(response.data);
      setActualizo(false);
    });
  };
  const atrasPasoRegistro = () => {
    if (opcionPasos - 1 > 0) {
      if (opcionPasos - 1 === 2 && respuesta === "Existe") {
        setOpcionPasos(1);
      } else {
        setOpcionPasos(opcionPasos - 1);
      }
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
      const dataCurso = {
        CODESTUDIANTE: estudiante.CODESTUDIANTE,
        LISTACURSOS: listaCursosRes,
      };
      axios.post(url + "agregarCursoInscrito", dataCurso).then((response) => {
        setSeSubio(false);
        borrarDatos();
        setImagenHuella(require("../Imagenes/EscanearHuella.png"));
        setRegistro("registrado");
        setModal(true);
        setOcultar("true");
      });
    });
  };
  function sumar () {
    const suma = listaCursosRes.reduce((total, curso) => total + parseFloat(curso.PRECIO), 0);
    return suma
  } 
  function subirBaseDatos() {
    var codigoEstudiante = generarCodigoEstudiante();
    var codigoTutor = generarCodigoTutor();
    var codigoInscripcion = generarCodInscripcion();
    const hoy = new Date().toLocaleDateString();
    var precioTotal = sumar()
    console.log(precioTotal)
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
      COSTOINSCRIPCION:precioTotal,
      SEDE: sede,
    };
    const tutor = {
      CODTUTOR: codigoTutor,
      NOMBRETUTOR: nombreTutor.campo,
      FECHANACIMIENTOTUTOR: fechaNacimientoTutor.campo,
      CELULARTUTOR: celularTutor.campo,
      APELLIDOTUTOR: apellidoTutor.campo,
      CELULARALTERNATIVO: celularTutor2.campo,
      GENEROTUTOR: generoTutor.campo,
      OCUPACION: ocupacionTutor.campo,
      CORREO: correoTutor.campo,
      RELACION: relacion.campo,
      ESTADO: "Activo",
    };
    const EstudianteTutor = {
      estudiante_id: codigoEstudiante,
      tutor_id: respuesta !== "Existe"? codigoTutor : tutorSeleccionado.CODTUTOR,
    };
    axios.post(url + "agregarEstudiante", estudiante).then((response) => {
      if (respuesta === "Existe"){
        agregarTodo(estudiante,EstudianteTutor );
      }else{
        axios.post(url + "agregarTutor", tutor).then((response) => {
            agregarTodo(estudiante, EstudianteTutor);
          });
      }
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
    setListaCursosRes([])
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
  const [precio, setPrecio] = useState("");
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
  const [elegido, setElegido] = useState([]);
  const [buscar, setBuscar] = useState("");
  const [buscarTutor, setBuscarTutor] = useState("");
  const [modalTutor, setModalTutor] = useState(false);
  const [modalAñadirCurso, setModalAñadirCurso] = useState(false);
  const [seActualizo, setActualizo] = useState(false);
  const [modalAñadirTutor, setAñadirTutor] = useState(false);
  const [descuento, setDescuento] = useState("");
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (opcion === 2) {
      if (lista === 1) {
        axios.get(url + "obtenerEstudiantes").then((response) => {
          if (response.data.length > 0) {
            setCarga(false);
            setActualizo(false);
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
            setActualizo(false);
            setListaTutores(response.data);
          } else {
            setCarga(false);
          }
        });
      }
    }
    if (opcion === 3 && seActualizo) {
      obtenerCursos();
    }
    if (opcion === 1 && !modal) {
      if (respuesta === "Si") {
        setNombreTutor({ campo: "", valido: null });
        setApellidoTutor({ campo: "", valido: null });
        setFechaNacimientoTutor({ campo: "", valido: null });
        setGeneroTutor("");
        setOpcionPasos(opcionPasos + 1);
        setTutorSi(true);
      }
      if (respuesta === "No") {
        setRelacion({ campo: "No tiene", valido: "true" });
        setNombreTutor(nombre);
        setApellidoTutor(apellido);
        setFechaNacimientoTutor(fechaNacimientoEstudiante);
        setGeneroTutor(generoEstudiante);
        setOpcionPasos(opcionPasos + 1);
        setTutorSi(true);
      }
      if (respuesta === "Existe") {
        setOpcionPasos(opcionPasos + 2);
        setTutorSi(true);
      }
    }
    if (opcion === 1 && respuesta === "Existe") {
      obtenerCursos();
      obtenerDescuento();
    }
  }, [
    editEstudiante,
    modalTutor,
    modalAñadirCurso,
    seActualizo,
    modalAñadirTutor,
    modal,
  ]);
  const [listaDescuento, setListaDescuento] = useState([]);
  const [ocultar, setOcultar] = useState("false");

  const [modalInformacion, setModalInformacion] = useState(false);
  const [tipo, setTipo] = useState("");

  const [habilitarHuella, setHabilitarHuella] = useState(false);
  const [huellaEscaneada, setHuellaEscaneada] = useState(false);
  const abrirExe = () => {
    try {
      axios
        .post(url + "ejecutar-exe", {
          CODESTUDIANTE: generarCodigoEstudiante(),
        })
        .then((response) => {
          if (response.data == "Existe") {
            setHuellaEscaneada(true);
            setImagenHuella(require("../Imagenes/HuellaRegistrada.png"));
          } else {
            setHabilitarHuella(false);
            setImagenHuella(require("../Imagenes/HuellaNoRegistrada.png"));
          }
          setEscaneando(false);
        });
    } catch (error) {
      console.error("Error de red", error);
    }
  };

  const abrirExeVerificar = () => {
    try {
      setOpcion(0);
      axios
        .post(url + "ejecutar-exe-verificar", { SEDE: sede })
        .then((response) => {});
    } catch (error) {
      console.error("Error de red", error);
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
  const [pagina, setPagina] = useState(0);
  const [rowPerPage, setRowPerPage] = useState(5);
  const [paginaTutor, setPaginaTutor] = useState(0);
  const [rowPerPageTutor, setRowPerPageTutor] = useState(5);

  const cambiarPagina = (event, newpage) => {
    setPagina(newpage);
  };
  const cambiarPerPage = (event) => {
    setRowPerPage(+event.target.value);
    setPagina(0);
  };
  const cambiarPaginaTutor = (event, newpage) => {
    setPaginaTutor(newpage);
  };
  const cambiarPerPageTutor = (event) => {
    setRowPerPageTutor(+event.target.value);
    setPaginaTutor(0);
  };

  let listaResTutor = [];
  if (!buscarTutor) {
    listaResTutor = listaTutores;
  } else {
    const searchWords = buscarTutor.trim().toLowerCase().split(" ");
    listaResTutor = listaTutores.filter((dato) => {
      const campos = [
        dato.NOMBRETUTOR,
        dato.APELLIDOTUTOR,
        dato.RELACION,
        dato.OCUPACION,
        dato.GENEROTUTOR,
      ]
        .join(" ")
        .toLowerCase();
      return searchWords.every((word) => campos.includes(word));
    });
  }

  let listaRes = [];
  if (!buscar) {
    listaRes = listaEstudiantes;
  } else {
    const searchWords = buscar.trim().toLowerCase().split(" ");
    listaRes = listaEstudiantes.filter((dato) => {
      const campos = [
        dato.CODESTUDIANTE,
        dato.NOMBREESTUDIANTE,
        dato.APELLIDOESTUDIANTE,
        dato.COLEGIO,
        dato.TIPOCOLEGIO,
        dato.GENEROESTUDIANTE
      ]
        .join(" ")
        .toLowerCase();
      return searchWords.every((word) => campos.includes(word));
    });
  }

  const obtenerDescuento = () => {
    axios.get(url + "obtenerDescuento").then((des) => {
      setListaDescuento(des.data);
    });
  };
  const [listaCursosRes, setListaCursosRes] = useState([]);

  const [precioConDescuento, setPrecioConDescuento] = useState(null);

  const handleDescuentoChange = (valor, porcentaje, cantidad) => {
    setDescuento(valor);
    setPrecio(
      listaCursos.find((curso) => curso.CODCURSO === cursoRegistrados.campo)
        ?.PRECIO
    );
    if (hayDescuento) {
      if (!isNaN(cantidad) && cantidad !== "" && cantidad >= 0) {
        const descuentoNumerico = parseFloat(cantidad);
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
    } else {
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
    }
  };
  const [esPorcentaje, setEsPorcentaje] = useState(true);
  const [hayDescuento, setHayDescuento] = useState(true);
  const [tutorSeleccionado, setTutorSeleccionado] = useState(null);
  const [registro, setRegistro] = useState("tutor");

  const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

  // Utiliza un objeto para almacenar un array de cursos por cada hora
  const cursosPorHora = {};
  horarios.forEach((horario) => {
    if (!cursosPorHora[horario.HORA]) {
      cursosPorHora[horario.HORA] = [];
    }
    cursosPorHora[horario.HORA].push({
      dia: horario.DIA,
      curso: horario.CURSO,
      grupo: horario.GRUPO,
    });
  });

  const filas = Object.entries(cursosPorHora).map(([hora, cursos]) => (
    <TableRow className={classes.fila} key={hora}>
      <TableCell className={classes.texto}>{hora.slice(0, 5)}</TableCell>
      {diasSemana.map((dia) => (
        <TableCell className={classes.texto} key={dia}>
          {/* Muestra todos los cursos para la misma hora y día */}
          {cursos
            .filter((curso) => curso.dia === dia)
            .map((curso, index) => (
              <div key={index}>
                {curso.curso} {curso.grupo}
              </div>
            ))}
        </TableCell>
      ))}
    </TableRow>
  ));

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
              setActualizo(true);
              //obtenerCursos();
            }}
            seleccionado={opcion == 3 ? "true" : "false"}
          >
            <ImgIcon menu={"true"} icon={faGraduationCap} />
            Cursos
          </BotonNav>
          <BotonNav
            onClick={() => {
              abrirExeVerificar();
            }}
          >
            <ImgIcon menu={"true"} icon={faListCheck} />
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
                    <ContainerTodo cursos={"false"}>
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
                          label="Direccion (opcional):"
                          placeholder="Direccion"
                          name="Direccion"
                          expresionRegular={expresiones.lugar}
                          opcional={true}
                        />
                        <BoxCampo>
                          <TextBox titulo={"true"}>
                            Residencia (opcional):
                          </TextBox>
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
                          opcional={true}
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
                          opcional={true}
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
                          opcional={true}
                        />
                        <BoxCampo>
                          <TextBox titulo={"true"}>
                            Estudios (opcional):
                          </TextBox>
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
                          opcional={true}
                        />
                        <SelectInput
                          sub={"true"}
                          estado={turno}
                          cambiarEstado={setTurno}
                          label="Turno:"
                          name="Turno"
                          opcional={true}
                        />
                        <SelectInput
                          sub={"true"}
                          estado={curso}
                          cambiarEstado={setCurso}
                          label="Curso:"
                          name="curso"
                          opcional={true}
                        />
                        <SelectInput
                          sub={"true"}
                          estado={tipoColegio}
                          cambiarEstado={setTipoColegio}
                          label="Tipo colegio:"
                          name="tipoColegio"
                          opcional={true}
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
                    <ContainerTodo cursos={"tutor"}>
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
                          label="Celular (opcional):"
                          placeholder="Celular"
                          name="CelularTutor"
                          expresionRegular={expresiones.telefono}
                          opcional={true}
                        />
                        <InputValidar
                          estado={celularTutor2}
                          cambiarEstado={setCelularTutor2}
                          tipo="number"
                          label="Celular (Alternativo):"
                          placeholder="Celular"
                          name="CelularTutor"
                          expresionRegular={expresiones.telefono}
                          opcional={true}
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
                          label="Ocupacion (opcional):"
                          placeholder="Ocupacion"
                          name="ocupacionTutor"
                          expresionRegular={expresiones.nombre}
                          opcional={true}
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
                    <ContainerTodo cursos={"true"}>
                      <Titulo>Registro de cursos</Titulo>
                      <ContainerDatos>
                        <DetalleUsuario>
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
                            <TextBox>Precio</TextBox>
                            <TextPrecio>
                              {precioConDescuento !== null
                                ? precioConDescuento
                                : listaCursos.find(
                                    (curso) =>
                                      curso.CODCURSO === cursoRegistrados.campo
                                  )?.PRECIO}{" "}
                              {" Bs."}
                            </TextPrecio>
                          </BoxCampo>
                          {hayDescuento && (
                            <BoxCampo curso={"true"}>
                              <TextBox>Descuento</TextBox>
                              <Select
                                id={descuento}
                                value={descuento}
                                onChange={(e) => {
                                  if (e.target.value !== "Otro") {
                                    const descuentoSeleccionado =
                                      listaDescuento.find(
                                        (descuento) =>
                                          descuento.CODDESCUENTO ===
                                          e.target.value
                                      );
                                    handleDescuentoChange(
                                      e.target.value,
                                      descuentoSeleccionado.TIPO ===
                                        "Porcentaje"
                                        ? true
                                        : false,
                                      descuentoSeleccionado.CANTIDAD
                                    );
                                  } else {
                                    setHayDescuento(false);
                                  }
                                }}
                              >
                                <option value="">Seleccionar descuento</option>
                                {listaDescuento.map((descuento) => (
                                  <option
                                    key={descuento.CODDESCUENTO}
                                    value={descuento.CODDESCUENTO}
                                  >
                                    {descuento.NOMBREDESCUENTO}{" "}
                                    {descuento.TIPO === "Porcentaje"
                                      ? descuento.CANTIDAD + " %"
                                      : descuento.CANTIDAD + " Bs."}
                                  </option>
                                ))}
                                <option value="Otro">Otro</option>
                              </Select>
                            </BoxCampo>
                          )}
                          {!hayDescuento && (
                            <BoxCampo precio={"true"}>
                              <TextBox>
                                Descuento{" "}
                                <ContainerImgIcon precio={"true"}>
                                  <IconoDescuento
                                    onClick={() => {
                                      handleDescuentoChange(
                                        descuento,
                                        !esPorcentaje
                                      );
                                      setEsPorcentaje(!esPorcentaje);
                                    }}
                                    icon={
                                      esPorcentaje ? faPercent : faMoneyBill
                                    }
                                  />
                                </ContainerImgIcon>
                              </TextBox>
                              <InputBox
                                type="number"
                                placeholder="Descuento"
                                value={descuento}
                                onChange={(e) =>
                                  handleDescuentoChange(
                                    e.target.value,
                                    esPorcentaje
                                  )
                                }
                              />
                            </BoxCampo>
                          )}
                          <BoxCampo boton={"true"}>
                            <ContainerBotonBusqueda add={"true"}>
                              <BotonBuscar
                                onClick={() => {
                                  if (cursoRegistrados.campo !== "" && grupo.campo !== ""){
                                    var cursoTemp = {
                                      NOMBRECURSO: cursoRegistrados.texto,
                                      GRUPOCURSO: grupo.campo,
                                      CODCURSO: cursoRegistrados.campo,
                                      SEDE: sede,
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
                                    axios
                                      .get(url + "obtenerHorario")
                                      .then((response) => {
                                        // Asegúrate de que los datos estén en response.data
                                        setHorarios((prevHorarios) => [
                                          ...prevHorarios,
                                          ...response.data.filter(
                                            (item) =>
                                              item.CODSEDE === cursoTemp.SEDE &&
                                              item.GRUPO ===
                                                cursoTemp.GRUPOCURSO &&
                                              item.CODCURSO === cursoTemp.CODCURSO
                                          ),
                                        ]);
                                      });
                                      setCursoRegistrados({
                                        campo: "",
                                        valido: null,
                                      })
                                      setGrupo({ campo: "", valido: null })
                                      setDescuento("")
                                      setPrecioConDescuento(null)
                                  }else{
                                    toast(cursoRegistrados.campo === "" ? "Seleccionar curso":"Seleccionar grupo" , {
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
                                }}
                              >
                                <ImgIcon buscar={"true"} icon={faAdd} />
                              </BotonBuscar>
                            </ContainerBotonBusqueda>
                          </BoxCampo>
                          <ContainerTabla cursos={"true"}>
                            <Table>
                              <TableHead>
                                <TableRow>
                                  <TableCell className={classes.celdas}>
                                    Hora
                                  </TableCell>
                                  {diasSemana.map((dia) => (
                                    <TableCell
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
                        </DetalleUsuario>
                      </ContainerDatos>
                    </ContainerTodo>
                  )}
                  {opcionPasos == 4 && (
                    <ContainerTodo>
                      <Titulo>Registro de huella</Titulo>
                      <ContainerDatos>
                        {!huellaEscaneada && (
                          <Texto>
                            Presione para registrar los datos biometricos de:{" "}
                            {nombre.campo + " " + apellido.campo}
                          </Texto>
                        )}
                        {huellaEscaneada && (
                          <Texto>
                            Se registraron los datos biometricos de:{" "}
                            {nombre.campo + " " + apellido.campo}{" "}
                            {" correctamente"}
                          </Texto>
                        )}
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
                      <ContainerTodo lista={"true"}>
                        <ContainerTituloBusqueda>
                          <BoxCampo buscar={"true"}>
                            <InputBusqueda
                              value={buscar}
                              onChange={(e) => {
                                setBuscar(e.target.value);
                              }}
                            />
                            <IconoBuscar icon={faSearch} />
                          </BoxCampo>
                        </ContainerTituloBusqueda>
                        <ContainerDatos>
                          <>
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
                                  {listaRes
                                    .slice(
                                      pagina * rowPerPage,
                                      pagina * rowPerPage + rowPerPage
                                    )
                                    .map((estudiante, index) => {
                                      const rowNum =
                                        pagina * rowPerPage + index + 1;
                                      return (
                                        <FilaTabla
                                          key={estudiante.CODESTUDIANTE}
                                          estudiante={estudiante}
                                          modalInformacion={setModalInformacion}
                                          ocultar={setOcultar}
                                          estudianteElegido={setElegido}
                                          tipo={setTipo}
                                          actualizo={setActualizo}
                                          cantidad={rowNum}
                                        />
                                      );
                                    })}
                                </TableBody>
                              </Table>
                            </ContainerTabla>
                            <TablePagination
                              rowsPerPageOptions={[5, 10, 15, 20]}
                              rowsPerPage={rowPerPage}
                              page={pagina}
                              count={listaEstudiantes.length}
                              component="div"
                              onPageChange={cambiarPagina}
                              onRowsPerPageChange={cambiarPerPage}
                              labelRowsPerPage="Filas por página:"
                              labelDisplayedRows={({ from, to, count }) =>
                                `${from}-${to} de ${count}`
                              }
                              style={{
                                display: "flex",
                                position: "absolute",
                                bottom: "1px",
                                justifyContent: "center",
                                width: "72%",
                              }}
                            />
                          </>
                        </ContainerDatos>
                      </ContainerTodo>
                    </>
                  )}
                  {lista == 2 && (
                    <>
                      <ContainerTodo lista={"true"}>
                        <ContainerTituloBusqueda>
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
                          <BoxCampo buscar={"true"}>
                            <InputBusqueda
                              value={buscarTutor}
                              onChange={(e) => {
                                setBuscarTutor(e.target.value);
                              }}
                            />
                            <IconoBuscar icon={faSearch} />
                          </BoxCampo>
                        </ContainerTituloBusqueda>
                        <ContainerDatos>
                          <>
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
                                  {listaResTutor
                                    .slice(
                                      paginaTutor * rowPerPageTutor,
                                      paginaTutor * rowPerPageTutor +
                                        rowPerPageTutor
                                    )
                                    .map((tutor, index) => {
                                      const rowNumTutor =
                                        paginaTutor * rowPerPageTutor +
                                        index +
                                        1;
                                      return (
                                        <FilaTablaTutor
                                          tutor={tutor}
                                          modalInformacion={setModalInformacion}
                                          ocultar={setOcultar}
                                          tutorElegido={setElegido}
                                          tipo={setTipo}
                                          actualizo={setActualizo}
                                          cantidad={rowNumTutor}
                                          modalTutor={setModalTutor}
                                        />
                                      );
                                    })}
                                </TableBody>
                              </Table>
                            </ContainerTabla>
                            <TablePagination
                              rowsPerPageOptions={[5, 10, 15, 20]}
                              rowsPerPage={rowPerPageTutor}
                              page={paginaTutor}
                              count={listaTutores.length}
                              component="div"
                              labelRowsPerPage="Filas por página:"
                              onPageChange={cambiarPaginaTutor}
                              onRowsPerPageChange={cambiarPerPageTutor}
                              labelDisplayedRows={({ from, to, count }) =>
                                `${from}-${to} de ${count}`
                              }
                              style={{
                                display: "flex",
                                position: "absolute",
                                bottom: "1px",
                                justifyContent: "center",
                                width: "72%",
                              }}
                            />
                          </>
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
                  <ContainerTabla cursos={"false"}>
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
                          <TableCell align="center" className={classes.celdas}>
                            ELIMINAR
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
                                  <ImgIcon icon={faGraduationCap} />
                                </ContainerImgIcon>
                              </TableCell>
                              <TableCell className={classes.texto}>
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

                                          const cursoEliminar = {
                                            CODSEDE: curso.CODSEDE,
                                            CODCURSO: curso.CODCURSO,
                                          };
                                          axios
                                            .delete(url + "eliminarCurso", {
                                              data: cursoEliminar,
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
      <ModalTutor
        estado={modalTutor}
        cambiarEstado={setModalTutor}
        datos={elegido}
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
        datos={elegido}
        tipo={tipo}
        actualizo={setActualizo}
      />
      <ModalAñadirCurso
        estado={modalAñadirCurso}
        cambiarEstado={setModalAñadirCurso}
        ocultar={setOcultar}
        actualizar={setActualizo}
      />
      <ModalVerGrupo
        estado={modalVerGrupo}
        cambiarEstado={setModalVerGrupo}
        ocultar={setOcultar}
        datos={grupoEscogido}
      />
      <Modal
        estado={modal}
        cambiarEstado={setModal}
        ocultar={setOcultar}
        respuesta={respuesta}
        setRespuesta={setRespuesta}
        actualizo={setActualizo}
        tutorDatos={setTutorSeleccionado}
        tipo={registro}
        setTipo={setRegistro}
        data={listaCursosRes}
      />
    </GlobalStyle>
  );
}
