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
  width: 25%;
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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: auto;
  width: 40px;
  height: 40px;
  padding: 1px;
  border-radius: 50%;
  &:hover {
    color: #d6d6d6;
    background: black;
  }
  ${(props) =>
    props.switch === "true" &&
    css`
      &:hover {
        color: black;
        background: #a09fa2;
      }
    `}
  ${(props) =>
    props.precio === "true" &&
    css`
      position: absolute;
      right: 12px;
      z-index: 100;
      font-size: 20px;
      top: -3px;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      border: 2px solid black;
      &:hover {
        color: #d6d6d6;
        background: black;
      }
    `}
`;
export const ImgIcon = styled(FontAwesomeIcon)`
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
    ${(props) =>
    props.tabla === "true" &&
    css`
      transform: scale(2);
    `}
    ${(props) =>
    props.tabla === "false" &&
    css`
      transform: scale(1.2);
    `}
`;
export const ContainerDatos = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 530px;
  
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
  ${(props) =>
    props.lista === "true" &&
    css`
      width: 80%;
      display: flex;
      flex-direction: column;
    `}
  ${(props) =>
    props.cursos === "true" &&
    css`
      height: 550px;
    `}
    ${(props) =>
    props.cursos === "false" &&
    css`
      height: 840px;
      margin-bottom: 10px;
    `}
    ${(props) =>
    props.cursos === "tutor" &&
    css`
      height: 750px;
      margin-bottom: 10px;
    `}
`;
export const ContainerTabla = styled.div`
  width: 90%;
  z-index: 1;
  margin-top: 35px;
  height: 450px;
  overflow-y: auto;
  ${(props) =>
    props.cursos === "registro" &&
    css`
      
    `}
  ${(props) =>
    props.cursos === "true" &&
    css`
    margin-top: 60px;
      height: 285px;
    `}
     ${(props) =>
    props.cursos === "false" &&
    css`
     margin-top: 80px;
    `}
`;
export const ContainerBotonBusqueda = styled.div`
  width: 80px;
  height: 60px;
  z-index: 1;
  display: flex;
  position: absolute;
  align-items: center;
  left: 15%;
  top: 20%;
  ${(props) =>
    props.add === "true" &&
    css`
      left: 45%;
      margin-top: 20px;
    `}
`;
export const BotonBuscar = styled.button`
  position: absolute;
  height: 80%;
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
  ${(props) =>
    props.visible === "true" &&
    css`
      opacity: 0;
    `}
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
  width: 350px;
  height: 350px;
  margin-bottom: 20px;
  border: none;
  background: red;
  background: transparent;
`;

export const ImagenHuella = styled.img`
  width: 100%;
  height: 100%;
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
  justify-content: end;
`;

export const Texto = styled.span`
  font-size: 20px;
  font-family: "bold";
  width: 50%;
  text-align: center;
`;
export const InputBusqueda = styled.input`
  height: 40px;
  width: 100%;
  outline: none;
  border-radius: 25px;
  border: 2px solid #000000;
  padding: 0 16% 0 16%;
  font-size: 16px;
  border-bottom-width: 2px;
  transition: all 0.1s ease;
  line-height: 45px;
`;
export const IconoBuscar = styled(FontAwesomeIcon)`
  position: absolute;
  left: 5%;
  bottom: 11px;
  top: 10px;
  font-size: 20px;
  ${(props) =>
    props.filtro === "true" &&
    css`
      left: 85%;
      cursor: pointer;
    `}
`;
export const BotonDescuento = styled.button``;

export const ContainerCurso = styled.div`
cursor: pointer;
text-align: center;
padding: 5px;
  &:hover {
    background: #a09fa2;
    border-radius: 15px;
    border: 1px solid black;
  }
`