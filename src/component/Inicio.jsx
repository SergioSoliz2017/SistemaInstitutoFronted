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
  ImagenCarga,
} from "./DiseñosInicio";
import toast, { Toaster } from "react-hot-toast";
import { useHistory } from "react-router";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { url } from "./VariableEntornos";
import axios from "axios";

export default function Inicio() {
  const [id, setId] = useState("");
  const [contraseña, setContraseña] = useState("");
  const historial = useHistory();
  const [carga,setCarga] = useState(false)
  function ingresar() {
    if (EsValido()) {
      setCarga(true)
      axios
        .post(url + "iniciarSesion", { codigo: id, contraseña: contraseña })
        .then((response) => {
          if (response.data === "Correcto") {
            setCarga(false)
            var codigo =  id.toUpperCase()
            historial.push("/home/" + codigo);
          } else {
            if (response.data === "Incorrecto") {
              toast("Contraseña Incorrecta", {
                icon: "⚠️",
                duration: 3000,
                style: {
                  border: "2px solid #000",
                  padding: "10px",
                  color: "#000",
                  background: "#B9D7EA",
                  borderRadius: "20px",
                  fontFamily: "bold",
                  fontWeight: "1000",
                },
              });
            } else {
              toast("ID Incorrecto", {
                icon: "⚠️",
                duration: 3000,
                style: {
                  border: "2px solid #000",
                  padding: "10px",
                  color: "#000",
                  background: "#B9D7EA",
                  borderRadius: "20px",
                  fontFamily: "bold",
                  fontWeight: "1000",
                },
              });
            }
          }
        });
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
          background: "#B9D7EA",
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
          background: "#B9D7EA",
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
            <BotonIniciar disabled={carga} onClick={ingresar}>{carga ? <ImagenCarga src={require("../Imagenes/Carga.gif")}/> : <>Iniciar Sesion</>}</BotonIniciar>
          </ConatinerBoton>
        </ContainerInicioSesion>
      </Container>

      <Toaster reverseOrder={false} position="botton-center" />
    </GlobalStyle>
  );
}
