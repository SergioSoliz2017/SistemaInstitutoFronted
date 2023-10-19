import React, { useState } from "react";
import {
  BotonCerrar,
  BotonTutores,
  BoxCampo,
  ContainerBoton,
  ContainerIcon,
  ContenedorModal,
  DetalleUsuario,
  EncabezadoModal,
  Overlay,
  Texto,
  Titulo,
  TituloNombre,
  ContainerImgIcon,
  ImgIcon,
  ContainerTituloNombre,
} from "./DiseñoModalInformacion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faXmark } from "@fortawesome/free-solid-svg-icons";
import ModalVerMas from "./ModalVerMas";
import ModalEditar from "./ModalEditar";

export default function ModalInformacion({
  estado,
  cambiarEstado,
  datos,
  ocultar,
  tipo,
}) {
  const [editEstudiante, setEditEstudiante] = useState(false);
  const [ocultarModal, setOcultarModal] = useState("false");
  const [modalVerMas, setModalVerMas] = useState(false);
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
  return (
    <>
      {estado && (
        <Overlay>
          <ContenedorModal ocultar={ocultarModal} tipo={tipo}>
            <EncabezadoModal>
              <Titulo>
                {tipo === "Estudiante"
                  ? "Lista de estudiantes"
                  : "Lista de tutores"}
              </Titulo>
            </EncabezadoModal>
            <BotonCerrar
              onClick={() => {
                cambiarEstado(false);
                ocultar("false");
                setOcultarModal("false");
              }}
            >
              <FontAwesomeIcon icon={faXmark} />
            </BotonCerrar>
            <DetalleUsuario>
              {tipo === "Estudiante" && (
                <>
                  <ContainerTituloNombre>
                    <TituloNombre>
                      {datos.NOMBREESTUDIANTE + " " + datos.APELLIDOESTUDIANTE}{" "}
                    </TituloNombre>
                  </ContainerTituloNombre>
                  <ContainerImgIcon
                    onClick={() => {
                      setOcultarModal("true");
                      setEditEstudiante(true);
                    }}
                  >
                    <ImgIcon tabla={"true"} icon={faPenToSquare} />
                  </ContainerImgIcon>
                  <BoxCampo>
                    <Texto>Edad:</Texto>
                    {calcularEdad(datos.FECHANACIMIENTOESTUDIANTE) + " Años"}
                  </BoxCampo>
                  <BoxCampo>
                    <Texto>Fecha de nacimiento:</Texto>
                    {datos.FECHANACIMIENTOESTUDIANTE}
                  </BoxCampo>
                  <BoxCampo>
                    <Texto>Genero:</Texto>
                    {datos.GENEROESTUDIANTE}
                  </BoxCampo>
                  <BoxCampo>
                    <Texto>Colegio:</Texto> {datos.COLEGIO}
                  </BoxCampo>
                  <BoxCampo>
                    <Texto>Direccion:</Texto> {datos.DIRECCION} {datos.PAIS}{" "}
                    {datos.DEPARTAMENTO} {datos.CIUDAD}
                  </BoxCampo>
                  <BoxCampo>
                    <Texto>Estado:</Texto> {datos.HABILITADO}
                  </BoxCampo>
                  <BoxCampo></BoxCampo>
                </>
              )}
              {tipo === "Tutor" && (
                <>
                  <ContainerTituloNombre>
                    <TituloNombre>
                      {datos.NOMBRETUTOR} {datos.APELLIDOTUTOR}
                    </TituloNombre>
                  </ContainerTituloNombre>
                  <ContainerImgIcon
                    onClick={() => {
                      //setOcultarModal("true");
                      //setEditEstudiante(true);
                    }}
                  >
                    <ImgIcon tabla={"true"} icon={faPenToSquare} />
                  </ContainerImgIcon>
                  <BoxCampo>
                    <Texto>Edad:</Texto>
                    {calcularEdad(datos.FECHANACIMIENTOTUTOR) + " Años"}
                  </BoxCampo>
                  <BoxCampo>
                    <Texto>Fecha de nacimiento:</Texto>
                    {datos.FECHANACIMIENTOTUTOR}
                  </BoxCampo>
                  <BoxCampo>
                    <Texto>Genero: </Texto>
                    {datos.GENEROTUTOR}{" "}
                  </BoxCampo>
                  <BoxCampo>
                    <Texto>Celular: </Texto>
                    {datos.CELULARTUTOR}{" "}
                  </BoxCampo>
                  <BoxCampo>
                    <Texto>Ocupacion: </Texto>
                    {datos.OCUPACION}{" "}
                  </BoxCampo>
                  <BoxCampo>
                    <Texto>Correo: </Texto>
                    {datos.CORREO}{" "}
                  </BoxCampo>
                  <BoxCampo>
                    <Texto>Relacion:</Texto> {datos.RELACION}{" "}
                  </BoxCampo>
                  <BoxCampo>
                    <Texto>Estado: </Texto>
                    {datos.ESTADO}{" "}
                  </BoxCampo>
                </>
              )}
              <ContainerBoton>
                <BotonTutores
                  onClick={() => {
                    setOcultarModal("true");
                    setModalVerMas(true);
                  }}
                >
                  {tipo === "Estudiante"? "Ver tutores" : "Ver Estudiantes"}
                </BotonTutores>
              </ContainerBoton>
            </DetalleUsuario>
          </ContenedorModal>
          <ModalVerMas
            estado={modalVerMas}
            cambiarEstado={setModalVerMas}
            ocultar={setOcultarModal}
            datos={tipo === "Estudiante" ? datos.CODESTUDIANTE : datos.CODTUTOR}
            tipo={tipo}
          />
          <ModalEditar
            estado={editEstudiante}
            cambiarEstado={setEditEstudiante}
            datos={datos}
            ocultar={setOcultarModal}
          />
        </Overlay>
      )}
    </>
  );
}
