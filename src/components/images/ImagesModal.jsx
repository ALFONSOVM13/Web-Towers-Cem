'use client'
import { ModalHeader } from "@/components/ui/ModalHeader"
import { UploadMultipleImages } from "@/components/images/UploadMultipleImages"
import { useEffect, useState } from "react"
import { ImageModalHeader } from "./ImageModalHeader"

export const ImagesModal = ({values, onChange, imageCategory, onClose }) => {

    const [images, setImages] = useState([])
    const [currentImageCategory, setCurrentImageCategory] = useState('2')



    useEffect(() => {
        // Hacer peticion de las imagenes
        console.log({currentImageCategory})        
    }, [currentImageCategory])
    
    const onChangeCurrentImageCategory = ( imageCategoryId ) => {
        setCurrentImageCategory(imageCategoryId)
    }

    const handleGetImagesResults = (results) => {
        console.log(results)
    }

    return (
        <div className="w-[94vw] max-h-[97vh] md:h-auto px-4 py-5 sm:px-5 sm:p-5 sm:max-w-[40rem] overflow-y-auto">
            <ImageModalHeader 
                title="Imágenes" 
                onClose={onClose}
                currentImageCategory={currentImageCategory}
                onChangeImageCategory={onChangeCurrentImageCategory}
            />
            <div className="py-2 border-t border-b border-gray-200">
               <UploadMultipleImages
                    imageCategory={ imageCategory }
                    onGetResults={ handleGetImagesResults }
               />
            </div>
            <div>
                ImagenList
            </div>
            <footer>
                Pagination
            </footer>
        </div>
    )
}
