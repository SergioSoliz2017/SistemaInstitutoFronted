import styled, { css } from "styled-components";

export const BoxCampo = styled.div`
  margin-bottom: 5px;
  width: 70%;
  position: relative;
  z-index: 90;
  margin: 00px 10px 5px 10px;
  width: calc(25% - 20px);
  position: relative;
  z-index: 90;
  height: 75px;
`;
export const TextBox = styled.span`
  display: block;
  font-weight: 500;
  margin-bottom: 5px;
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
