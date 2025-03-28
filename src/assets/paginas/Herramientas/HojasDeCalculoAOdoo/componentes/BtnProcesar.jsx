import styled from "styled-components";
import { BtnGenerico } from "../../../../componentesGenerales/Btns/BtnsGenericos";

const ContenedorBtnProcesar = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

export const BtnProcesar = ({ files, setIsBtnSubmit, isBtnSubmit,setFiles }) => {
  const handleClick = () => {
    if (files.length > 0) { // Comprobamos si el array tiene al menos un archivo
      console.log("hola");
      setIsBtnSubmit(true);
    } else {
      alert("Es necesario agregar al menos una hoja de cálculo");
    }
  };
  const handleClickRegresar = () =>{
    setIsBtnSubmit(false)
    setFiles([])
  }

  return (
    <ContenedorBtnProcesar>
      {isBtnSubmit ?
        <BtnGenerico txt="Regresar" onClick={() => handleClickRegresar()} />
        :
        <BtnGenerico txt="Procesar" onClick={() => handleClick()} />
      }
    </ContenedorBtnProcesar>
  );
};
