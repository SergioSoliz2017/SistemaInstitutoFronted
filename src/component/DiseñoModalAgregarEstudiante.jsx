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
  z-index: 1;
`;
export const ContenedorModal = styled.div`
  transition: all 0.5s ease-in-out;
  width: 30%;
  height: 35%;
  min-height: 100px;
  background: #d6d6d6;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 8px 7px 29px 8px;
  padding: 30px;
  top: 10px;
  z-index: 1;
  ${(props) =>
    props.paso === "true" &&
    css`
      width: 80%;
      height: 85%;
      overflow-y: auto;
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
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  width: 100%;
`;

export const BoxCampo = styled.div`
  margin: 00px 10px 5px 10px;
  width: calc(50% - 20px);
  position: relative;
  z-index: 90;
  height: 75px;
  ${(props) =>
    props.precio === "true" &&
    css`
      width: calc(15% - 20px);
      position: relative;
      margin-right: 20px;
      z-index: 90;
    `}
    ${(props) =>
    props.precioT === "true" &&
    css`
      margin: 0px 30px 0px 10px;
      width: calc(15% - 20px);
      position: relative;
      z-index: 90;
    `}
    ${(props) =>
    props.saldo === "true" &&
    css`
      margin: 15px 0px 0px 0px;
      width: 90%;
      height: 40px;
      display: flex;
      justify-content: center;
      gap: 20%;
      position: relative;
    `}
    ${(props) =>
    props.boton === "true" &&
    css`
      margin-top: -20px;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`;
export const TextBox = styled.span`
  display: block;
  font-weight: 500;
  margin-bottom: 5px;
  ${(props) =>
    props.centro === "true" &&
    css`
      text-align: center;
    `}
`;
export const Select = styled.select`
  height: 45px;
  font-family: bold;
  outline: none;
  border-radius: 5px;
  border: 2px solid #3b256a;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 18px;
  border-bottom-width: 2px;
  transition: all 0.3s ease;
  width: 100%;
  &:focus {
    border: 2px solid black;
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }
`;
export const ContainerBoton = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  ${(props) =>
    props.botones === "true" &&
    css`
      gap: 20px;
    `}
`;
export const BotonSiguiente = styled.button`
  width: 30%;
  margin-top: 20px;
  border-radius: 15px;
  border: 2px solid black;
  &:hover {
    background: black;
    color: white;
  }
`
export const TextPrecio = styled.span`
  height: 40px;
  width: 100%;
  font-size: 18px;
  border-bottom-width: 2px;
  transition: all 0.1s ease;
  line-height: 45px;
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

export const IconoDescuento = styled(FontAwesomeIcon)``;
export const InputBox = styled.input`
  height: 40px;
  width: 100%;
  outline: none;
  border-radius: 5px;
  border: 2px solid #000000;
  padding: 0 40px 0 10px;
  font-size: 16px;
  border-bottom-width: 2px;
  transition: all 0.1s ease;
  line-height: 45px;
  &:hover {
    border: 2px solid black;
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }
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
    ${(props) =>
    props.centro === "true" &&
    css`
      text-align: center;
    `}
    &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
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
export const ContainerTabla = styled.div`
  width: 90%;
  z-index: 1;
  height: 450px;
  overflow-y: auto;
`;
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