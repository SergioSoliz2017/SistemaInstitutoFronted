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
  InputSearch,
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
  setRespuestaHuella,
  relacion,
  setRelacion,
}) {
  const [listaTutores, setListaTutores] = useState([]);
  const [listaCursos, setListaCursos] = useState([]);
  const listaRelacion = [
    "Padre",
    "Madre",
    "Tio",
    "Tia",
    "Abuelo",
    "Abuela",
    "Tutor legal",
    "No tiene",
  ];
  useEffect(() => {
    setListaCursos(data);
    if (respuesta === "Existe" && tipo === "tutor") {
      axios.get(url + "obtenerTutoresActivos").then((response) => {
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
                      <InputSearch
                        type="search"
                        name="busquedatutores"
                        list="listatutores"
                        value={tutor}
                        onChange={(e) => {
                          const selectedTutor = listaTutores.find(
                            (t) =>
                              `${t.NOMBRETUTOR} ${t.APELLIDOTUTOR}` ===
                              e.target.value
                          );
                          setTutor(e.target.value);
                          tutorDatos(selectedTutor);
                        }}
                      />
                      <datalist id="listatutores">
                        {listaTutores.map((tutor) => (
                          <option
                            key={tutor.CODTUTOR}
                            value={`${tutor.NOMBRETUTOR} ${tutor.APELLIDOTUTOR}`}
                          />
                        ))}
                      </datalist>
                    </BoxCampo>
                    <BoxCampo ultimo={"true"}>
                      <TextBox>Relacion:</TextBox>
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
                    </BoxCampo>
                    <ContainerBotonesOpciones ultimo={"true"}>
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
                  setTipo("tutor");
                }}
              >
                <FontAwesomeIcon icon={faXmark} />
              </BotonCerrar>
              <DetalleUsuario>
                <ContainerIcon>
                  <Icono icon={faCheckCircle} />
                </ContainerIcon>
                <ContainerTexto>
                  {listaCursos.map((dato) => {
                    return (
                      <>
                        <TextBox todo={"true"}>
                          Materia: {dato.CURSOINSCRITO}
                        </TextBox>
                        <TextBox todo={"true"}>
                          Grupo: {dato.NOMBREGRUPO}
                        </TextBox>
                        <TextBox todo={"true"}>Codigo: {dato.CODGRUPO}</TextBox>
                      </>
                    );
                  })}
                </ContainerTexto>
              </DetalleUsuario>
            </ContenedorModal>
          )}
          {tipo === "huella" && (
            <ContenedorModal>
              <EncabezadoModal>
                <Titulo>¿Registro online?</Titulo>
              </EncabezadoModal>
              <BotonCerrar
                onClick={() => {
                  cambiarEstado(false);
                  ocultar("false");
                  setRespuesta("");
                  setRespuestaHuella("");
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
                      setRespuestaHuella("NoVirtual");
                      cambiarEstado(false);
                      ocultar("false");
                    }}
                  >
                    No
                  </BotonOpciones>
                  <BotonOpciones
                    onClick={() => {
                      setRespuestaHuella("SiVirtual");
                      cambiarEstado(false);
                      ocultar("false");
                    }}
                  >
                    SI
                  </BotonOpciones>
                </ContainerBotonesOpciones>
              </DetalleUsuario>
            </ContenedorModal>
          )}
        </Overlay>
      )}
    </>
  );
}
