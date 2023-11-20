import React, { useState } from "react";
import { url } from "./VariableEntornos";
import {
  BotonCerrar,
  BotonGrupo,
  BotonGuardar,
  BoxCampo,
  ContainerBoton,
  ContainerTabla,
  ContenedorModal,
  DetalleUsuario,
  EncabezadoModal,
  MultiSelect,
  Overlay,
  TextBox,
  Titulo,
} from "./DiseñoModalAñadirCurso";
import SelectInput from "./SelectValidarModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import InputValidar from "./InputValidar";
import InputValidarGrupo from "./InputValidarModal";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import axios from "axios";
import toast from "react-hot-toast";
import { Select } from "./DiseñoInputValidar";
import { useEffect } from "react";

export default function ModalAñadirCurso({
  estado,
  cambiarEstado,
  ocultar,
  actualizar,
  tipo,
  data,rolT
}) {
  const [curso, setCurso] = useState({
    campo: "",
    valido: null,
  });

  const expresiones = {
    nombre: /^(?=\S)(?!.*\s{2})[a-zA-ZÀ-ÿ\s-]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    letra: /^(?=\S)(?!.*\s{2})(?!.*\s$)[a-zA-Z0-9\-: ]{3,40}$/,
    numero: /^\d{1,3}$/,
  };
  const crearCurso = () => {
    axios.get(url + "verificarCurso/" + curso.campo).then((response) => {
      if (response.data.length === 0) {
        var fechaActual = new Date();
        var añoActual = fechaActual.getFullYear();
        var codigoCurso = añoActual + curso.campo;
        var crearCurso = {
          CODCURSO: codigoCurso.toUpperCase(),
          CURSO: curso.campo,
        };
        axios.post(url + "agregarCurso", crearCurso).then((rs) => {
          cambiarEstado(false);
          borrarDatos();
          ocultar("false");
          actualizar(true);
        });
      } else {
        toast("Materia ya existe", {
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
    });
  };
  const crearSede = () => {
    axios
      .post(url + "agregarSede", {
        SEDE: sede.campo,
        UBICACION: ubicacion.campo,
      })
      .then((response) => {
        cambiarEstado(false);
        borrarDatos();
        ocultar("false");
      });
  };
  function generarCodigo() {
    var codigo = "";
    var subNombre = nombre.campo.substring(0, 5);
    var año = new Date().getFullYear();
    const dia = new Date().getDate();
    const mes = new Date().getMonth() + 1;
    codigo = año + "" + mes + "" + dia + "" + subNombre;
    return codigo.toUpperCase();
  }
  const crearTrabajador = () => {
    const codigo = generarCodigo();
    const trabajador = {
      CODTRABAJADOR: codigo,
      CODSEDE: sede,
      NOMBRETRABAJADOR: nombre.campo,
      FECHANACIMIENTOTRABAJADOR: fecha.campo,
      ROLTRABAJADOR: rol.campo,
      CONTRASEÑA: contraseña.campo,
    };axios.post(url + "agregarTrabajador", trabajador).then((response) => {
      cambiarEstado(false);
      borrarDatos();
      ocultar("false");
    });
  };
  const borrarDatos = () => {
    setCurso({
      campo: "",
      valido: null,
    });
    setSede({
      campo: "",
      valido: null,
    });
    setUbicacion({
      campo: "",
      valido: null,
    });
    setNombre({
      campo: "",
      valido: null,
    });
    setFecha({
      campo: "",
      valido: null,
    });
    setRol({
      campo: "",
      valido: null,
    });
    setContraseña({
      campo: "",
      valido: null,
    });
  };

  const [sede, setSede] = useState({
    campo: "",
    valido: null,
  });
  const [ubicacion, setUbicacion] = useState({
    campo: "",
    valido: null,
  });
  const [nombre, setNombre] = useState({
    campo: "",
    valido: null,
  });
  const [fecha, setFecha] = useState({
    campo: "",
    valido: null,
  });
  const [rol, setRol] = useState({
    campo: "",
    valido: null,
  });
  const [contraseña, setContraseña] = useState({
    campo: "",
    valido: null,
  });
  const [listaSedes, setListaSedes] = useState([]);
  useEffect(() => {
    if (tipo === "trabajador" && Array.isArray(data)) {
      setListaSedes(data.map((sede) => sede.CODSEDE));
    } else {
      setSede(data)
    }
  }, [estado]);
  return (
    <>
      {estado && (
        <Overlay>
          <ContenedorModal tipo={tipo}>
            <EncabezadoModal>
              <Titulo>
                {tipo === "curso"
                  ? "AÑADIR NUEVA MATERIA"
                  : tipo === "sede"
                  ? "AÑADIR NUEVA SEDE"
                  : "AÑADIR NUEVO TRABAJADOR"}
              </Titulo>
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
            {tipo === "curso" && (
              <DetalleUsuario>
                <InputValidar
                  estado={curso}
                  cambiarEstado={setCurso}
                  tipo="text"
                  label="Materia:"
                  placeholder="Materia"
                  name="Curso"
                  expresionRegular={expresiones.nombre}
                />
                <ContainerBoton>
                  <BotonGuardar onClick={crearCurso}>
                    Crear materia
                  </BotonGuardar>
                </ContainerBoton>
              </DetalleUsuario>
            )}
            {tipo === "sede" && (
              <DetalleUsuario>
                <InputValidar
                  estado={sede}
                  cambiarEstado={setSede}
                  tipo="text"
                  label="Sede:"
                  placeholder="Sede"
                  name="SEDE"
                  expresionRegular={expresiones.nombre}
                />
                <InputValidar
                  estado={ubicacion}
                  cambiarEstado={setUbicacion}
                  tipo="text"
                  label="Ubicacion:"
                  placeholder="Ubicacion"
                  name="Ubicacion"
                  expresionRegular={expresiones.letra}
                />
                <ContainerBoton>
                  <BotonGuardar onClick={crearSede}>Crear sede</BotonGuardar>
                </ContainerBoton>
              </DetalleUsuario>
            )}
            {tipo === "trabajador" && (
              <DetalleUsuario>
                <InputValidar
                  estado={nombre}
                  cambiarEstado={setNombre}
                  tipo="text"
                  label="Nombre:"
                  placeholder="Nombre"
                  name="Nombre"
                  expresionRegular={expresiones.nombre}
                />
                <InputValidar
                  estado={fecha}
                  cambiarEstado={setFecha}
                  tipo="date"
                  label="Fecha nacimiento:"
                  placeholder="Fecha nacimiento"
                  name="fecha"
                  expresionRegular={{}}
                />
                <SelectInput
                  sub={"true"}
                  estado={rol}
                  cambiarEstado={setRol}
                  label="Rol:"
                  name="Rol"
                  rol ={rolT}
                />
                {Array.isArray(data) && (
                  <BoxCampo campo = {"sede"}>
                    <TextBox>Sede:</TextBox>
                    <MultiSelect
                      sede={"true"}
                      options={listaSedes}
                      isObject={false}
                      placeholder="Seleccionar sedes"
                      onRemove={(event) => {
                        setSede(event);
                      }}
                      onSelect={(event) => {
                        setSede(event);
                      }}
                    />
                  </BoxCampo>
                )}
                <InputValidar
                  estado={contraseña}
                  cambiarEstado={setContraseña}
                  tipo="password"
                  label="Contraseña:"
                  placeholder="Contraseña"
                  name="Contraseña"
                  expresionRegular={{}}
                />
                <ContainerBoton>
                  <BotonGuardar onClick={crearTrabajador}>
                    Crear trabajador
                  </BotonGuardar>
                </ContainerBoton>
              </DetalleUsuario>
            )}
          </ContenedorModal>
        </Overlay>
      )}
    </>
  );
}
/*<InputValidar
                estado={precio}
                cambiarEstado={setPrecio}
                tipo="number"
                label="Precio:"
                placeholder="Precio"
                name="precio"
                expresionRegular={expresiones.numero}
              />
              <TextBox>Grupo:</TextBox>
              <InputValidarGrupo
                estado={grupo}
                cambiarEstado={setGrupo}
                tipo="text"
                label="Grupo:"
                placeholder="Grupo"
                name="Grupo"
                expresionRegular={expresiones.letra}
              />
              <InputValidarGrupo
                estado={cantidadGrupo}
                cambiarEstado={setCantidadGrupo}
                tipo="number"
                label="Cantidad:"
                placeholder="Cantidad"
                name="Cantidad"
                expresionRegular={expresiones.numero}
              />
              <BoxCampo campo ={"true"}>
                <TextBox>Dias:</TextBox>
                <MultiSelect
                options={["Lunes","Martes","Miercoles","Jueves","Viernes"]}
                isObject={false}
                onRemove={(event)=>{setDiaSelec(event)}}
                onSelect={(event)=>{setDiaSelec(event)}}
                />
              </BoxCampo>
              <BoxCampo campo ={"true"}>
                <TextBox>Dias:</TextBox>
                <MultiSelect
                options={["Lunes","Martes","Miercoles","Jueves","Viernes"]}
                isObject={false}
                onRemove={(event)=>{setDiaSelec(event)}}
                onSelect={(event)=>{setDiaSelec(event)}}
                />
              </BoxCampo> 
              <BoxCampo>
                <BotonGrupo onClick={añadirGrupo}>Añadir</BotonGrupo>
              </BoxCampo>
              <ContainerTabla>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Nº</TableCell>
                      <TableCell>Curso</TableCell>
                      <TableCell>Eliminar</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {listaGrupos.map((grupo) => {
                      return (
                        <TableRow>
                          <TableCell>{(cantidad = cantidad + 1)}</TableCell>
                          <TableCell>{grupo.NOMBREGRUPO}</TableCell>
                          <TableCell>Eliminar</TableCell>{" "}
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </ContainerTabla>*/
