import React from "react";
import styled from "styled-components";
import { PictureBg } from "../Genericos/Picture";
import imgFondo from "../../src/Images/ImagotipoSinBg.png"
import { useNavigate } from "react-router-dom";
const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const TopMenuStyled = styled.div`
  height: 80px;
  width: 100%;
  background-color: white;
  color: white;
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  h1{
    color: var(--colorPrincipal);
  }

`;
const ContenedorImg = styled.div`
  height: 90%;
  width: auto;
  object-fit: contain;
  position: absolute;
  left: 10px;
  cursor: pointer;

`
const TopMenu = () => {
  const imageSources = [ { src: imgFondo, media: "(max-width: 600px)" }];
  const Navigate = useNavigate();
  const handleClickMenu = () => {
    Navigate("/");
  };
  
  return (
    <TopMenuStyled>
      <ContenedorImg onClick={() =>handleClickMenu()}>
        <PictureBg imageSources={imageSources} altText="Imagen de fondo" />
      </ContenedorImg>
      <h1>Menú Superior</h1>
    </TopMenuStyled>
  )
}

const ContentContainer = styled.div`
  margin-top: 80px;
  flex: 1;
  width: 100%;
  overflow: auto;
  background-color: var(--colorPrincipal);
`;

export const LayoutConMenu = ({ children }) => {

  return (
    <LayoutContainer>
      <TopMenu />
      <ContentContainer>{children}</ContentContainer>
    </LayoutContainer>
  );
};


