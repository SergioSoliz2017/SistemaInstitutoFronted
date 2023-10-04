import React, { useEffect, useState } from "react";
import {
  Overlay,
  ContenedorModal,
  EncabezadoModal,
  BotonCerrar,
  Titulo,
  DetalleUsuario,
  ContainerBoton,
  Botones,
} from "./DiseñoModalEdit";
import InputValidar from "./InputValidarModal";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SelectInput from "./SelectValidarModal";
import axios from "axios";
const url = "https://sistema-intituto.fly.dev/";

export default function ModalEditar({ estado, cambiarEstado, datos , ocultar }) {
  const [nombre, setNombre] = useState({
    campo: "",
    valido: null,
  });
  const [apellido, setApellido] = useState({
    campo: "",
    valido: null,
  });
  const [fechaNacimientoEstudiante, setFechaNacimientoEstudiante] = useState({
    campo: "",
    valido: null,
  });
  const [direccion, setDireccion] = useState({ campo: "", valido: null });
  const [colegio, setColegio] = useState({ campo: "", valido: null });
  const [turno, setTurno] = useState({ campo: "", valido: null });
  const [curso, setCurso] = useState({ campo: "", valido: null });
  const [tipoColegio, setTipoColegio] = useState({ campo: "", valido: null });
  const [pais, setPais] = useState({ campo: "", valido: null });
  const [ciudad, setCiudad] = useState({ campo: "", valido: null });
  const [departamento, setDepartamento] = useState({ campo: "", valido: null });

  useEffect(() => {
    setNombre({ ...nombre, campo: datos.NOMBREESTUDIANTE });
    setApellido({ ...apellido, campo: datos.APELLIDOESTUDIANTE });
    setFechaNacimientoEstudiante({
      ...fechaNacimientoEstudiante,
      campo: datos.FECHANACIMIENTOESTUDIANTE,
    });
    setDireccion({ ...direccion, campo: datos.DIRECCION });
    setColegio({ ...colegio, campo: datos.COLEGIO });
    setTurno({ ...turno, campo: datos.TURNO });
    setCurso({ ...curso, campo: datos.CURSO });
    setTipoColegio({ ...tipoColegio, campo: datos.TIPOCOLEGIO });
    setPais({ ...pais, campo: datos.PAIS });
    setDepartamento({ ...departamento, campo: datos.DEPARTAMENTO });
    setCiudad({ ...ciudad, campo: datos.CIUDAD });
  }, [datos.CODESTUDIANTE]);

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s- ]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,8}$/, // 7 a 14 numeros.
    carnet: /^[a-zA-Z0-9-]{6,15}$/,
    fecha: /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/,
    lugar: /^[a-zA-ZÀ-ÿ\s0-9- ]{3,40}$/,
  };

  const cancelar = () => {
    borrarDatos();
    cambiarEstado(false);
    ocultar("false")
  };

  function borrarDatos() {
    setNombre({ campo: datos.NOMBREESTUDIANTE, valido: null });
    setApellido({ campo: datos.APELLIDOESTUDIANTE, valido: null });
    setFechaNacimientoEstudiante({
      campo: datos.FECHANACIMIENTOESTUDIANTE,
      valido: null,
    });
    setDireccion({ campo: datos.DIRECCION, valido: null });
    setColegio({ campo: datos.COLEGIO, valido: null });
    setTurno({ campo: datos.TURNO, valido: null });
    setCurso({ campo: datos.CURSO, valido: null });
    setTipoColegio({ campo: datos.TIPOCOLEGIO, valido: null });
  }

  function cambiarDatos() {
    setNombre({ ...nombre, valido: null });
    setApellido({ ...apellido, valido: null });
    setFechaNacimientoEstudiante({
      ...fechaNacimientoEstudiante,
      valido: null,
    });
    setDireccion({ ...direccion, valido: null });
    setColegio({ ...colegio, valido: null });
    setTurno({ ...turno, valido: null });
    setCurso({ ...curso, valido: null });
    setTipoColegio({ ...tipoColegio, valido: null });
  }

  const guardar = () => {
    const estudiante = {
      NOMBREESTUDIANTE: nombre.campo,
      APELLIDOESTUDIANTE: apellido.campo,
      FECHANACIMIENTOESTUDIANTE: fechaNacimientoEstudiante.campo,
      DIRECCION: direccion.campo,
      COLEGIO: colegio.campo,
      TURNO: turno.campo,
      CURSO: curso.campo,
      TIPOCOLEGIO: tipoColegio.campo,
    };
    axios
      .put(url + "actualizarEstudiante/" + datos.CODESTUDIANTE, estudiante)
      .then((response) => {
        cambiarDatos();
        ocultar("false")
        cambiarEstado(false);
      });
    //
  };
  return (
    <>
      {estado && (
        <Overlay>
          <ContenedorModal>
            <EncabezadoModal>
              <Titulo>{datos.CODESTUDIANTE}</Titulo>
            </EncabezadoModal>
            <BotonCerrar
              onClick={() => {
                cambiarEstado(false);
                ocultar("false")
              }}
            >
              <FontAwesomeIcon icon={faXmark} />
            </BotonCerrar>
            <DetalleUsuario>
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
              <InputValidar
                estado={fechaNacimientoEstudiante}
                cambiarEstado={setFechaNacimientoEstudiante}
                tipo="date"
                label="Fecha nacimiento del estudiante"
                placeholder="Fecha nacimiento del estudiante"
                name="fechaNacimientoEstudiante"
                expresionRegular={{}}
              />
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
              <InputValidar
                estado={colegio}
                cambiarEstado={setColegio}
                tipo="text"
                label="Colegio"
                placeholder="Colegio"
                name="Colegio"
                expresionRegular={expresiones.lugar}
              />
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
              <SelectInput
                estado={tipoColegio}
                cambiarEstado={setTipoColegio}
                label="Tipo colegio"
                name="tipoColegio"
                //valido={documento.valido}
              />
            </DetalleUsuario>
            <ContainerBoton>
              <Botones onClick={cancelar} cancel={"true"}>
                Cancelar
              </Botones>
              <Botones onClick={guardar} cancel={"false"}>
                Guardar
              </Botones>
            </ContainerBoton>
          </ContenedorModal>
        </Overlay>
      )}
    </>
  );
}
