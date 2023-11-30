import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const GlobalStyle = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  position: relative;
  display: flex;
  background-color: #D6E6F2;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%23D6E6F2' width='11' height='11'/%3E%3Crect fill='%23d4e5f1' x='10' width='11' height='11'/%3E%3Crect fill='%23d2e4f1' y='10' width='11' height='11'/%3E%3Crect fill='%23d1e2f0' x='20' width='11' height='11'/%3E%3Crect fill='%23cfe1ef' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%23cde0ef' y='20' width='11' height='11'/%3E%3Crect fill='%23cbdfee' x='30' width='11' height='11'/%3E%3Crect fill='%23cadeed' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%23c8dced' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%23c6dbec' y='30' width='11' height='11'/%3E%3Crect fill='%23c4daec' x='40' width='11' height='11'/%3E%3Crect fill='%23c3d9eb' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%23c1d8ea' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%23bfd6ea' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%23bed5e9' y='40' width='11' height='11'/%3E%3Crect fill='%23bcd4e8' x='50' width='11' height='11'/%3E%3Crect fill='%23bad3e8' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%23b9d2e7' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%23b7d0e6' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%23b5cfe6' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%23b3cee5' y='50' width='11' height='11'/%3E%3Crect fill='%23b2cde5' x='60' width='11' height='11'/%3E%3Crect fill='%23b0cce4' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%23aecae3' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%23adc9e3' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%23abc8e2' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%23aac7e1' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%23a8c6e1' x='70' width='11' height='11'/%3E%3Crect fill='%23a6c4e0' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%23a5c3e0' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%23a3c2df' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%23a1c1de' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%23a0c0de' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%239ebedd' x='80' width='11' height='11'/%3E%3Crect fill='%239dbddc' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%239bbcdc' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%2399bbdb' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%2398badb' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%2396b8da' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%2395b7d9' x='90' width='11' height='11'/%3E%3Crect fill='%2393b6d9' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%2391b5d8' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%2390b4d8' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%238eb2d7' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%238db1d6' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%238bb0d6' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%238aafd5' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%2388aed4' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%2387acd4' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%2385abd3' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%2384aad3' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%2382a9d2' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%2380a7d1' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%237fa6d1' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%237da5d0' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%237ca4cf' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%237aa3cf' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%2379a1ce' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%2377a0ce' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23769FCD' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImagenLogo = styled.img`
  position: relative;
  height: 150px;
  width: 150px;
  cursor: pointer;
  margin: 50px;
`;
export const ImagenCarga = styled.img`
  position: relative;
  height: 100%;
  cursor: pointer;
`;

export const ContainerInicioSesion = styled.div`
  width: 450px;
  height: 450px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: #F7FBFC;
  border-radius: 20px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
`;

export const BoxImputIcon = styled.div`
  position: relative;
  margin-bottom: 10px;
`;
export const Icon = styled.div`
  padding: 5px;
  height: 30px;
  width: 30px;
  position: absolute;
  top: 40%;
  box-sizing: border-box;
  left: 10px;
  transform: translateY(-50%);
`;

export const ImputIcon = styled.input`
  height: 45px;
  width: 250px;
  font-family: bold;
  outline: none;
  border-radius: 5px;
  border: 2px solid #3b256a;
  padding-right: 10px;
  font-size: 20px;
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
  padding-left: 45px;
`;
export const ImgIcon = styled(FontAwesomeIcon)`
  width: 100%;
  height: 100%;
`;

export const BotonIniciar = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 20px;
  font-size: 18px;
  font-weight: 1000;
  font-family: bold;
  background-color: #F7FBFC;
  &:hover {
    color: #F7FBFC;
    background: #769FCD;
    border: 1px solid white;
    transform: scale(1.1);
  }
`;

export const ConatinerBoton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  top: -40px;
  position: relative;
`;

export const ConatinerImput = styled.div`
  top: -40px;
  width: 80%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
