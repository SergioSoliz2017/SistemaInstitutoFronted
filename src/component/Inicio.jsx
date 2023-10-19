import React from "react";
import { useState } from "react";
import {
  GlobalStyle,
  ContainerInicioSesion,
  ImagenLogo,
  BoxImputIcon,
  Icon,
  ImputIcon,
  ImgIcon,
  BotonIniciar,
  ConatinerBoton,
  ConatinerImput,
  Container,
} from "./DiseñosInicio";
import toast, { Toaster } from "react-hot-toast";
import { useHistory } from "react-router";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

export default function Inicio() {
  const [id, setId] = useState("");
  const [contraseña, setContraseña] = useState("");
  const historial = useHistory();
  function ingresar() {
    if (EsValido()) {
      if (id === "123") {
        if (contraseña === "123") {
          toast.success("Inicio Correcto", {
            duration: 9000,
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
          historial.push("/home/" + id);
        } else {
          toast("Contraseña Incorrecta", {
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
      } else {
        toast("ID Incorrecto", {
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
    }
  }

  function EsValido() {
    var esValido = true;
    if (id === "") {
      esValido = false;
      toast("Ingesar ID", {
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
    if (contraseña === "") {
      esValido = false;
      toast("Ingesar Contraseña", {
        icon: "⚠️",
        duration: 3000,
        style: {
          fontFamily: "bold",
          borderRadius: "20px",
          border: "2px solid #000",
          padding: "10px",
          color: "#000",
          background: "#d6d6d6",
          fontWeight: "1000",
        },
      });
    }
    return esValido;
  }

  document.title = "Inicio";
  return (
    <GlobalStyle>
      <Container>
        <ContainerInicioSesion>
          <ImagenLogo src={require("../Imagenes/Logo.png")} />
          <ConatinerImput>
            <BoxImputIcon>
              <Icon>
                <ImgIcon icon={faUser} />
              </Icon>
              <ImputIcon
                placeholder="Nombre Usuario"
                maxLength={22}
                onChange={(e) => {
                  setId(e.target.value);
                }}
                id="id"
              />
            </BoxImputIcon>
            <BoxImputIcon>
              <Icon>
                <ImgIcon icon={faLock} />
              </Icon>
              <ImputIcon
                placeholder="Contraseña"
                type="password"
                maxLength={10}
                onChange={(e) => {
                  setContraseña(e.target.value);
                }}
                id="contraseña"
              />
            </BoxImputIcon>
          </ConatinerImput>
          <ConatinerBoton>
            <BotonIniciar onClick={ingresar}>Iniciar Sesion</BotonIniciar>
          </ConatinerBoton>
        </ContainerInicioSesion>
      </Container>

      <Toaster reverseOrder={false} position="botton-center" />
    </GlobalStyle>
  );
}
