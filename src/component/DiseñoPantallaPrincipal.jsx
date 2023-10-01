import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Nav = styled.nav`
  background: #d6d6d6;
  height: 110px;
  width: 100%;
  border-bottom: 2px solid black;
  display: flex;
  justify-content: flex-start;
  padding: 0.5rem calc((100vw-1000px) / 2);
  z-index: 10;
  position: absolute;
  top: 0%;
`;
export const ImagenLogo = styled.img`
  position: relative;
  height: 85%;
  width: 8%;
  left: 2%;
  top: 5px;
  cursor: pointer;
  padding: 5px;
`;
export const ContainerBotonNav = styled.div`
  width: 100%;
  margin-left: 5%;
  display: flex;
  gap: 50px;
  align-items: center;
`;
export const BotonNav = styled.button`
  height: 50px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 20px;
  padding: 10px;
  &:hover {
    color: #d6d6d6;
    background: black;
  }
  ${(props) =>
    props.seleccionado === "true" &&
    css`
      color: #d6d6d6;
      background: black;
      border: 1px solid #d6d6d6;
    `}
`;
export const ContainerPrincipal = styled.div`
  width: 100%;
  height: 100%;
  top: 48px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.ocultar === "true" &&
    css`
      opacity: 0.5;
    `}
`;
export const ImagenLogoCentro = styled.img`
  position: relative;
  height: 70%;
  width: 35%;
  left: 2%;
  top: 5px;
  cursor: pointer;
  padding: 5px;
`;
export const ContainerContenido = styled.div`
  width: 80%;
  height: 80%;
  position: absolute;
  top: 90px;
  display: flex;
`;
export const ContainerLateral = styled.div`
  width: 30%;
  height: 100%;
  background: black;
  display: flex;
  flex-direction: column;
`;
export const ContainerRegistro = styled.div`
  width: 70%;
  height: 100%;
  background: #d6d6d6;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ContainerCarga = styled.div`
  width: 100%;
  height: 100%;
  background: #d6d6d6;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ImagenCarga = styled.img``;
export const TituloLateral = styled.span`
  font-size: 25px;
  font-weight: 1000;
  position: relative;
  font-family: "bold";
  text-align: center;
  margin: 10px 10px 15% 10px;
  color: #d6d6d6;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 100%;
    background: linear-gradient(135deg, #000000, #ffffff);
  }
`;
export const TituloRegistro = styled.span`
  margin: 25px;
  color: black;
  font-size: 20px;
  font-family: bold;
  text-align: center;
`;
export const ContainerPasosLateral = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  ${(props) =>
    props.button === "true" &&
    css`
      margin-bottom: 50px;
      cursor: pointer;
    `}
`;
export const CircleProgress = styled.div`
  margin: 5px 20px 5px 30px;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #d6d6d6;
  border-radius: 50%;
  ${(props) =>
    props.seleccionado === "true" &&
    css`
      background: green;
    `}
`;
export const Rectangulo = styled.div`
  width: 15px;
  height: 30px;
  margin: -2px 20px -3px 42.5px;
  background: #d6d6d6;
  ${(props) =>
    props.seleccionado === "true" &&
    css`
      background: green;
    `}
`;

export const PasosLateral = styled.span`
  color: #d6d6d6;
  font-size: 18px;
  font-family: bold;
  ${(props) =>
    props.seleccionado === "true" &&
    css`
      color: green;
    `}
`;
export const BotonSiguientePasos = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 20px;
  ${(props) =>
    props.right === "true" &&
    css`
      margin-left: 80%;
    `}
  ${(props) =>
    props.ocultar === "true" &&
    css`
      visibility: hidden;
    `}
`;
export const ContainerBotonSiguientePasos = styled.div`
  width: 100%;
  height: 50px;
  left: 10px;
  display: flex;
  position: relative;
`;

export const ContainerImgIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: auto;
  width: 38px;
  height: 38px;
  padding: 10px;
  border-radius: 50%;
  &:hover {
    color: #d6d6d6;
    background: black;
  }
`;
export const ImgIcon = styled(FontAwesomeIcon)`
  width: 100%;
  height: 100%;
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
`;
export const ContainerDatos = styled.div`
  width: 100%;
  display: flex;
  margin-bottom:-10px;
`;

export const Category = styled.div`
  display: flex;
  width: 100%;
  margin: 14px 0;
  justify-content: center;
  gap: 250px;
`;
export const Label = styled.label`
  display: flex;
  align-items: center;
  font-family: "bold";
`;
export const Radio = styled.input`
  height: 18px;
  width: 18px;
  border-radius: 50%;
  margin-right: 10px;
`;
export const Titulo = styled.div`
  font-size: 25px;
  margin-top: 10px;
  font-weight: 1000;
  position: relative;
  font-family: "bold";
  text-align: center;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 100%;
    background: linear-gradient(135deg, #000000, #ffffff);
  }
  ${(props) =>
    props.espacio === "true" &&
    css`
      top:20px;
    `}
`;
export const ContainerTodo = styled.div`
  width: 100%;
  height: 88%;
`;
export const ContainerTabla = styled.div`
  width: 90%;
  height: 78%;
  z-index: 1;
  margin-top: 50px;
  overflow-y: auto;
`;
export const ContainerBotonBusqueda = styled.div`
  width: 90%;
  height: 60px;
  z-index: 1;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: end;
`;
export const BotonBuscar = styled.button `
 height: 80%;
 width: 8%;
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
`