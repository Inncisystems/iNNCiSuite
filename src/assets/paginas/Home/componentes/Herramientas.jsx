import styled from "styled-components"
import { PictureGenerico } from "../../../componentesGenerales/Genericos/Picture"
import imgInnci from "../../../src/Images/ImagotipoSinBg.png"

import { useNavigate } from "react-router-dom"
import { TxtGenerico } from "../../../componentesGenerales/Genericos/Textos"

const ContenedorHerramientas = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 20px;


`
const ContenedorHerramienta = styled.div`
    display: grid;
    grid-template-rows: 125px 100px;
    width: 250px;
    border: solid 3px white;
    cursor: pointer;
    transition: transform .2s ease;
    &:hover{
        transform: scale(.95);
        transition: transform .2s ease;
    }
    @media (max-width: 600px) {
        width: 45%;
        grid-template-rows: 125px auto;
    }
    
`
const ContenedorTop = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    padding: 10px;
    img{
        object-fit: contain;
    }
`
const ContenedorBottom = styled.div`
    width: 100%;
    height: 100%;
    display: grid; 
    grid-template-rows: 1fr auto;
    padding: 5px;
    gap: 5px;

`
const TxtDescripcion = styled(TxtGenerico)`
    @media (max-width: 320px) {
      display: none;
    }
`
const Herramienta = ({ src = imgInnci, alt = "Imagen", titulo = "Titulo", descripcion="Descripcion de la app", to="/" }) => {
    const Navigate = useNavigate();
    const handleClick = ()=>{
        Navigate(to);
    }
    return (
        <ContenedorHerramienta onClick={() => handleClick()} >
            <ContenedorTop>
                <PictureGenerico src={src} alt={alt} />
            </ContenedorTop>
            <ContenedorBottom>
                <TxtGenerico color="white">{titulo}</TxtGenerico>
                <TxtDescripcion color="white" size="14px">{descripcion}</TxtDescripcion>
            </ContenedorBottom>

        </ContenedorHerramienta>
    )
}
export const Herramientas = ({herramientas}) => {
      
      
    return (
        <ContenedorHerramientas>
            {herramientas.map((herramienta,index ) =>(
                <Herramienta titulo={herramienta.isHerramienta.titulo} descripcion={herramienta.isHerramienta.descripcion} to={herramienta.isHerramienta.to} src={herramienta.isHerramienta.img.src} alt={herramienta.isHerramienta.img.alt} key={index} />
            ) )}

        </ContenedorHerramientas>
    )
}