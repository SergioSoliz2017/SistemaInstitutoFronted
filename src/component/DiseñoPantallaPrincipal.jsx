import styled, { css, keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Nav = styled.div`
  background: #d6d6d6;
  height: 100vh;
  overflow-y: auto;
  position: fixed;
  width: 23%;
  box-sizing: border-box;
  margin: 0;
`;
export const ContainerLogo = styled.div`
  position: relative;
  height: min-content;
  width: 100%;
  top: 30px;
  cursor: pointer;
  display: flex;
`;
export const ImagenLogo = styled.img`
  position: relative;
  height: 30%;
  width: 20%;
  left: 5%;
  cursor: pointer;
`;
export const ContainerBotonNav = styled.div`
  width: 100%;
  margin-top: 30%;
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const TituloDasboard = styled.div`
  font-size: 33px;
  font-weight: 1000;
  position: relative;
  display: flex;

  ${(props) =>
    props.subTitutlo === "true" &&
    css`
      margin-top: -14px;
      font-size: 15px;
      margin-left: 2px;
    `}
`;

export const ContainerTitulo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  left: 8%;
`;
export const BotonNav = styled.button`
  width: 70%;
  margin-left: 10px;
  margin-bottom: 15px;
  border: none;
  text-align: start;
  background: transparent;
  cursor: pointer;
  border-radius: 20px;
  padding: 10px;
  &:hover {
    color: #d6d6d6;
    background: black;
  }
  ${(props) =>
    props.seleccionado === "true" &&
    css`
      color: #d6d6d6;
      background: black;
      border: 1px solid #d6d6d6;
    `}
`;
export const ContainerImagenCentro = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContainerPrincipal = styled.div`
  box-sizing: border-box;
  width: 77%;
  height: 100vh;
  overflow: auto;
  position: relative;
  margin-left: 23%;
  ${(props) =>
    props.ocultar === "true" &&
    css`
      opacity: 0.5;
    `}
`;
export const ImagenLogoCentro = styled.img`
  position: relative;
  height: 70%;
  width: 35%;
  top: 5px;
  cursor: pointer;
  padding: 5px;
`;
export const ContainerContenido = styled.div`
  width: 100%;
  margin-top: 15px;
  position: relative;
`;
export const ContainerLateral = styled.div`
  width: 35%;
  width: 100%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ContainerRegistro = styled.div`
  width: 100%;
  margin-top: 20px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContainerCarga = styled.div`
  width: 50%;
  height: 50%;
  margin-top: 10%;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #d6d6d6;
  border-radius: 25px;
`;
export const ImagenCarga = styled.img`
  width: 50%;
`;
export const TituloLateral = styled.span`
  font-size: 30px;
  font-weight: 1000;
  position: relative;
  font-family: "bold";
  color: #d6d6d6;
  margin: 30px 10px 20px 100px;
`;
export const TituloRegistro = styled.span`
  margin: 25px;
  color: black;
  font-size: 20px;
  font-family: bold;
  text-align: center;
`;
export const ContainerPasosLateral = styled.div`
  display: flex;
  align-items: center;
  ${(props) =>
    props.button === "true" &&
    css`
      margin-bottom: 50px;
      cursor: pointer;
    `}
`;
export const CircleProgress = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #a5a7aa;
  border-radius: 50%;
  border: 1px solid black;
  ${(props) =>
    props.seleccionado === "true" &&
    css`
      background: black;
      border: 1px solid #d6d6d6;
      color: #d6d6d6;
    `}
`;
export const Rectangulo = styled.div`
  width: 30%;
  height: 10px;
  background: #d6d6d6;
  ${(props) =>
    props.seleccionado === "true" &&
    css`
      background: black;
      border: 1px solid #d6d6d6;
      color: #d6d6d6;
    `}
`;

export const PasosLateral = styled.button`
  color: black;
  font-weight: 1000;
  font-family: bold;
  border-radius: 15px;
  width: 40%;
  font-size: 20px;
  background: #d6d6d6;
  &:hover {
    color: #d6d6d6;
    background: black;
    outline: none;
    background: black;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.4);
  }
  ${(props) =>
    props.seleccionado === "true" &&
    css`
      color: #d6d6d6;
      background: black;
    `}
