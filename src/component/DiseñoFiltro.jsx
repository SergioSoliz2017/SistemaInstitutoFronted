import styled, { css } from "styled-components";
import { Calendar } from "react-date-range";
export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 20%;
  top: -3%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0s ease-in-out;
  z-index: 100;
  ${(props) =>
    props.tipo === "true" &&
    css`
      left: 20.8%;
    `}
  ${(props) =>
    props.tipo === "false" &&
    css`
      top: 9%;
      left: 18.4%;
    `}
    @media (max-width: 800px) {
    top: -16%;
    left: 0%;
  }
`;
export const ContenedorModal = styled.div`
  transition: all 0s ease-in-out;
  width: 38%;
  height: 250px;
  min-height: 100px;
  background: #f7fbfc;
  border: 1px solid black;
  position: relative;
  border-radius: 15px;
  box-shadow: rgba(100, 100, 111, 0.2) 8px 7px 29px 8px;
  padding: 20px;
  top: 25px;
  z-index: 1;
  ${(props) =>
    props.tipo === "true" &&
    css`
      width: 37%;
    `}
  ${(props) =>
    props.tipo === "false" &&
    css`
      width: max-content;
      height: max-content;
    `}
    @media (max-width: 800px) {
    width: 80%
      ${(props) =>
        props.tipo === "false" &&
        css`
        width:80%;
        height: max-content;
    `};
  }
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
export const ContainerTexto = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;
export const Text = styled.div`
  font-size: 15px;
  text-align: center;
  cursor: pointer;
  position: relative;
  width: calc(100% / 3);
  ${(props) =>
    props.titulo === "true" &&
    css`
      font-weight: 1000;
      border-bottom: 2px solid black;
    `}
  ${(props) =>
    props.seleccionado === "true" &&
    css`
      font-weight: 1000;
    `}
    ${(props) =>
    props.data === "true" &&
    css`
      padding: 5px;
    `}
`;
export const InputDate = styled.input`
  width: 100%;
  border-radius: 5px;
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
  ${(props) =>
    props.alado === "true" &&
    css`
      right: 60px;
      &:hover {
        color: #d6d6d6;
        background: black;
      }
    `}
`;
export const DetalleUsuario = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90%;
`;
export const ContainerTabla = styled.div`
  width: 100%;
  z-index: 1;
  height: 100%;
  overflow-y: auto;
`;
export const Calendario = styled(Calendar)``;
