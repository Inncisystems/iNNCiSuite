import React from "react";
import styled, { keyframes } from "styled-components";
import imgLoading from "../../src/Images/comercialLogo.webp"; // Asegúrate de que la ruta sea correcta

// Definimos la animación de rotación
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;


const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  width: 100vw;  
`;


const SpinningImage = styled.img`
  animation: ${spin} 2ms.5 linear infinite;  
  height: ${(props) => props.height || "50px"}; 
  width: ${(props) => props.width || "50px"};  
`;

export const Loading = ({ src = imgLoading, height, width }) => {
  return (
    <LoadingContainer>
      <SpinningImage src={src} alt="Loading..." height={height} width={width} />
    </LoadingContainer>
  );
};
