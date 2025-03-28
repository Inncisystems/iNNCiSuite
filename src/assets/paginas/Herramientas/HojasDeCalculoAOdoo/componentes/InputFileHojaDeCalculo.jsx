import React, { useState } from "react";
import styled from "styled-components";

const FileInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  height: 200px;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 44px;
  background-color: white;
  cursor: pointer;
  text-align: center;
  transition: border-color 0.3s;

  &:hover {
    border-color: #007bff;
  }
`;

const HiddenInput = styled.input`
  display: none;
`;

const FileList = styled.ul`
  list-style: none;
  padding: 0;
  width: 80%;
  height: fit-content;
  padding: 20px 10px;
  border-radius: 0 0 20px 20px;
  background-color: white;
  overflow-y: auto;
  background: rgb(52, 152, 219);
  background: linear-gradient(0deg, white 84%, rgba(255, 255, 255, 0) 100%);
`;

const FileItem = styled.li`
  font-size: 14px;
  color: #333;
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContenedorInputField = styled.div`
  width: 400px;
  height: auto;
  display: grid;
  grid-template-rows: 200px 150px;
`;

const ContenedorHojasSubidas = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const DeleteButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 5px 10px;
  font-size: 12px;
  margin-left: 10px;
  &:hover {
    background-color: darkred;
  }
`;

export const InputFile = ({ onFilesSelected, files, setFiles }) => {
  const handleFiles = (newFiles) => {
    const validFiles = Array.from(newFiles).filter(file =>
      file.name.endsWith(".csv")
    );
    if (validFiles.length > 0) {
      setFiles(validFiles);
      if (onFilesSelected) {
        onFilesSelected(validFiles);
    
      }
    }
  };

  const handleChange = (e) => {
    handleFiles(e.target.files);
    
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
    
  };

  const handleDelete = (index) => {
    const updatedFiles = files.filter((_, fileIndex) => fileIndex !== index);
    setFiles(updatedFiles);
  };

  return (
    <ContenedorInputField>
      <FileInputContainer
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onClick={() => document.getElementById("fileInput").click()}
      >
        <p>Arrastra y suelta archivos aquí o haz clic para seleccionar</p>
        <HiddenInput
          id="fileInput"
          type="file"
          multiple
          accept=".csv" // Solo acepta archivos .csv
          onChange={handleChange}
        />
      </FileInputContainer>
      <ContenedorHojasSubidas>
        {files.length > 0 && (
          <FileList>
            {files.map((file, index) => (
              <FileItem key={index}>
                {file.name}
                <DeleteButton onClick={() => handleDelete(index)}>X</DeleteButton>
              </FileItem>
            ))}
          </FileList>
        )}
      </ContenedorHojasSubidas>
    </ContenedorInputField>
  );
};
