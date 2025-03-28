import styled from "styled-components";

const BtnGenericoStyled = styled.button`
  padding: 12px 20px;
  background-color: white;
  color: var(--colorPrincipal, #007bff);
  border: 2px solid var(--colorPrincipal, #007bff);
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.1s ease-in-out;



  &:active {
    transform: scale(0.95);
  }
`;

export const BtnGenerico = ({ onClick, txt }) => {
    return(
        <BtnGenericoStyled onClick={onClick}>{txt}</BtnGenericoStyled>
    ) 
};

