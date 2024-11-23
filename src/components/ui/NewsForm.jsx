"use client";
import React, { useState, useRef } from "react";
import Button from './Button';

const NewsForm = () => {
  const [news, setNews] = useState({
    id: "",
    title: "",
    description: "",
    src: null,
  });

  const [preview, setPreview] = useState({
    src: null,
  });

  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNews((prevNews) => ({ ...prevNews, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNews((prevNews) => ({ ...prevNews, src: file }));
        setPreview((prevPreview) => ({ ...prevPreview, src: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", news);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl sm:text-3xl font-title font-bold text-primary-100 text-center mb-6 sm:mb-8">
        Crear Nueva Noticia
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
        <div>
          <label htmlFor="title" className="block text-base sm:text-lg font-medium text-gray-700">
            Título de la Noticia
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={news.title}
            onChange={handleInputChange}
            className="mt-1 sm:mt-2 block w-full rounded-md bg-gray-100 border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-base sm:text-lg font-medium text-gray-700">
            Descripción
          </label>
          <textarea
            id="description"
            name="description"
            value={news.description}
            onChange={handleInputChange}
            className="mt-1 sm:mt-2 block w-full rounded-md bg-gray-100 border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            rows="4"
            required
          />
        </div>

        <div>
          <FileUpload
            label="Imagen Principal"
            file={news.src}
            preview={preview.src}
            onFileChange={handleFileChange}
            fileInputRef={fileInputRef}
          />
        </div>

        {preview.src && (
          <PreviewSection preview={preview} />
        )}

        <div className="flex flex-col sm:flex-row justify-center items-center gap-0 sm:gap-2">
          <Button className="bg-primary-100 text-white">
            Crear Noticia
          </Button>
        </div>
      </form>
    </div>
  );
};

const FileUpload = ({ label, file, preview, onFileChange, fileInputRef }) => (
  <div className="w-full">
    <label className="block text-base sm:text-lg font-medium text-gray-700">{label}</label>
    <div
      onClick={() => fileInputRef.current.click()}
      className="mt-1 sm:mt-2 flex justify-center px-4 sm:px-8 pt-4 sm:pt-6 pb-4 sm:pb-8 border-2 border-gray-300 border-dashed rounded-md cursor-pointer"
    >
      <div className="space-y-2 text-center w-full h-24 sm:w-80 sm:h-36">
        {!file && (
          <svg
            className="mx-auto h-10 w-10 sm:h-14 sm:w-14 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
        <div className="flex text-base sm:text-lg text-gray-600">
          <label
            htmlFor="file-upload"
            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
          >
            {!file && <span>Subir un archivo</span>}
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              className="sr-only"
              ref={fileInputRef}
              onChange={onFileChange}
              accept="image/*"
            />
          </label>
          {!file && <p className="pl-1">o arrastra y suelta</p>}
        </div>
        {!file && <p className="text-sm text-gray-500">PNG, JPG, GIF hasta 10MB</p>}
        {file && (
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-sm text-green-500">Imagen cargada: {file.name}</p>
            <p>Click para cambiar la imagen</p>
          </div>
        )}
      </div>
    </div>
  </div>
);

const PreviewSection = ({ preview }) => (
  <div>
    <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-4">Vista Previa</h3>
    <div className="border rounded-lg p-4 sm:p-6 bg-gray-100">
      {preview.src && (
        <>
          <h4 className="text-base sm:text-lg font-medium mb-4">Imagen</h4>
          <img
            src={preview.src}
            alt="Preview"
            className="max-w-full h-auto rounded"
          />
        </>
      )}
    </div>
  </div>
);

export default NewsForm;
