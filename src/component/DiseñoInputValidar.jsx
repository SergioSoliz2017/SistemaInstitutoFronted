import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const BoxCampo = styled.div`
  margin-bottom: 5px;
  width: 70%;
  position: relative;
  z-index: 90;
  ${(props) =>
    props.crear === "true" &&
    css`
      margin: 0px 10px 5px 10px;
    `}
  ${(props) =>
    props.saldo === "true" &&
    css`
      margin: 15px 0px 5px 0px;
      width: 90%;
      display: flex;
      justify-content: center;
      gap: 20%;
      position: relative;
    `}
  ${(props) =>
    props.sub === "true" &&
    css`
      display: flex;
      gap: 10px;
      align-items: center;
    `}
    ${(props) =>
    props.ultimo === "true" &&
    css`
      margin-bottom: 25px;
    `}
    ${(props) =>
    props.curso === "true" &&
    css`
      margin: 00px 10px 5px 19.1px;
      width: calc(20% - 20px);
      position: relative;
      z-index: 90;
      height: 75px;
    `}
    ${(props) =>
    props.buscar === "true" &&
    css`
      margin: 20px 30px 0px 10px;
      width: calc(30% - 20px);
      z-index: 90;
    `}
    ${(props) =>
    props.precio === "true" &&
    css`
      width: calc(20% - 20px);
      position: relative;
      margin-right: 20px;
      z-index: 90;
    `}
    ${(props) =>
    props.boton === "true" &&
    css`
      margin-top: -20px;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
    ${(props) =>
    props.precioT === "true" &&
    css`
      margin: 0px 30px 0px 10px;
      width: calc(15% - 20px);
      position: relative;
      z-index: 90;
    `}
`;
export const IconoValidacion = styled(FontAwesomeIcon)`
  position: absolute;
  right: 12px;
  bottom: 11px;
  z-index: 100;
  font-size: 20px;
  opacity: 0;

  ${(props) =>
    props.valido === "false" &&
    css`
      opacity: 1;
      color: red;
    `}
  ${(props) =>
    props.valido === "true" &&
    css`
      opacity: 1;
      color: green;
    `}
    ${(props) =>
    props.precio === "true" &&
    css`
      bottom: 16px;
    `}
`;
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
export const TextPrecio = styled.span`
  height: 40px;
  width: 100%;
  font-size: 18px;
  border-bottom-width: 2px;
  transition: all 0.1s ease;
  line-height: 45px;
`;
export const TextBox = styled.span`
  display: block;
  font-weight: 500;
  margin-bottom: 5px;
  ${(props) =>
    props.titulo === "true" &&
    css`
      width: auto;
    `}
  ${(props) =>
    props.saldo === "true" &&
    css`
      width: 30%;
    `}
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
export const IconoDescuento = styled(FontAwesomeIcon)``;
