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
  transition: all 2s ease-in-out;
  z-index: 2;
`;
export const ContenedorModal = styled.div`
  transition: all 1s ease-in-out;
  width: 50%;
  height: 65%;
  min-height: 100px;
  background: #F7FBFC;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 8px 7px 29px 8px;
  padding: 20px;
  top: 30px;
  ${(props) =>
    props.añadir === "true" &&
    css`
      width: 50%;
      height: 65%;
    `}
    @media (max-width: 800px) {
    width:80%;
    height: 62%;
    z-index:90;
  }
`;
export const EncabezadoModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 10px;
`;
export const Titulo = styled.div`
  font-size: 25px;
  font-weight: 1000;
  position: relative;
  width: 100%;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 100%;
    background: linear-gradient(135deg, #000000, #d6d6d6);
  }
  @media (max-width: 800px) {
    font-size: 23px;
        width:90%;
  }
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
  flex-wrap: wrap;
  width: 100%;
  height: 80%;
  justify-content: center;
`;
export const ContainerTabla = styled.div`
  width: 90%;
  height: 100%;
  overflow-y: auto;
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
export const BotonAñadir = styled.button`
  position: absolute;
  bottom: 18px;
  right: 20px;
  height: 50px;
  width: 50px;
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 50%;
  color: black;
  border: 2px solid black;
  &:hover {
    background: black;
    color: #d6d6d6;
  }
`;
export const TextBox = styled.span`
  width: 100%;
  font-weight: 500;
`;
export const BoxCampo = styled.div`
  margin: 00px 10px 5px 10px;
  position: relative;
  width: 15%;
  ${(props) =>
    props.campo === "true" &&
    css`
      margin: 00px 10px 5px 10px;
      width: calc(45% - 20px);
      position: relative;
      z-index: 90;
      @media (max-width: 800px) {
    width:80%;
    
  }
    `}
  ${(props) =>
    props.boton === "true" &&
    css`
      margin: 20px 10px 0px 10px;
      width: 100%;
      position: relative;
      height: 45px;
      display: flex;
      justify-content: center;
    `}
`;
export const BotonGrupo = styled.button`
  width: 40%;
  outline: none;
  border-radius: 15px;
  border: 2px solid #000000;
  &:hover {
    border: 2px solid black;
    outline: none;
    background: #000000;
    color: #d6d6d6;
    border: 2px solid #d6d6d6;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }
`;
export const Select = styled.select`
  height: 45px;
  width: 100%;
  font-family: bold;
  outline: none;
  border-radius: 5px;
  border: 2px solid #3b256a;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 18px;
  border-bottom-width: 2px;
  transition: all 0.3s ease;

  &:focus {
    border: 2px solid black;
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }

  ${(props) =>
    props.valido === "true" &&
    css`
      border: 3px solid green;
    `}
  ${(props) =>
    props.valido === "false" &&
    css`
      border: 3px solid red;
    `}
`;
