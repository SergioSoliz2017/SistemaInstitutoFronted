import React, { useState } from "react";
import {
  BotonCerrar,
  BotonTutores,
  BoxCampo,
  ContainerBoton,
  ContenedorModal,
  DetalleUsuario,
  EncabezadoModal,
  Overlay,
  Titulo,
} from "./DiseñoModalInformacion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ModalVerMas from "./ModalVerMas";

export default function ModalInformacion({
  estado,
  cambiarEstado,
  datos,
  ocultar,
  tipo,
}) {
  const [ocultarModal, setOcultarModal] = useState("false");
  const [modalVerMas, setModalVerMas] = useState(false);
  return (
    <>
      {estado && (
        <Overlay>
          <ContenedorModal ocultar={ocultarModal} tipo={tipo}>
            <EncabezadoModal>
              <Titulo>
                {tipo === "Estudiante" ? datos.CODESTUDIANTE : datos.CODTUTOR}
              </Titulo>
            </EncabezadoModal>
            <BotonCerrar
              onClick={() => {
                cambiarEstado(false);
                ocultar("false");
              }}
            >
              <FontAwesomeIcon icon={faXmark} />
            </BotonCerrar>
            <DetalleUsuario>
              {tipo === "Estudiante" && (
                <>
                  <BoxCampo>Nombre: {datos.NOMBREESTUDIANTE}</BoxCampo>
                  <BoxCampo>Apellido: {datos.APELLIDOESTUDIANTE}</BoxCampo>
                  <BoxCampo>
                    Fecha nacimiento: {datos.FECHANACIMIENTOESTUDIANTE}
                  </BoxCampo>
                  <BoxCampo>Genero: {datos.GENEROESTUDIANTE}</BoxCampo>
                  <BoxCampo>Direccion: {datos.DIRECCION}</BoxCampo>
                  <BoxCampo>Pais: {datos.PAIS}</BoxCampo>
                  <BoxCampo>Departamento: {datos.DEPARTAMENTO}</BoxCampo>
                  <BoxCampo>Ciudad: {datos.CIUDAD}</BoxCampo>
                  <BoxCampo>Colegio: {datos.COLEGIO}</BoxCampo>
                  <BoxCampo>Tipo colegio: {datos.TIPOCOLEGIO}</BoxCampo>
                  <BoxCampo>Turno: {datos.TURNO}</BoxCampo>
                  <BoxCampo>Curso: {datos.CURSO}</BoxCampo>
                  <BoxCampo>Estado: {datos.HABILITADO}</BoxCampo>
                  <BoxCampo></BoxCampo>
                </>
              )}
              {tipo === "Tutor" && (
                <>
                  <BoxCampo>Nombre: {datos.NOMBRETUTOR}</BoxCampo>
                  <BoxCampo>Apellido: {datos.APELLIDOTUTOR}</BoxCampo>
                  <BoxCampo>
                    Fecha nacimiento: {datos.FECHANACIMIENTOTUTOR}
                  </BoxCampo>
                  <BoxCampo>Genero: {datos.GENEROTUTOR}</BoxCampo>
                  <BoxCampo>Celular: {datos.CELULARTUTOR}</BoxCampo>
                  <BoxCampo>Ocupacion: {datos.OCUPACION}</BoxCampo>
                  <BoxCampo>Correo: {datos.CORREO}</BoxCampo>
                  <BoxCampo>Relacion: {datos.RELACION}</BoxCampo>
                  <BoxCampo>Estado: {datos.ESTADO}</BoxCampo>
                </>
              )}
              <ContainerBoton>
                <BotonTutores
                  onClick={() => {
                    setOcultarModal("true");
                    setModalVerMas(true);
                  }}
                >
                  Ver Tutores
                </BotonTutores>
              </ContainerBoton>
            </DetalleUsuario>
          </ContenedorModal>
          <ModalVerMas
            estado={modalVerMas}
            cambiarEstado={setModalVerMas}
            ocultar={setOcultarModal}
            datos={tipo === "Estudiante"? datos.CODESTUDIANTE : datos.CODTUTOR}
            tipo = {tipo}
          />
        </Overlay>
      )}
    </>
  );
}
