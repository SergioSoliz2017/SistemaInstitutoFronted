import styled, { css } from "styled-components";
import Multiselect from "multiselect-react-dropdown";

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 80;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 2s ease-in-out;
`;
export const ContenedorModal = styled.div`
  transition: all 2s ease-in-out;
  width: 30%;
  height: 40%;
  min-height: 100px;
  background: #F7FBFC;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 8px 7px 29px 8px;
  padding: 30px;
  top: 10px;
  ${(props) =>
    props.tipo === "sede" &&
    css`
      height: 50%;
    `}
  ${(props) =>
    props.tipo === "trabajador" &&
    css`
      height: 85%;
      width: 35%;
      @media (max-width: 800px) {
        height:70%;
  }
    `}
    @media (max-width: 800px) {
    width:80%;
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
    font-size: 18.5px;
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
  justify-content: center;
  align-content: center;
  width: 100%;
`;

export const BoxCampo = styled.div`
  margin: 00px 10px 5px 10px;
  position: relative;
  height: 75px;
  width: 15%;
  ${(props) =>
    props.campo === "true" &&
    css`
      margin: 00px 10px 5px 10px;
      width: calc(31% - 20px);
      position: relative;
      z-index: 90;
      height: 75px;
    `}
  ${(props) =>
    props.campo === "sede" &&
    css`
      margin: 00px 10px 5px 10px;
      width: 70%;
      position: relative;
      height: 75px;
    `}
`;
export const BotonGrupo = styled.button`
  height: 45px;
  margin-top: 29px;
  width: 100%;
  width: 100%;
  outline: none;
  border-radius: 25px;
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
export const TextBox = styled.span`
  width: 100%;
  font-weight: 500;
`;
export const ContainerTabla = styled.div`
  width: 80%;
  height: 150px;
  overflow-y: auto;
`;
export const ContainerBoton = styled.div`
  margin: 25px 10px 0px 10px;
  position: relative;
  width: 100%;
  height: 40px;
  z-index: 90;
  display: flex;
  justify-content: center;
`;
export const BotonGuardar = styled.button`
  height: 100%;
  border-radius: 25px;
  background: black;
  color: #d6d6d6;
  &:hover {
    border: 2px solid black;
    outline: none;
    background: #d6d6d6;
    color: black;
    border: 2px solid black;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }
`;

export const MultiSelect = styled(Multiselect)`
  color: black;
  margin-top: 5px;
  border-radius: 5px;
  z-index: 200;
  z-index: 150;
  border: 2px solid #000000;
  background: white;
  ${(props) => props.sede === "true" && css``}
`;
