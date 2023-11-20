import React from "react";
import {
  Overlay,
  ContenedorModal,
  EncabezadoModal,
  BotonCerrar,
  Titulo,
  DetalleUsuario,
  ContainerBoton,
  Botones,
} from "./DiseñoModalAñadirTutor";
import SelectInput from "./SelectValidarModal";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputValidar from "./InputValidarModal";
import { useState } from "react";
import { Category, Label, Radio } from "./DiseñoPantallaPrincipal";
import alerta from "sweetalert2";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { url } from "./VariableEntornos";
export default function ModalAñadirTutor({
  estado,
  cambiarEstado,
  ocultar,
  lista,
}) {
  const [nombreTutor, setNombreTutor] = useState({ campo: "", valido: null });
  const [apellidoTutor, setApellidoTutor] = useState({
    campo: "",
    valido: null,
  });
  const [fechaNacimientoTutor, setFechaNacimientoTutor] = useState({
    campo: "",
    valido: null,
  });
  const [generoTutor, setGeneroTutor] = useState({
    campo: "",
    valido: null,
  });
  const [celularTutor, setCelularTutor] = useState({ campo: "", valido: null });
  const [correoTutor, setCorreoTutor] = useState({ campo: "", valido: null });
  const [ocupacionTutor, setOcupacionTutor] = useState({
    campo: "",
    valido: null,
  });
  const [relacion, setRelacion] = useState({
    campo: "",
    valido: null,
  });
  const [estudiante, setEstudiante] = useState({
    campo: "",
    valido: null,
  });
  const expresiones = {
    nombre: /^(?=\S)(?!.*\s{2})[a-zA-ZÀ-ÿ\s-]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,8}$/, // 7 a 14 numeros.
    carnet: /^[a-zA-Z0-9-]{6,15}$/,
    fecha: /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/,
    lugar: /^[a-zA-ZÀ-ÿ\s0-9- ]{3,40}$/,
  };
  const cambioGeneroTutor = (e) => {
    setGeneroTutor(e.target.value);
  };

  function borrarDatos() {
    setNombreTutor({ campo: "", valido: null });
    setApellidoTutor({ campo: "", valido: null });
    setFechaNacimientoTutor({ campo: "", valido: null });
    setGeneroTutor({ campo: "", valido: null });
    setCelularTutor({ campo: "", valido: null });
    setCorreoTutor({ campo: "", valido: null });
    setRelacion({ campo: "", valido: null });
    setOcupacionTutor({ campo: "", valido: null });
    setEstudiante({ campo: "", valido: null });
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
  function esValido() {
    var esValido = true
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
    if (generoTutor.campo == "") {
      esValido = false;
      setGeneroTutor({ ...generoTutor, valido: "false" });
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
      toast("Selecciones relacion", {
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
    if (estudiante.campo == "") {
      esValido = false;
      setEstudiante({ ...estudiante, valido: "false" });
      toast("Seleccione estudiante", {
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
    return esValido
  }
  const añadir = () => {
    if (esValido()) {
      var codigoTutor = generarCodigoTutor();
      const tutor = {
        CODTUTOR: codigoTutor,
        NOMBRETUTOR: nombreTutor.campo,
        FECHANACIMIENTOTUTOR: fechaNacimientoTutor.campo,
        CELULARTUTOR: celularTutor.campo,
        APELLIDOTUTOR: apellidoTutor.campo,
        GENEROTUTOR: generoTutor.campo,
        OCUPACION: ocupacionTutor.campo,
        CORREO: correoTutor.campo,
        ESTADO: "Activo",
      };
      const EstudianteTutor = {
        estudiante_id: estudiante.campo,
        tutor_id: codigoTutor,
        relacion:  relacion.campo,
      };
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
            axios.post(url + "agregarTutor", tutor).then((response) => {
              axios
                .post(url + "asignar-tutor", EstudianteTutor)
                .then((response) => {
                  alerta.fire({
                    title: "Registro Exitoso",
                    icon: "success",
                    confirmButtonColor: "#000",
                    background: "#d6d6d6",
                    iconColor: "#000",
                    color: "#000",
                  });
                  cambiarEstado(false);
                  borrarDatos();
                  ocultar("false");
                });
            });
          }
        });
    }
  };
  const [obtenerEstudiantes,setObtenerEstudiante] = useState(false)
  return (
    <>
      {estado && (
        <Overlay>
          <ContenedorModal crear={"true"}>
            <EncabezadoModal>
              <Titulo>AÑADIR NUEVO TUTOR</Titulo>
            </EncabezadoModal>
            <BotonCerrar
              onClick={() => {
                cambiarEstado(false);
                borrarDatos();
                ocultar("false");
              }}
            >
              <FontAwesomeIcon icon={faXmark} />
            </BotonCerrar>
            <DetalleUsuario>
              <InputValidar
                estado={nombreTutor}
                cambiarEstado={setNombreTutor}
                tipo="text"
                label="Nombre:"
                placeholder="Nombre"
                name="nombreTutor"
                expresionRegular={expresiones.nombre}
                crear={"true"}
              />
              <InputValidar
                estado={apellidoTutor}
                cambiarEstado={setApellidoTutor}
                tipo="text"
                label="Apellido:"
                placeholder="Apellido"
                name="apellidoTutor"
                expresionRegular={expresiones.nombre}
                crear={"true"}
              />
              <InputValidar
                estado={fechaNacimientoTutor}
                cambiarEstado={setFechaNacimientoTutor}
                tipo="date"
                label="Fecha de nacimiento:"
                placeholder="Fecha de nacimiento"
                name="fechaNacimientoTutor"
                expresionRegular={{}}
                crear={"true"}
              />
              <InputValidar
                estado={celularTutor}
                cambiarEstado={setCelularTutor}
                tipo="number"
                label="Celular:"
                placeholder="Celular"
                name="CelularTutor"
                expresionRegular={expresiones.telefono}
                crear={"true"}
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
                crear={"true"}
              />
              <InputValidar
                estado={ocupacionTutor}
                cambiarEstado={setOcupacionTutor}
                tipo="text"
                label="Ocupacion:"
                placeholder="Ocupacion"
                name="ocupacionTutor"
                expresionRegular={expresiones.nombre}
                crear={"true"}
                opcional={true}
              />
              <SelectInput
                estado={relacion}
                cambiarEstado={setRelacion}
                label="Relacion:"
                name="curso"
                crear={"true"}
              />
              <SelectInput
                estado={estudiante}
                cambiarEstado={setEstudiante}
                label="Estudiantes:"
                name="estudiante"
                crear={"true"}
                dato={"true"}
                obtener={true}
              />
              <SelectInput
                estado={generoTutor}
                cambiarEstado={setGeneroTutor}
                label="Genero:"
                name="Genero"
                crear={"true"}
                dato={"true"}
              />
              <ContainerBoton>
                <Botones
                  onClick={() => {
                    cambiarEstado(false);
                    ocultar("false");
                    borrarDatos();
                  }}
                  cancel={"true"}
                >
                  Cancelar
                </Botones>
                <Botones onClick={añadir} cancel={"false"}>
                  Guardar
                </Botones>
              </ContainerBoton>
            </DetalleUsuario>
          </ContenedorModal>
        </Overlay>
      )}
      <Toaster reverseOrder={true} position="top-right" />
    </>
  );
}