`;
export const BotonSiguientePasos = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  ${(props) =>
    props.ocultar === "true" &&
    css`
      visibility: hidden;
    `}
`;
export const ContainerBotonSiguientePasos = styled.div`
  width: 100%;
  height: 50px;
  left: 10px;
  display: flex;
  position: relative;
`;

export const ContainerImgIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: auto;
  width: 38px;
  height: 38px;
  padding: 10px;
  border-radius: 50%;
  &:hover {
    color: #d6d6d6;
    background: black;
  }
`;
export const ImgIcon = styled(FontAwesomeIcon)`
  width: 100%;
  height: 100%;
  ${(props) =>
    props.lateral === "true" &&
    css`
      height: 50%;
    `}
  ${(props) =>
    props.buscar === "true" &&
    css`
      height: 80%;
    `}
    ${(props) =>
    props.menu === "true" &&
    css`
      margin-left: 10px;
      margin-right: 10px;
    `}
`;
export const ContainerDatos = styled.div`
  width: 100%;
  margin-bottom: -10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Category = styled.div`
  display: flex;
  width: 100%;
  margin: 14px 0;
  justify-content: center;
  gap: 250px;
`;
export const Label = styled.label`
  display: flex;
  align-items: center;
  font-family: "bold";
`;
export const Radio = styled.input`
  height: 18px;
  width: 18px;
  border-radius: 50%;
  margin-right: 10px;
`;
export const Titulo = styled.div`
  font-size: 28px;
  margin-top: 10px;
  font-weight: 1000;
  position: relative;
  font-family: "bold";
  text-align: center;
  width: 100%;
`;
export const ContainerTodo = styled.div`
  background: #d6d6d6;
  border-radius: 25px;
  width: 70%;
  height: 100%;
  ${(props) =>
    props.lista === "true" &&
    css`
      width: 80%;
      height:calc( ${(props) => props.cantidad * 65}px + 210px);
      display: flex;
      flex-direction: column;
    `}
`;
export const ContainerTabla = styled.div`
  width: 90%;
  z-index: 1;
  margin-top: 20px;
  overflow-y: auto;
`;
export const ContainerBotonBusqueda = styled.div`
  width: 80px;
  height: 60px;
  z-index: 1;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: end;
`;
export const BotonBuscar = styled.button`
  height: 80%;
  margin-right: 20px;
  margin-top: 20px;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 4px solid black;
  background: transparent;
  &:hover {
    outline: none;
    background: black;
    color: #d6d6d6;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.4);
  }
`;

export const BotonAbrirExe = styled.button`
  height: 40px;
  width: 40%;
  margin-top: 50px;
  font-family: "bold";
  border-radius: 20px;
  ${(props) =>
    props.habilitado === "true" &&
    css`
      border: 2px solid black;
      background: green;
      color: #d6d6d6;
    `}
  ${(props) =>
    props.habilitado === "false" &&
    css`
      &:hover {
        outline: none;
        background: black;
        color: #d6d6d6;
        box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.4);
      }
    `}
`;

export const ContainerHuella = styled.button`
  position: relative;
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
  border: none;
  background: transparent;
`;

export const ImagenHuella = styled.img`
  width: 150px;
  height: 150px;
`;

export const BarraEscaneo = styled.div`
  position: absolute;
  top: 50px;
  height: 5px;
  width: 100%;
  background-color: #000000;
  animation: ${({ escaneando }) => (escaneando ? barra : "none")} 2s infinite;
`;

const barra = keyframes`
  0%, 100% {
    top: 0%;
  }
  50% {
    top: 100%;
  }
`;
export const LineaLista = styled.div`
  width: 5px;
  border-radius: 25px;
  background: black;
  height: 50px;
`;
export const ContainerBotonLista = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  gap: 60px;
`;
export const ContainerTituloBusqueda = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Texto = styled.span `
  font-size: 20px;
  font-family: "bold";
`