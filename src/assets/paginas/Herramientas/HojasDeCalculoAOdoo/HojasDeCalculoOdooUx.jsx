import styled from "styled-components"
import { ContenedorGenerico } from "../../../componentesGenerales/Layout/LayoutGeneral"
import { InputFile } from "./componentes/InputFileHojaDeCalculo"
import { BtnProcesar } from "./componentes/BtnProcesar"
import { useEffect, useState } from "react"
import { ProcesarInformacion } from "./componentes/ProcesarInformacion"
import { TxtGenerico } from "../../../componentesGenerales/Genericos/Textos"

export const ContenedorHojasDeCalculoOdooUx = styled(ContenedorGenerico)`
    background-color: var(--colorPrincipal);
    position: relative;
    flex-direction: column;
    max-width: 90%;
    gap: 10px;
`
export const HojasDeCalculoOdooUx = () => {
    const [files, setFiles] = useState([]);
    const [isBtnSubmit, setIsBtnSubmit] = useState();

    useEffect(() =>{
        console.log(files)
    },[files])
    return (
        <ContenedorHojasDeCalculoOdooUx>
            <TxtGenerico align="center" color="white"> Solo permite archivos .csv (separados por comas). </TxtGenerico>
            {isBtnSubmit ?
                <ProcesarInformacion files={files} />
                :
                <InputFile files={files} setFiles={setFiles} />
            }
            <BtnProcesar files={files} isBtnSubmit={isBtnSubmit} setIsBtnSubmit={setIsBtnSubmit} setFiles={setFiles} />
        </ContenedorHojasDeCalculoOdooUx>
    )
}