import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const BoxCampo = styled.div`
  margin: 20px 0 12px 0;
  width: cal(100% / 2 - 20px);
  position: relative;
  z-index: 90;
  ${(props) =>
    props.tipo == "categoria" &&
    css`
      margin: 5px 10px 0px 10px;
    `}
  ${(props) =>
    props.tipo == "arbitro" &&
    css`
      margin: 0px 0 15px 0;
      width: cal(100% / 2 - 20px);
      position: relative;
      z-index: 90;
    `}
    ${(props) =>
    props.tipo == "lugar" &&
    css`
      margin: 5px 0 5px 0;
      width: 300px;
      position: relative;
      z-index: 90;
    `}
`;
export const IconoValidacion = styled(FontAwesomeIcon)`
  position: absolute;
  right: 12px;
  bottom: 14px;
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
`;
export const InputBox = styled.input`
  height: 45px;
  width: 100%;
  outline: none;
  border-radius: 5px;
  border: 2px solid #ff7c01;
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
