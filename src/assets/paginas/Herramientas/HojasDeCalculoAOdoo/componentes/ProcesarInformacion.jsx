import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Loading } from "../../../../componentesGenerales/Genericos/Loading";
import Papa from "papaparse";

const BtnDescargar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 200px;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 44px;
  background-color: green;
  cursor: pointer;
  text-align: center;
  transition: border-color 0.3s;
  p{
    color: white;
    font-size: 24px;
    font-weight: bold;

  }
  &:hover {
    border-color: #007bff;
  }
`;

const ContenedorLoading = styled(BtnDescargar)`
  background-color: white;
  &:hover {
    border: 2px solid #ccc;
  }
`;



export const ProcesarInformacion = ({ onFilesSelected, files, setFiles }) => {
  const [isLoading, setIsLoading] = useState(true); // Empieza con el estado de cargando
  const [isCombined, setIsCombined] = useState(false);
  const [combinedData, setCombinedData] = useState(null);

  // Se ejecuta al montar el componente y cuando cambian los archivos
  useEffect(() => {
    if (files && files.length >= 2) {
      juntarArchivosCSV(files[0], files[1]).then((data) => {
        setCombinedData(data);
        setIsCombined(true);
        setIsLoading(false); // Cuando termine de combinar los archivos, dejamos de mostrar el loading
      });
    }
  }, [files]);

  const handleDownload = () => {
    // Aquí no necesitas mostrar loading, solo el archivo se descargará
    downloadCSV(combinedData);
  };

  // Función para combinar dos archivos CSV; retorna una promesa con los datos combinados
  const juntarArchivosCSV = (file1, file2) => {
    return new Promise((resolve, reject) => {
      const reader1 = new FileReader();
      const reader2 = new FileReader();

      // Generador de ID único (puedes usar un contador o UUID)
      let uniqueIdCounter = 1;

      reader1.onload = () => {
        const data1 = Papa.parse(reader1.result, { header: true, skipEmptyLines: true }).data;
        const headers1 = Papa.parse(reader1.result, { header: true }).meta.fields;

        reader2.onload = () => {
          const data2 = Papa.parse(reader2.result, { header: true, skipEmptyLines: true }).data;
          const headers2 = Papa.parse(reader2.result, { header: true }).meta.fields;

          // Combinamos las cabeceras de ambos archivos sin duplicados
          const combinedHeaders = Array.from(new Set([...headers1, ...headers2, 'uniqueId'])); // Agregamos el uniqueId a los headers

          // Creamos un array para almacenar las filas combinadas
          const combinedData = [];

          // Procesamos las filas del primer archivo y les asignamos un ID único
          data1.forEach((row) => {
            const newRow = { ...row, uniqueId: uniqueIdCounter++ }; // Generamos un ID único
            combinedData.push(newRow);
          });

          // Procesamos las filas del segundo archivo y les asignamos un ID único
          data2.forEach((row) => {
            const newRow = { ...row, uniqueId: uniqueIdCounter++ }; // Generamos un ID único
            combinedData.push(newRow);
          });

          // Ahora `combinedData` tiene las filas de ambos archivos con IDs únicos
          resolve({ headers: combinedHeaders, data: combinedData });
        };

        reader2.onerror = (error) => reject(error);
        reader2.readAsText(file2);
      };

      reader1.onerror = (error) => reject(error);
      reader1.readAsText(file1);
    });
  };

  // Función para convertir los datos combinados a CSV y disparar la descarga
  const downloadCSV = (data) => {
    // Convertir los datos a CSV utilizando Papa.unparse
    const csv = Papa.unparse(data);
    // Crear un blob a partir del CSV
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    // Crear un enlace temporal y simular el clic para descargar el archivo
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "datos_combinados.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {isLoading ? (
        <ContenedorLoading>
          <Loading width="150px" height="150px" />
          <p>Combinando archivos...</p>
        </ContenedorLoading>
      ) : isCombined ? (
        <BtnDescargar onClick={handleDownload}>
          <p>Descargar</p>
        </BtnDescargar>
      ) : (
        <ContenedorLoading>
          <Loading width="150px" height="150px" />
        </ContenedorLoading>
      )}
    </>
  );
};
