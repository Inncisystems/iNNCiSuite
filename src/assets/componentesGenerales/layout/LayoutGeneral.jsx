import styled from "styled-components"

export const LayoutGeneralStyled = styled.div`
    display: flex;
    flex-direction: column;

    width: 100dvw;
    height: 100dvh; 
    
    max-height: auto;

    overflow: hidden;
    position: relative;

    transition: height 0.2s ease-in-out, width 0.2s ease-in-out ;

`
export const LayoutGeneral = ({children}) =>{
    return(
        <LayoutGeneralStyled>
            {children}
        </LayoutGeneralStyled>
    )
}

export const ContenedorCentradoStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: ${props => props.isLeftMenuOpen ? "calc(100% - var(--WidthLeftMenu))" : "100%"};
    transition: width .3s ease;
    
    height: 100%; 

`
export const ContenedorCentradoPaddings = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding:  20px; 

    width: 100%;
    height: 100%; 

`
export const ContenedorApp = styled.div`
    display: flex;
  

    width: 100%;
    height: 100%; 

`
export const ContenedorGenerico = styled.div`
    width: ${props => props.width ? props.width : "100%"};
    height: ${props => props.height ? props.height : "100%"};

    display: ${({display}) => display || "flex" };
    gap: ${({gap}) => gap || "0px" };
    justify-content: center;
    align-items: ${props => props.align ? props.align : "center"};
    

    
`
