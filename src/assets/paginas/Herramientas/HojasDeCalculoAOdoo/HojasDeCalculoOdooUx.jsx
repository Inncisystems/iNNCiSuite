import styled from "styled-components"
import { ContenedorGenerico } from "../../../componentesGenerales/Layout/LayoutGeneral"
import { InputFile } from "./componentes/InputFileHojaDeCalculo"
import { BtnProcesar } from "./componentes/BtnProcesar"
import { useEffect, useState } from "react"
import { ProcesarInformacion } from "./componentes/ProcesarInformacion"

export const ContenedorHojasDeCalculoOdooUx = styled(ContenedorGenerico)`
    background-color: var(--colorPrincipal);
    position: relative;
`
export const HojasDeCalculoOdooUx = () => {
    const [files, setFiles] = useState([]);
    const [isBtnSubmit, setIsBtnSubmit] = useState();

    useEffect(() =>{
        console.log(files)
    },[files])
    return (
        <ContenedorHojasDeCalculoOdooUx>
            {isBtnSubmit ?
                <ProcesarInformacion files={files} />
                :
                <InputFile files={files} setFiles={setFiles} />
            }
            <BtnProcesar files={files} isBtnSubmit={isBtnSubmit} setIsBtnSubmit={setIsBtnSubmit} setFiles={setFiles} />
        </ContenedorHojasDeCalculoOdooUx>
    )
}