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
} from "@fortawesome/free-solid-svg-icons";
import alerta from "sweetalert2";
import SelectInput from "./SelectValidar";
import axios from "axios";

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
  //datosExtras
  const [direccion, setDireccion] = useState({ campo: "", valido: null });
  const [colegio, setColegio] = useState({ campo: "", valido: null });
  const [turno, setTurno] = useState({ campo: "", valido: null });
  const [curso, setCurso] = useState({ campo: "", valido: null });
  const [tipoColegio, setTipoColegio] = useState({ campo: "", valido: null });
  //carga
  const [seSubio, setSeSubio] = useState(false);
  //database
  const url = "http://127.0.0.1:8000/";

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s- ]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,8}$/, // 7 a 14 numeros.
    carnet: /^[a-zA-Z0-9-]{6,15}$/,
    fecha: /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/,
    lugar: /^[a-zA-ZÀ-ÿ\s0-9- ]{3,40}$/,
  };
  function esValido() {
    var esValido = true;
    if (opcionPasos == 1) {
      if (nombre.campo == "") {
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
        if (nombre.valido == "false") {
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
    return esValido;
  }
  const siguientePasoRegistro = () => {
    if (opcionPasos + 1 < 4) {
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
    const estudiante = {
      CODESTUDIANTE: codigoEstudiante,
      NOMBREESTUDIANTE: nombre.campo,
      APELLIDOESTUDIANTE: apellido.campo,
      FECHANACIMIENTOESTUDIANTE: fechaNacimientoEstudiante.campo,
      GENEROESTUDIANTE: generoEstudiante,
      DIRECCION: direccion.campo,
      COLEGIO: colegio.campo,
      TURNO: turno.campo,
      CURSO: curso.campo,
      TIPOCOLEGIO: tipoColegio.campo,
    };
    const tutor = {
      CODTUTOR: codigoTutor,
      CODESTUDIANTE: codigoEstudiante,
      NOMBRETUTOR: nombreTutor.campo,
      FECHANACIMIENTOTUTOR: fechaNacimientoTutor.campo,
      CELULARTUTOR: celularTutor.campo,
      APELLIDOTUTOR: apellidoTutor.campo,
      GENEROTUTOR: generoTutor,
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
              setSeSubio(false);
              borrarDatos();
            });
        } else {
          axios.post(url + "agregarTutor", tutor).then((response) => {
            axios
              .post(url + "asignar-tutor", EstudianteTutor)
              .then((response) => {
                setSeSubio(false);
                borrarDatos();
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
  }
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
            LISTA ESTUDIANTES
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
      <ContainerPrincipal>
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
                        <SelectInput
                          estado={turno}
                          cambiarEstado={setTurno}
                          label="Turno"
                          name="Turno"
                          //valido={documento.valido}
                        />
                        <SelectInput
                          estado={curso}
                          cambiarEstado={setCurso}
                          label="Curso"
                          name="curso"
                          //valido={documento.valido}
                        />
                      </ContainerDatos>
                      <ContainerDatos>
                        <SelectInput
                          estado={tipoColegio}
                          cambiarEstado={setTipoColegio}
                          label="Tipo colegio"
                          name="tipoColegio"
                          //valido={documento.valido}
                        />
                      </ContainerDatos>
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
        {opcion === 2 && <div>nose</div>}
        {opcion === 3 && <div>aver</div>}
      </ContainerPrincipal>
      <Toaster reverseOrder={true} position="top-right" />
    </GlobalStyle>
  );
}
