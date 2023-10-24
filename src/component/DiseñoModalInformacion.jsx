import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s ease-in-out;
`;
export const ContenedorModal = styled.div`
  transition: all 1s ease-in-out;
  width: 50%;
  height: 80.5%;
  min-height: 100px;
  background: #d6d6d6;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 8px 7px 29px 8px;
  padding: 20px;
  top: 15px;
  ${(props) =>
    props.ocultar === "true" &&
    css`
      opacity: 0.5;
    `}
  ${(props) =>
    props.tipo === "Tutor" &&
    css`
      height: 90%;
    `}
`;
export const EncabezadoModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
`;
export const Titulo = styled.div`
  font-size: 20px;
  font-weight: 1000;
  position: relative;
  width: 100%;
`;
export const BotonCerrar = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  height: 30px;
  width: 30px;
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 5px;
  color: black;
  &:hover {
    background: red;
  }
`;
export const DetalleUsuario = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const BoxCampo = styled.div`
  margin: 15px 10px 0px 10px;
  position: relative;
  z-index: 90;
  display: flex;
  font-family: "bold";
  font-size: 15px;
  align-items: center;
`;
export const BotonTutores = styled.button`
  width: 30%;
  height: 100%;
  border: none;
  background: #a09fa2;
  color: black;
    ${(props) =>
    props.seleccionado === "true" &&
    css`
      color: #d6d6d6;
      background: black;
    `}
`;
export const ContainerBoton = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  z-index: 90;
  display: flex;
`;
export const ContainerTutores = styled.div`
margin-top: 20px;
  width: 100%;
  height: 250px;
  overflow-y: auto;
`;
export const ContainerVerTutores = styled.div`
  border: 1px solid black;
  border-top: none;
`
export const Texto = styled.div`
  width: 25%;
  ${(props) =>
    props.espacio === "true" &&
    css`
      width:45%;
    `}
`;
export const ContainerIcon = styled.div`
  display: flex;
  width: 100%;
`;
export const ContainerTituloNombre = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 10px;
`;
export const TituloNombre = styled.div`
  font-size: 18px;
  font-weight: 1000;
  position: relative;
  width: 100%;
  font-family: "bold";
  ${(props) =>
    props.centro === "true" &&
    css`
      text-align: center;
    `}
    ${(props) =>
    props.primero === "true" &&
    css`
      border-top: 1px solid black;
    `}
`;
export const ContainerImgIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: auto;
  width: 30px;
  height: 30px;
  padding: 10px;
  border-radius: 5px;
  &:hover {
    color: #d6d6d6;
    background: black;
  }
  ${(props) =>
    props.habilitar === "true" &&
    css`
      top: 30%;
      margin: auto;
      width: 100px;
      height: 100px;
      &:hover {
        color: black;
        background: #d6d6d6;
      }
    `}
`;
export const ImgIcon = styled(FontAwesomeIcon)`
  width: 100%;
  height: 100%;
  transform: scale(1.5);
  ${(props) =>
    props.habilitar === "true" &&
    css`
      transform: scale(2.5);
    `}
`;
