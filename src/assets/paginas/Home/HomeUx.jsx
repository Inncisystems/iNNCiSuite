import styled from "styled-components"
import { ContenedorGenerico } from "../../componentesGenerales/Layout/LayoutGeneral"
import { H1Generico } from "../../componentesGenerales/Genericos/Textos"
import { BtnCategoria, SeccionCategoria } from "./componentes/BtnCategoria"
import { BuscadorHerramienta } from "./componentes/BuscadorHerramienta"
import { Herramientas } from "./componentes/Herramientas"
import { useEffect, useState } from "react"
import { routesConfig } from "../../../routes"

const ContenedorHomeUx = styled(ContenedorGenerico)`
    display: grid;
    grid-template-columns: 250px 1fr;
    height: 100%;
    width: 100%;
    

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        grid-template-rows: 100px 1fr;
    }
        
`

const ContenedorMenuLateral = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 20px;
    height: 100%;
    width: 100%;
    padding:  20px 8px;
    @media (max-width: 600px) {
        
        grid-template-rows: 36px auto;
        padding:  5px ;
        overflow: hidden;
        gap: 10px;

        h1{
            margin: 0;
            font-size: 24px;
        }
    }
`



const ContenedorDerecho = styled(ContenedorGenerico)`
    flex-direction: column;
    justify-content: start;
    max-height: 100%;
    gap: 10px;
    background-color: var(--colorPrincipal);
    overflow-y: auto;
`

export const HomeUx = () => {

    const todasLasHerramientas = routesConfig.filter(route => route.isHerramienta);

    const [herramientasFiltradasPorCategoria, setHerramientasFiltradasPorCategoria] = useState(todasLasHerramientas);
    const [herramientasFiltradasPorTexto, setHerramientasFiltradasPorTexto] = useState(herramientasFiltradasPorCategoria);
   
    useEffect(() =>{
        setHerramientasFiltradasPorTexto(herramientasFiltradasPorCategoria)
    },[herramientasFiltradasPorCategoria])
    return (
        <ContenedorHomeUx>
            <ContenedorMenuLateral>
                <H1Generico margin="10px 0" align="center"> iNNCi SUITE </H1Generico>
                <SeccionCategoria setHerramientasFiltradasPorCategoria={setHerramientasFiltradasPorCategoria} todasLasHerramientas={todasLasHerramientas} />
            </ContenedorMenuLateral>

            <ContenedorDerecho>
                <BuscadorHerramienta setHerramientasFiltradas={setHerramientasFiltradasPorTexto} todasLasHerramientas={herramientasFiltradasPorCategoria}/>       
                <Herramientas herramientas={herramientasFiltradasPorTexto} />       
            </ContenedorDerecho>
        </ContenedorHomeUx>
    )
}
