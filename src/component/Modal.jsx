import React, { useEffect } from "react";
import {
  BotonCerrar,
  BotonOpciones,
  BoxCampo,
  ContainerBotonesOpciones,
  ContainerIcon,
  ContainerTexto,
  ContenedorModal,
  DetalleUsuario,
  EncabezadoModal,
  Icono,
  Overlay,
  Select,
  TextBox,
  Titulo,
} from "./DiseñoModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCheckCircle,
  faQuestion,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { url } from "./VariableEntornos";
import axios from "axios";

export default function Modal({
  estado,
  cambiarEstado,
  ocultar,
  respuesta,
  setRespuesta,
  tutorDatos,
  tipo,
  setTipo,
  data,
}) {
  const [listaTutores, setListaTutores] = useState([]);
  useEffect(() => {
    if (respuesta === "Existe" && tipo === "tutor") {
      axios.get(url + "obtenerTutores").then((response) => {
        setListaTutores(response.data);
      });
    }
  }, [respuesta]);
  const [tutor, setTutor] = useState("");
  return (
    <>
      {estado && (
        <Overlay>
          {tipo === "tutor" && (
            <ContenedorModal respuesta={respuesta}>
              <EncabezadoModal>
                <Titulo>¿Tiene tutor?</Titulo>
              </EncabezadoModal>
              <BotonCerrar
                onClick={() => {
                  cambiarEstado(false);
                  ocultar("false");
                  setRespuesta("");
                  setTutor("");
                }}
              >
                <FontAwesomeIcon icon={faXmark} />
              </BotonCerrar>
              <DetalleUsuario>
                <ContainerIcon>
                  <Icono icon={faQuestion} />
                </ContainerIcon>
                <ContainerBotonesOpciones>
                  <BotonOpciones
                    onClick={() => {
                      setRespuesta("Existe");
                    }}
                  >
                    Existe
                  </BotonOpciones>
                  <BotonOpciones
                    onClick={() => {
                      setRespuesta("No");
                      cambiarEstado(false);
                      ocultar("false");
                    }}
                  >
                    No
                  </BotonOpciones>
                  <BotonOpciones
                    onClick={() => {
                      setRespuesta("Si");
                      cambiarEstado(false);
                      ocultar("false");
                    }}
                  >
                    SI
                  </BotonOpciones>
                </ContainerBotonesOpciones>
                {respuesta === "Existe" && (
                  <>
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
                        <option value="">Seleccione turno de colegio</option>
                        {listaTutores.map((tutor) => (
                          <option key={tutor.CODTUTOR} value={tutor.CODTUTOR}>
                            {tutor.NOMBRETUTOR} {tutor.APELLIDOTUTOR}
                          </option>
                        ))}
                      </Select>
                    </BoxCampo>
                    <ContainerBotonesOpciones>
                      <BotonOpciones
                        texto={"true"}
                        onClick={() => {
                          if (tutor !== "") {
                            cambiarEstado(false);
                            ocultar("false");
                          } else {
                            alert("SeleccionaTutor");
                          }
                        }}
                      >
                        Tutor seleccionado
                      </BotonOpciones>
                    </ContainerBotonesOpciones>
                  </>
                )}
              </DetalleUsuario>
            </ContenedorModal>
          )}
          {tipo === "registrado" && (
            <ContenedorModal respuesta={"false"}>
              <EncabezadoModal>
                <Titulo>Registro exitoso</Titulo>
              </EncabezadoModal>
              <BotonCerrar
                onClick={() => {
                  cambiarEstado(false);
                  ocultar("false");
                  setTipo ("tutor")
                }}
              >
                <FontAwesomeIcon icon={faXmark} />
              </BotonCerrar>
              <DetalleUsuario>
                <ContainerIcon>
                  <Icono icon={faCheckCircle} />
                </ContainerIcon>
                <ContainerTexto>
                  {data.map((dat) => {
                    return (
                      <>
                        <TextBox>Clase: {dat.NOMBRECURSO}</TextBox>
                        <TextBox>Grupo: {dat.GRUPOCURSO}</TextBox>
                        <TextBox>Codigo: {dat.CODCURSO}</TextBox>
                      </>
                    );
                  })}
                </ContainerTexto>
              </DetalleUsuario>
            </ContenedorModal>
          )}
        </Overlay>
      )}
    </>
  );
}
