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
  BoxCampo,
  TextBox,
  InputBox,
  Select,
} from "./DiseñoModalTutor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import alerta from "sweetalert2";
import { url
 } from "./VariableEntornos";
export default function ModalTutor({ estado, cambiarEstado, datos, ocultar }) {
  const [estadoTutor, setEstadoTutor] = useState("");
  const [motivo, setMotivo] = useState("");
  const listaEstado1 = ["Inactivo", "Baja"];
  const listaEstado2 = ["Activo", "Baja"];
  const listaEstado3 = ["Activo", "Inactivo"];

  function esValido() {
    var esValido = true;
    if (estadoTutor == "") {
      esValido = false;
      toast("Ingresar estado", {
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
    if (motivo == "") {
      esValido = false;
      toast("Ingresar motivo", {
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
    return esValido;
  }
  const actualizar = () => {
    if (esValido()) {
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
            alerta.fire({
              title: "Registro Exitoso",
              icon: "success",
              confirmButtonColor: "#000",
              background: "#d6d6d6",
              iconColor: "#000",
              color: "#000",
            });
            const hoy = new Date().toLocaleDateString();
            const Motivo = {
              CODTUTOR: datos.CODTUTOR,
              MOTIVO: motivo,
              FECHAMOTIVO: hoy,
              ESTADO: estadoTutor,
            };
            if (estadoTutor === "Baja") {
              axios
                .get(url + "darBajaTutor/" + datos.CODTUTOR)
                .then((response) => {
                  axios.post(url + "agregarMotivo", Motivo).then((response) => {
                    setEstadoTutor("");
                    setMotivo("");
                    cambiarEstado(false);
                    ocultar("false");
                  });
                });
            }
            if (estadoTutor === "Activo") {
              axios
                .get(url + "darActivoTutor/" + datos.CODTUTOR)
                .then((response) => {
                  axios.post(url + "agregarMotivo", Motivo).then((response) => {
                    setEstadoTutor("");
                    setMotivo("");
                    cambiarEstado(false);
                    ocultar("false");
                  });
                });
            }
            if (estadoTutor === "Inactivo") {
              axios
                .get(url + "darInactivoTutor/" + datos.CODTUTOR)
                .then((response) => {
                  axios.post(url + "agregarMotivo", Motivo).then((response) => {
                    setEstadoTutor("");
                    setMotivo("");
                    cambiarEstado(false);
                    ocultar("false");
                  });
                });
            }
          }
        });
    }
  };

  return (
    <>
      {estado && (
        <Overlay>
          <ContenedorModal>
            <EncabezadoModal>
              <Titulo>{datos.CODTUTOR}</Titulo>
            </EncabezadoModal>
            <BotonCerrar
              onClick={() => {
                cambiarEstado(false);
                ocultar("false");
                setEstadoTutor("");
                setMotivo("");
              }}
            >
              <FontAwesomeIcon icon={faXmark} />
            </BotonCerrar>
            <DetalleUsuario>
              <BoxCampo>
                <TextBox>Estado</TextBox>
                <Select
                  id="estado"
                  onChange={(e) => {
                    setEstadoTutor(e.target.value);
                  }}
                >
                  <option value="">Seleccione estado</option>
                  {datos.ESTADO === "Activo" && (
                    <>
                      {listaEstado1.map((datos) => {
                        return <option value={datos}>{datos}</option>;
                      })}
                    </>
                  )}
                  {datos.ESTADO === "Inactivo" && (
                    <>
                      {listaEstado2.map((datos) => {
                        return <option value={datos}>{datos}</option>;
                      })}
                    </>
                  )}
                  {datos.ESTADO === "Baja" && (
                    <>
                      {listaEstado3.map((datos) => {
                        return <option value={datos}>{datos}</option>;
                      })}
                    </>
                  )}
                </Select>
              </BoxCampo>
              <BoxCampo>
                <TextBox>Motivo</TextBox>
                <InputBox
                  maxLength={42}
                  type="text"
                  placeholder="Motivo"
                  id="motivo"
                  onChange={(e) => {
                    setMotivo(e.target.value);
                    console.log(motivo);
                  }}
                />
              </BoxCampo>
              <ContainerBoton>
                <Botones
                  onClick={() => {
                    cambiarEstado(false);
                    ocultar("false");
                    setEstadoTutor("");
                    setMotivo("");
                  }}
                  cancel={"true"}
                >
                  Cancelar
                </Botones>
                <Botones onClick={actualizar} cancel={"false"}>
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
