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
  height: 79%;
  min-height: 100px;
  background: #d6d6d6;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 8px 7px 29px 8px;
  padding: 20px;
  top: 50px;
  ${(props) =>
    props.ocultar === "true" &&
    css`
      opacity: 0.5;
    `}
    ${(props) =>
    props.tipo === "Tutor" &&
    css`
      height: 65%;
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
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 100%;
    background: linear-gradient(135deg, #000000, #d6d6d6);
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
`;
export const BoxCampo = styled.div`
  margin: 20px 10px 0px 10px;
  width: calc(50% - 25px);
  position: relative;
  z-index: 90;
  font-family:"bold";
  font-size: 20px;
`;
export const BotonTutores = styled.button`
  width: 50%;
  height: 100%;
  border-radius:25px;
  background: black;
  color: #d6d6d6;
`;
export const ContainerBoton = styled.div`
  margin: 30px 10px 0px 10px;
  position: relative;
  width: 100%;
  z-index: 90;
  display: flex;
  justify-content: center;
`;