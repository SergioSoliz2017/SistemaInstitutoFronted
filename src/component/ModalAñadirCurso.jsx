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
  Overlay,
  TextBox,
  Titulo,
} from "./DiseñoModalAñadirCurso";
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
export default function ModalAñadirCurso({ estado, cambiarEstado, ocultar, actualizar}) {
  const [curso, setCurso] = useState({ campo: "", valido: null });
  const [grupo, setGrupo] = useState({ campo: "", valido: null });
  const [cantidadGrupo, setCantidadGrupo] = useState({
    campo: "",
    valido: null,
  });
  const [duracion, setDuracion] = useState({ campo: "", valido: null });
  const expresiones = {
    nombre: /^(?=\S)(?!.*\s{2})[a-zA-ZÀ-ÿ\s-]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    letra : /^(?=\S)(?!.*\s{2})(?!.*\s$)[a-zA-Z0-9\-: ]{3,40}$/,
    numero: /^\d{1,3}$/,
  };
  const [listaGrupos, setListaGrupos] = useState([]);
  var cantidad = 0;
  var codigoCurso;

  const añadirGrupo = () => {
    var fechaActual = new Date();
    var añoActual = fechaActual.getFullYear();
    codigoCurso = añoActual + curso.campo;
    var grupoTemp = {
      CODSEDE: "QUILLACOLLO",
      CODCURSO: codigoCurso.toUpperCase(),
      CANTIDADMAXIMA: parseInt(cantidadGrupo.campo, 10),
      NOMBREGRUPO: grupo.campo,
    };
    setListaGrupos((prevLista) => [...prevLista, grupoTemp]);
  };
  const crearCurso = () => {
    axios.get(url + "verificarCurso/" + curso.campo).then((response) => {
      if (response.data.length === 0) {
        var fechaActual = new Date();
        var añoActual = fechaActual.getFullYear();
        codigoCurso = añoActual + curso.campo;
        var crearCurso = {
          CODSEDE: "QUILLACOLLO",
          CODCURSO: codigoCurso.toUpperCase(),
          CURSODURACION: parseInt(duracion.campo, 10),
          CURSO: curso.campo,
          LISTAGRUPOS: listaGrupos,
        };
        axios.post(url + "agregarCurso", crearCurso).then((rs) => {
          cambiarEstado(false);
          borrarDatos();
          ocultar("false");
          actualizar(true)
        });
      } else {
        console.log("ya existe");
      }
    });
  };
  const borrarDatos = () => {
    setCurso("");
    setGrupo("");
    setDuracion("");
    setCantidadGrupo("");
    setListaGrupos([]);
  };
  return (
    <>
      {estado && (
        <Overlay>
          <ContenedorModal>
            <EncabezadoModal>
              <Titulo>AÑADIR NUEVO CURSO</Titulo>
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
              <TextBox>Curso:</TextBox>
              <InputValidar
                estado={curso}
                cambiarEstado={setCurso}
                tipo="text"
                label="Curso:"
                placeholder="Curso"
                name="Curso"
                expresionRegular={expresiones.nombre}
              />
              <InputValidar
                estado={duracion}
                cambiarEstado={setDuracion}
                tipo="number"
                label="Duracion:"
                placeholder="Duracion"
                name="Duracion"
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
              </ContainerTabla>
              <ContainerBoton>
                <BotonGuardar onClick={crearCurso}>Crear curso</BotonGuardar>
              </ContainerBoton>
            </DetalleUsuario>
          </ContenedorModal>
        </Overlay>
      )}
    </>
  );
}
