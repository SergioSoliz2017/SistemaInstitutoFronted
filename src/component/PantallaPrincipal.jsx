import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { GlobalStyle } from "./DiseñosInicio";
import {
  Nav,
  ImagenLogo,
  ContainerBotonNav,
  BotonNav,
  ContainerPrincipal,
  ImagenLogoCentro,
  ContainerContenido,
  ContainerLateral,
  ContainerRegistro,
  TituloLateral,
  TituloRegistro,
  PasosLateral,
  ContainerBotonSiguientePasos,
  BotonSiguientePasos,
  ImgIcon,ContainerDatos
} from "./DiseñoPantallaPrincipal";
import InputValidar from "./InputValidar";
import { useState } from "react";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
export default function PantallaPrincipal() {
  const [opcion, setOpcion] = useState(0);
  const [opcionPasos, setOpcionPasos] = useState(1);
  const [nombre, setNombre] = useState({ campo: "", valido: null });

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s- ]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    carnet: /^[a-zA-Z0-9-]{6,15}$/,
  };

  const siguientePasoRegistro = () => {
    if (opcionPasos + 1 < 4) {
      setOpcionPasos(opcionPasos + 1);
    }
  };
  const atrasPasoRegistro = () => {
    if (opcionPasos - 1 > 0) {
      setOpcionPasos(opcionPasos - 1);
    }
  };
  return (
    <GlobalStyle>
      <Nav>
        <ImagenLogo
          src={require("../Imagenes/Logo.png")}
          onClick={() => {
            setOpcion(0);
          }}
          seleccionado={opcion == 0 ? "false" : "true"}
        />
        <ContainerBotonNav>
          <BotonNav
            onClick={() => {
              setOpcion(1);
            }}
            seleccionado={opcion == 1 ? "true" : "false"}
          >
            REGISTRAR NUEVOS ESTUDIANTES
          </BotonNav>
          <BotonNav
            onClick={() => {
              setOpcion(2);
            }}
            seleccionado={opcion == 2 ? "true" : "false"}
          >
            no se que mas
          </BotonNav>
          <BotonNav
            onClick={() => {
              setOpcion(3);
            }}
            seleccionado={opcion == 3 ? "true" : "false"}
          >
            no se que mas
          </BotonNav>
        </ContainerBotonNav>
      </Nav>
      <ContainerPrincipal>
        {opcion === 0 && (
          <ImagenLogoCentro src={require("../Imagenes/Logo.png")} />
        )}
        {opcion === 1 && (
          <>
            <ContainerContenido>
              <ContainerLateral>
                <TituloLateral>REGISTRAR NUEVO ESTUDIANTE</TituloLateral>
                <PasosLateral
                  seleccionado={opcionPasos === 1 ? "true" : "false"}
                >
                  1. Datos personales de nuevos estudiantes
                </PasosLateral>
                <PasosLateral
                  seleccionado={opcionPasos === 2 ? "true" : "false"}
                >
                  2. No se
                </PasosLateral>
                <PasosLateral
                  seleccionado={opcionPasos === 3 ? "true" : "false"}
                >
                  3. ya no
                </PasosLateral>
              </ContainerLateral>
              <ContainerRegistro>
                {opcionPasos == 1 && (
                  <>
                    <TituloRegistro>DATOS PERSONALES</TituloRegistro>
                    <ContainerDatos>
                      <InputValidar
                        estado={nombre}
                        cambiarEstado={setNombre}
                        tipo="text"
                        label="Nombre estudiante"
                        placeholder="Nombre estudiante"
                        name="nombreEstudiante"
                        expresionRegular={expresiones.nombre}
                      />
                    </ContainerDatos>
                  </>
                )}

                <ContainerBotonSiguientePasos>
                  <BotonSiguientePasos
                    ocultar={opcionPasos === 1 ? "true" : "false"}
                    onClick={atrasPasoRegistro}
                  >
                    <ImgIcon icon={faAngleLeft} />
                  </BotonSiguientePasos>
                  <BotonSiguientePasos
                    right={"true"}
                    onClick={siguientePasoRegistro}
                  >
                    <ImgIcon icon={faAngleRight} />
                  </BotonSiguientePasos>
                </ContainerBotonSiguientePasos>
              </ContainerRegistro>
            </ContainerContenido>
          </>
        )}
        {opcion === 2 && <div>nose</div>}
        {opcion === 3 && <div>aver</div>}
      </ContainerPrincipal>
      <Toaster reverseOrder={false} position="botton-center" />
    </GlobalStyle>
  );
}
