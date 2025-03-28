import { useState } from "react";
import styled from "styled-components"

const ContenedorBuscadorHerramienta = styled.div`
    width: 100%;
    max-width: 600px;
    padding: 25px 10px 10px;
`
const BuscadorHerramientaStyled = styled.input`
    background-color: white;
    color: var(--colorPrincipal);
    height: 60px;
    padding: 5px 10px;
    width: 100%;
    border: none;
    border-radius: 20px;
    font-size: 18px;
    ::placeholder{
        color: var(--colorPrincipal);
        opacity: 1;
    }
`
export const BuscadorHerramienta = ({ setHerramientasFiltradas, todasLasHerramientas }) => {
    const [busqueda, setBusqueda] = useState("");
  
    const handleChange = (e) => {
      const valor = e.target.value.toLowerCase();
      setBusqueda(valor);
  
      const herramientasFiltradas = todasLasHerramientas.filter((herramienta) =>
        herramienta.isHerramienta &&
        (herramienta.isHerramienta.titulo.toLowerCase().includes(valor) ||
         herramienta.isHerramienta.descripcion.toLowerCase().includes(valor))
      );
  
      setHerramientasFiltradas(herramientasFiltradas);
    };
  
    return (
      <ContenedorBuscadorHerramienta>
        <BuscadorHerramientaStyled
          type="text"
          placeholder="¿Qué herramienta buscas?"
          value={busqueda}
          onChange={handleChange}
        />
      </ContenedorBuscadorHerramienta>
    );
  };