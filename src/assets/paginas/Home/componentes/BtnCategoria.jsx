import styled from "styled-components";
import { ContenedorGenerico } from "../../../componentesGenerales/Layout/LayoutGeneral";
import { useState } from "react";

const ContenedorBtn = styled.button`
    border: none;
    width: 100%;
    height: 60px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: pointer;
    transition: .2s ease transform;
    font-size: 18px;
    font-weight: bold;
    
    
    
    background-color: ${(props) => (props.active ? "var(--colorVerde)" : "var(--colorPrincipal)")};
    transform: ${(props) => (props.active ? "scale(0.95)" : "scale(1)")};
    &:hover{
        transform: ${(props) => (props.active ? "scale(0.95)" : "scale(0.97)")};
        transition: .2s ease transform;
    }
    
    @media (max-width: 600px) {
        height: 100%;
        width: auto;
        min-width: 100px;
        padding: 0px 15px;
        font-size: 14px;
    }
`
const ContenedorBtnCategoria = styled(ContenedorGenerico)`
    flex-direction: column;
    justify-content: start;
    gap: 10px;
    @media (max-width: 600px) {
        
        flex-direction: row;
        overflow-x: auto;
    }
`
export const BtnCategoria = ({ txt = "Categoria", setHerramientasFiltradasPorCategoria, categoria, todasLasHerramientas, categoriaSeleccionada, setCategoriaSeleccionada }) => {
    const handleClickCategoria = () => {
        if (categoria) {
            if (categoriaSeleccionada === categoria) {
                setHerramientasFiltradasPorCategoria(todasLasHerramientas);
                setCategoriaSeleccionada("s")
                console.log(todasLasHerramientas)
            } else {
                setHerramientasFiltradasPorCategoria(
                    todasLasHerramientas.filter(herramienta => herramienta.isHerramienta?.categoria === categoria)
                );
                setCategoriaSeleccionada(categoria);
            }

        }
    }
    return (
        <ContenedorBtn onClick={() => handleClickCategoria()} active={categoriaSeleccionada === categoria} >
            {txt}
        </ContenedorBtn>
    )
}

export const SeccionCategoria = ({ setHerramientasFiltradasPorCategoria, todasLasHerramientas }) => {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState();

    const categoriasDeFiltrado = [
        { txt: "Odoo", categoria: "odoo" },
        { txt: "Reportería", categoria: "reporteria" },
    ]
    return (
        <ContenedorBtnCategoria >
            {categoriasDeFiltrado.map((categoria, index) => (
                <BtnCategoria key={index} txt={categoria.txt} categoria={categoria.categoria} setHerramientasFiltradasPorCategoria={setHerramientasFiltradasPorCategoria} todasLasHerramientas={todasLasHerramientas} setCategoriaSeleccionada={setCategoriaSeleccionada} categoriaSeleccionada={categoriaSeleccionada} />
            ))}
        </ContenedorBtnCategoria>
    )
}
