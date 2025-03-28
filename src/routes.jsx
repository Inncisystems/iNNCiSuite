import { HojasDeCalculoOdoo } from "./assets/paginas/Herramientas/HojasDeCalculoAOdoo";
import { Home } from "./assets/paginas/Home";
import imgInnci from "./assets/src/Images/ImagotipoSinBg.png";
import imgComercial from "./assets/src/Images/comercialLogo.webp";
const imagenes ={
  innci: {src:imgInnci, alt:"Logo iNNCi"},
  innciComercial: {src:imgComercial, alt:"Logo iNNCi comercial"},
}

export const routesConfig = [
  {
    path: '/',
    element: <Home />,
    name: 'Home',
  },
  {
    path: '/herramienta/unir-dos-hojas-de-calculo',
    element: <HojasDeCalculoOdoo />,
    name: 'TransformarExcel',
    isHerramienta: {
      to: "/herramienta/unir-dos-hojas-de-calculo",
      titulo: "Excel a Odoo",
      descripcion: "Herramienta que convierte tus formatos .csv para que Odoo pueda entenderlos",
      img: imagenes.innciComercial,
       categoria:"odoo"
    }
  },
  {
    path: '/herramienta/formato-contable',
    element: <Home />,
    name: 'FormatoContable',
    isHerramienta: {
      to: "/herramienta/formato-contable",
      titulo: "Formato Contable",
      descripcion: "Convierte tus archivos contables a un formato compatible con otras plataformas",
      img: imagenes.innci,
     
    }
  },
  {
    path: '/herramienta/analisis-datos',
    element: <Home />,
    name: 'AnalisisDatos',
    isHerramienta: {
      to: "/herramienta/analisis-datos",
      titulo: "Análisis de Datos",
      descripcion: "Analiza grandes volúmenes de datos y obtén reportes detallados",
      img: imagenes.innciComercial,
      categoria:"odoo"
    }
  },
  {
    path: '/herramienta/generador-informes',
    element: <Home />,
    name: 'GeneradorInformes',
    isHerramienta: {
      to: "/herramienta/generador-informes",
      titulo: "Generador de Informes",
      descripcion: "Genera informes automáticos basados en los datos de tu negocio",
      img: imagenes.innci,
    }
  }
];
