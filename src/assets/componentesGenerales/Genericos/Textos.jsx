import styled from "styled-components"

export const TxtGenerico = styled.p`
    color: ${props => props.color ? props.color : " var(--colorPrincipal)"} ;;
    margin: 0;
    font-size: ${props => props.size ? props.size : "16px"} ;
    font-weight: ${props => props.weight ? props.weight : "bold"} ;
    line-height: ${props => props.line ? props.line : ""} ;
    text-align: ${props => props.align ? props.align : ""} ;
`
export const H1Generico = styled.h1 `
    color: ${props => props.color ? props.color : "var(--colorPrincipal)"};
    text-align: ${props => props.align ? props.align : ""} ;
    margin: ${({ margin }) => margin || undefined};

    font-size: 32px;
    font-weight: bold;
`