'use client'
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BiX } from "react-icons/bi";
import { FiUploadCloud } from "react-icons/fi";
import { toastError } from "@/libs/toast";
import { ButtonSelectFiles } from "./ButtonSelectFiles";
import { arrayFilesToFileList } from "@/utils/form";
import { LoadingCircle } from "../ui/LoadingCircle";

export const TYPE_OF_ACCEPTED_IMAGES = /image\/(png|jpg|jpeg|gif|webp|avif)/i;

export const UploadMultipleImages = ({imageCategory, onGetResults}) => {

    const [files, setFiles] = useState(null)
    const [fileDataURLs, setFileDataURLs] = useState([])
    const [loading, setLoading] = useState(false)
    const fileInputRef = useRef(null)


    const handleFileChange = (e) => {

        if( !e.target.files || e.target.files.length === 0 ){
            setFileDataURLs([])
            return
        }
        
        const fileSelected = e.target.files

        for (let i = 0; i < fileSelected.length; i++) {
            const currentFile = fileSelected[i]
            if( !currentFile.type.match(TYPE_OF_ACCEPTED_IMAGES) ){
                return toastError('Formato no válido')
            }
        }

        setFiles(fileSelected)
    }

    useEffect(() => {
        const imageUrls = []

        if(files){
            for (let i = 0; i < files.length; i++) {
                const file = files[i]
                const reader = new FileReader()

                reader.onload = () => {
                  if (reader.result) {
                    imageUrls.push(reader.result)
                    if (imageUrls.length === files.length) {
                      setFileDataURLs(imageUrls)
                    }
                  }
                };
                reader.readAsDataURL(file)
            }
        }
    }, [files])


    const onRemoveFile = ( idx ) => {
        const updatedFileListArray = Array.from(files).filter((_, index) => index !== idx)
        const updatedFileList = arrayFilesToFileList(updatedFileListArray)
        if( updatedFileList.length === 0 ){
            return onClearImages()
        }
        setFileDataURLs( fileDataURLs.filter( (_, index) => index !== idx ) )
        setFiles( updatedFileList )
    }

    const onClearImages = async() => {
        setFiles(null)
        setFileDataURLs([])
        fileInputRef.current.value = ''
    }

    const uploadImages = async() => {
        
        if( !files ){
            return
        }

        const filesArr = Array.from(files)
        
        const filesFormData = filesArr.map( file => {
            const formData = new FormData()
            formData.append('image', file)
            formData.append('imageCategory', imageCategory)
            return formData
        })

        setLoading(true)
        // TODO: Subir imágenes
        // await Promise.all( filesFormData.map( 
        //     fileFormData => uploadImageMutation.mutateAsync({ formData: fileFormData }) ) 
        // )
        console.log(files)
        setLoading(false)

        // onClearImages()
    }





    return (
        <div className="py-1">
            <div className="flex flex-col md:flex-row justify-between gap-1 pb-3">
                <ButtonSelectFiles
                    onClick={()=> fileInputRef.current?.click()}
                    lengthFiles={files?.length ?? 0}
                    disabled={ loading }
                />
                <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/png, image/jpg, image/jpeg, image/gif, image/webp, image/avif"
                    multiple
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                />
                <button
                    type="button"
                    className="flex justify-center items-center gap-2 px-5 py-2 w-full max-w-[9.1rem] font-semibold text-sm bg-primary-200 enabled:hover:bg-primary-100 disabled:opacity-60 rounded text-white transition"
                    onClick={ uploadImages }
                    disabled={ !files || files.length === 0 || loading }
                >
                    {
                        loading
                            ? <>
                                <LoadingCircle className="w-5 h-5" />
                                <span>Subiendo...</span>
                            </>
                            : <>
                                <FiUploadCloud size={20} />
                                Subir
                            </>
                    }
                </button>
            </div>
            <div className="">
                {
                    fileDataURLs.length > 0 && (
                        <div className="flex items-center gap-2 flex-wrap">
                            {
                                fileDataURLs.map( (fileDataURL, idx) => (
                                    <div key={idx} className="relative w-16 h-16 bg-slate-100 rounded border">
                                        <Image 
                                            src={fileDataURL}
                                            alt="Imagen preview"
                                            width={135}
                                            height={135}
                                            className="object-contain w-full h-full"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => onRemoveFile(idx)}
                                            disabled={loading}
                                            className="absolute -top-2 -right-2 bg-white/50 enabled:hover:bg-slate-100 text-gray-500 enabled:hover:text-red-600 bg-opacity-50 rounded-full"
                                        >
                                            <BiX />
                                        </button>
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}
