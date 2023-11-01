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
  ${(props) =>
    props.respuesta === "Existe" &&
    css`
      height: 55%;
    `}
    ${(props) =>
    props.respuesta === "false" &&
    css`
      height: 60%;
    `}
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
  text-align: center;
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const ContainerBotonesOpciones = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: center;
  gap: 20px;
`;
export const BotonOpciones = styled.button`
  width: calc(30% - 20px);
  border-radius: 15px;
  border: 2px solid black;
  &:hover {
    background: black;
    color: white;
  }
  ${(props) =>
    props.texto === "true" &&
    css`
      width: 50%;
    `}
`;
export const ContainerIcon = styled.div`
  width: 90%;
  margin-top: 15px;
  display: flex;
  position: relative;
  justify-content: center;
  margin-bottom: 50px;
`;
export const Icono = styled(FontAwesomeIcon)`
  height: 100%;
  transform: scale(5);
`;
export const BoxCampo = styled.div`

  margin: 25px 10px 5px 10px;
  width: 100%;
  position: relative;
  z-index: 90;
  height: 75px;
  gap: 15px;
  display: flex;
  justify-content: center;
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

  &:focus {
    border: 2px solid black;
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }
`;
export const ContainerTexto = styled.div `
width: 100%;
height: 200px;
text-align: center;
overflow-y: auto;
`