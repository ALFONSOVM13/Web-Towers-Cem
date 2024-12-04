'use client'
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { BiX } from "react-icons/bi";

/**
 * @param {string} defaultImage (opcional)
 *    Valor predeterminado de la imagen. Se espera una URL válida para mostrar 
 *    una imagen inicial.
 * 
 * @param {string} onRemoveDefaultImage
 *    Función que remueve la URL imagen actual.
 * 
 * @param {string} file (opcional)
 *    Archivo seleccionado. Se espera un archivo solo encaso de que ya se haya
 *    seleccionado uno
 * 
 * @param {function} onChange
 *    Función que se ejecuta cuando el usuario selecciona una imagen. Recibe 
 *    como argumento el archivo seleccionado (de tipo File).
 * 
 * @param {boolean} disabled (opcional)
 *    Deshabilita el componente, cuando está en `true`, no se puede seleccionar una imagen.
 */

const imageMimeType = /image\/(png|jpg|jpeg|gif|webp)/i;

export const UploadImage = ({ defaultImage, onRemoveDefaultImage, file, onChange, disabled }) => {

  const [fileDataURL, setFileDataURL] = useState(null)

  const fileInputRef = useRef(null)

  const handleFileChange = (ev) => {
    if (!ev.target.files || ev.target.files.length === 0) {
      return
    }

    const fileSelected = ev.target.files[0]

    if (!fileSelected.type.match(imageMimeType)) {
      return console.log('Formato no válido')
    }

    onChange(fileSelected)
  }


  useEffect(() => {
    let fileReader;
    let isCancel = false;

    if (file) {
      fileReader = new FileReader()
      fileReader.onload = (ev) => {
        const { result } = ev.target
        if (result && !isCancel) {
          setFileDataURL(result)
        }
      }
      fileReader.readAsDataURL(file)
    }else {
      setFileDataURL(null)
      onChange(null)
    }

    return () => {
      isCancel = true
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort()
      }
    }
  }, [file])

  const handleDeleteImage = async () => {
    setFileDataURL(null)
    onChange(null)
    onRemoveDefaultImage()
    fileInputRef.current.value = ''
  }

  return (
    <>
      {
        (fileDataURL || defaultImage)
          ? (
            <div className="relative w-full h-full">
              <figure
                className="relative w-full h-full cursor-pointer rounded"
                onClick={() => fileInputRef.current?.click()}
              >
                <Image
                  width={208}
                  height={208}
                  src={fileDataURL || defaultImage}
                  alt={'Imagen'}
                  className="w-full h-full object-cover object-center rounded"
                />
              </figure>
              <button
                type="button"
                onClick={ handleDeleteImage }
                className="absolute -top-3 -right-3 text-gray-500 hover:text-red-500"
              >
                <BiX className="text-[1.5rem]"/>
              </button>
            </div>
          ) : (
            <div
              onClick={() => fileInputRef.current?.click()}
              className={`group flex justify-center items-center border border-gray-400 border-dashed rounded w-full h-full text-2xl text-gray-400 p-5 ${ !disabled ? 'hover:border-primary-100 hover:text-primary-100 cursor-pointer' : undefined }`}
            >
              <svg
                className="mx-auto h-8 w-8"
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
            </div>
          )
      }
      <input
        type="file"
        style={{ display: 'none' }}
        disabled={disabled}
        ref={fileInputRef}
        accept="image/png, image/jpg, image/jpeg, image/gif, image/webp"
        onChange={handleFileChange}
      />
    </>
  )
}
