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
  transition: all 2s ease-in-out;
  width: 60%;
  height: 65%;
  min-height: 100px;
  background: #B9D7EA;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 8px 7px 29px 8px;
  padding: 30px;
  top: 15px;
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
  justify-content: center;
  align-content: center;
  width: 100%;
`;
export const ContainerTabla = styled.div`
  width: 90%;
  z-index: 1;
  margin-top: 50px;
  overflow-y: auto;
`;

export const ContainerBusqueda = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;
export const InputBusqueda = styled.input`
  height: 45px;
  width: 50%;
  outline: none;
  margin-left: 20px;
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
`;
export const BotonBuscar = styled.button`
  padding: 2px;
  height: 50px;
  width: 7%;
  border: 4px solid black;
  background: transparent;
  border-radius: 50%;
  &:hover {
    outline: none;
    background: black;
    color: #d6d6d6;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.4);
  }
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
export const Botones = styled.button`
  width: 20%;
  height: 40px;
  border-radius: 20px;
  background: black;
  color: #d6d6d6;
  ${(props) =>
    props.cancel === "true" &&
    css`
      background: red;
      &:hover {
        border-color: red;
        color: red;
        background: #d6d6d6;
      }
    `}
    ${(props) =>
    props.cancel === "false" &&
    css`
      &:hover {
        border-color: black;
    color: black;
    background: #d6d6d6;
      }
    `}
`;
export const ContainerBoton = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  width: 100%;
  gap: 50px;
  margin-top: 20px;
`;