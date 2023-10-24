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
  ContainerTutores,
  ContainerVerTutores,
} from "./DiseñoModalInformacion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import alerta from "sweetalert2";
import {
  faPenToSquare,
  faToggleOff,
  faToggleOn,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import ModalVerMas from "./ModalVerMas";
import ModalEditar from "./ModalEditar";
import { url } from "./VariableEntornos";
import axios from "axios";
import { useEffect } from "react";

export default function ModalInformacion({
  estado,
  cambiarEstado,
  datos,
  ocultar,
  tipo,
  actualizo,
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
  const [valor, setValor] = useState("");
  const [habilitado, setHabilitado] = useState();
  const [opcion, setOpcion] = useState(1);
  const [listaTutores, setListaTutores] = useState([]);
  const [listaEstudiantes, setListaEstudiantes] = useState([]);

  useEffect(() => {
    setValor(datos.HABILITADO);
    setHabilitado(datos.HABILITADO === "Habilitado" ? faToggleOn : faToggleOff);
    if (tipo === "Estudiante") {
      axios
        .get(url + "obtenerTutores/" + datos.CODESTUDIANTE)
        .then((response) => {
          setListaTutores(response.data);
        });
    } else {
      axios
        .get(url + "obtenerEstudiantes/" + datos.CODTUTOR)
        .then((response) => {
          setListaEstudiantes(response.data);
        });
    }
  }, [datos]);
  return (
    <>
      {estado && (
        <Overlay>
          <ContenedorModal ocultar={ocultarModal} tipo={tipo}>
            <EncabezadoModal>
              <Titulo>
                {tipo === "Estudiante"
                  ? datos.CODESTUDIANTE
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
                  <TituloNombre>
                    {datos.NOMBREESTUDIANTE + " " + datos.APELLIDOESTUDIANTE}{" "}
                  </TituloNombre>
                  <ContainerImgIcon
                    onClick={() => {
                      setOcultarModal("true");
                      setEditEstudiante(true);
                    }}
                  >
                    <ImgIcon tabla={"true"} icon={faPenToSquare} />
                  </ContainerImgIcon>
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
                  <ContainerImgIcon habilitar={"true"}>
                    <ImgIcon
                      habilitar={"true"}
                      icon={habilitado}
                      onClick={() => {
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
                                title: "Cambio realizado",
                                icon: "success",
                                confirmButtonColor: "#000",
                                background: "#d6d6d6",
                                iconColor: "#000",
                                color: "#000",
                              });
                              const cambiar = {
                                HABILITADO:
                                  valor === "Habilitado"
                                    ? "Deshabilitado"
                                    : "Habilitado",
                              };
                              setHabilitado(
                                cambiar.HABILITADO === "Habilitado"
                                  ? faToggleOn
                                  : faToggleOff
                              );
                              setValor(cambiar.HABILITADO);
                              axios
                                .put(
                                  url +
                                    "actualizarEstadoEstudiante/" +
                                    datos.CODESTUDIANTE,
                                  cambiar
                                )
                                .then((response) => {
                                  actualizo(true);
                                });
                            }
                          });
                      }}
                    />
                  </ContainerImgIcon>
                  <ContainerTutores>
                    <ContainerBoton>
                      <BotonTutores
                        seleccionado={opcion == 1 ? "true" : "false"}
                        onClick={() => {
                          setOpcion(1);
                        }}
                      >
                        Tutores
                      </BotonTutores>
                      <BotonTutores
                        segundo={"true"}
                        seleccionado={opcion == 2 ? "true" : "false"}
                        onClick={() => {
                          setOpcion(2);
                        }}
                      >
                        Horario
                      </BotonTutores>
                    </ContainerBoton>
                    {opcion === 1 && (
                      <ContainerVerTutores>
                        {listaTutores.map((tutor) => {
                          return (
                            <>
                              <TituloNombre primero={"true"} centro={"true"}>
                                {tutor.NOMBRETUTOR + " " + tutor.APELLIDOTUTOR}{" "}
                              </TituloNombre>
                              <BoxCampo>
                                <Texto espacio={"true"}>
                                  Relacion con el estudiante:
                                </Texto>
                                {tutor.RELACION}
                              </BoxCampo>
                              <BoxCampo>
                                <Texto espacio={"true"}>
                                  Numero de celular:
                                </Texto>
                                {tutor.CELULARTUTOR}
                              </BoxCampo>
                            </>
                          );
                        })}
                      </ContainerVerTutores>
                    )}
                  </ContainerTutores>
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
/*<ContainerBoton>
                <BotonTutores
                  onClick={() => {
                    setOcultarModal("true");
                    setModalVerMas(true);
                  }}
                >
                  {tipo === "Estudiante" ? "Ver tutores" : "Ver Estudiantes"}
                </BotonTutores>
              </ContainerBoton>*/
