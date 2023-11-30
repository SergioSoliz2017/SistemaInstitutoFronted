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
  transition: all 2s ease-in-out;
  width: 30%;
  height: 59%;
  min-height: 100px;
  background: #F7FBFC;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 8px 7px 29px 8px;
  padding: 20px;
  top: 50px;
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
export const ContainerBoton = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  width: 100%;
  gap: 50px;
  margin-top: 20px;
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
export const BoxCampo = styled.div`
  margin: 10px 10px 12px 10px;
  width: calc(100% - 25px);
  position: relative;
  z-index: 90;
  height: 75px;
  display: inline-block;
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
export const InputBox = styled.input`
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
    &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
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
`;