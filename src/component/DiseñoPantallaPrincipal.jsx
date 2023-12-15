import styled, { css, keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Nav = styled.div`
  background: #f7fbfc;
  height: 100vh;
  overflow-y: auto;
  position: fixed;
  width: 23%;
  box-sizing: border-box;
  margin: 0;
  @media (max-width: 800px) {
    display: none;
    width: 0px;
    ${(props) =>
      props.extender === "true" &&
      css`
        display: flex;
        flex-direction: column;
        position: absolute;
        width: 49.9%;
        z-index: 99;
        height: 100vh;
      `}
  }
`;
export const ContainerLogo = styled.div`
  position: relative;
  height: min-content;
  width: 100%;
  top: 30px;
  cursor: pointer;
  display: flex;
  color: #769fcd;
`;
export const ImagenLogo = styled.img`
  position: relative;
  height: 30%;
  width: 20%;
  left: 5%;
  cursor: pointer;
  @media (max-width: 800px) {
    height: 60px;
    width: 55px;
  }
`;
export const ContainerBotonNav = styled.div`
  width: 100%;
  height: 74.7vh;
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
    background: #769fcd;
    color: #f7fbfc;
  }
  ${(props) =>
    props.seleccionado === "true" &&
    css`
      background: #769fcd;
      border: 1px solid #d6e6f2;
    `}
  ${(props) =>
    props.cerrar === "true" &&
    css`
      position: absolute;
      bottom: -30px;
    `}
`;
export const BotonNavSelect = styled.select`
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
    color: #f7fbfc;
    background: #769fcd;
  }
  ${(props) =>
    props.seleccionado === "true" &&
    css`
      color: #d6d6d6;
      background: black;
      border: 1px solid #d6d6d6;
    `}
  ${(props) =>
    props.cerrar === "true" &&
    css`
      position: absolute;
      bottom: 0px;
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
  @media (min-width: 800px) {
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
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;
export const ImagenLogoCentro = styled.img`
  position: relative;
  width: 80%;
  height: 95%;
  top: 5px;
  @media (max-width: 800px) {
    width: 60%;
    height: 40%;
  }
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
  background: #b9d7ea;
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
  color: black;
  margin: 30px 10px 20px 100px;
  @media (max-width: 800px) {
    font-size: 22px;
  }
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
  background: #b9d7ea;
  border-radius: 50%;
  border: 1.5px solid black;
  ${(props) =>
    props.seleccionado === "true" &&
    css`
      background: black;
      border: 1px solid #d6d6d6;
      color: #d6e6f2;
    `}
`;
export const Rectangulo = styled.div`
  width: 25%;
  height: 10px;
  background: #d6e6f2;
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
  background: #b9d7ea;
  &:hover {
    color: black;
    background: #769fcd;
    outline: none;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.4);
  }
  ${(props) =>
    props.seleccionado === "true" &&
    css`
      color: black;
      background: #769fcd;
    `}
  @media (max-width: 800px) {
    width: 35%;
  }
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
        background: #d6e6f2;
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
      color: black;
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
  ${(props) =>
    props.espacio === "true" &&
    css`
      margin-top: 40px;
    `}
  ${(props) =>
    props.trabajador === "true" &&
    css`
      height: 620px;
    `}
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
  background: #f7fbfc;
  border-radius: 25px;
  width: 70%;
  ${(props) =>
    props.lista === "true" &&
    css`
      width: 80%;
      display: flex;
      flex-direction: column;
      height: 580px;
    `}
  ${(props) =>
    props.lista === "false" &&
    css`
      width: 80%;
      display: flex;
      flex-direction: column;
      height: 620px;
    `}
  ${(props) =>
    props.cursos === "true" &&
    css`
      height: 840px;
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
  z-index: 0;
  margin-top: 35px;
  overflow-y: auto;
  margin-bottom: 20px;
  ${(props) => props.cursos === "registro" && css``}
  ${(props) =>
    props.cursos === "true" &&
    css`
      margin-top: 60px;
      height: 280px;
    `}
    ${(props) =>
    props.lista === "true" &&
    css`
      height: 440px;
    `}
     ${(props) =>
    props.cursos === "false" &&
    css`
      margin-top: 80px;
      height: 420px;
    `}
    ${(props) =>
    props.abajo === "true" &&
    css`
      margin-top: 80px;
      height: 620px;
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
      left: 100%;
      top: -200%;
    `}
  ${(props) =>
    props.add === "false" &&
    css`
      top: 13%;
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
  @media (max-width: 800px) {
    gap: 20px;
    width: 100%;
  }
`;
export const ContainerTituloBusqueda = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  @media (max-width: 800px) {
    justify-content: center;
    gap: 15px;
  }
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
`;
export const ContainerUser = styled.div`
  height: max-content;
  position: absolute;
  right: 40px;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  font-family: "bold";
  font-weight: 1000;
  ${(props) =>
    props.arriba === "true" &&
    css`
      right: 57px;
      top: 15px;
    `}
`;
export const IconoUser = styled(FontAwesomeIcon)`
  width: 50px;
  height: 50px;
  transform: scale(3);
`;
export const BarrasNav = styled.button`
  width: 70px;
  height: 50px;
  border: none;
  background: none;
  color: black;
  font-size: 45px;
  cursor: pointer;
  position: absolute;
  left: 10px;
  z-index: 100;
  ${(props) =>
    props.extender &&
    css`
      top: -20px;
      left: 37%;
      z-index: 100;
    `}
  @media (min-width: 800px) {
    display: none;
  }
`;
export const X = styled.span`
  height: 5px;
  width: 5px;
`;
export const ContainerDatoCurso = styled.div `
  box-shadow: 3px 0px 30px rgba(6, 6, 6, 0.4);
  margin-top: 10px;
  width: 90%;
  height: 1%;
  display: flex;
  flex-wrap: wrap;
  border-radius:25px;
  padding: 20px;
`
export const ContainerFila = styled.div `
  
  width: 90%;
  display: flex;
  ${(props) =>
    props.titulo &&
    css`
      font-weight: 1000;
    `}
`
export const ContainerCol = styled.div `
  
  width: 50%;
  display: flex;
  ${(props) =>
    props.numero &&
    css`
      text-align: center;
      width: 10%;
    `}
`