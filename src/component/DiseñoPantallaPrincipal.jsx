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
  width: 70%;
  height: 85%;
  background: red;
  position: absolute;
  top: 75px;
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
`;
export const TituloLateral = styled.span`
  height: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  color: #d6d6d6;
  font-size: 18px;
  font-family: bold;
  text-align: center;
`;
export const TituloRegistro = styled.span`
  margin: 25px;
  color: black;
  font-size: 20px;
  font-family: bold;
  text-align: center;
`;
export const PasosLateral = styled.span`
  margin-left: 9%;
  color: #d6d6d6;
  font-size: 15px;
  font-family: bold;
  margin-bottom: 20px;
  ${(props) =>
    props.seleccionado === "true" &&
    css`
      color: #4aba44;
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
`;
export const ImgIcon = styled(FontAwesomeIcon)`
  width: 100%;
  height: 100%;
`;
export const ContainerDatos = styled.div`
width: 100%;
height: 75%;
background: orange;
`