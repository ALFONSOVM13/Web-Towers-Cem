import { ModalHeader } from "@/components/ui/ModalHeader"
import { UploadMultipleImages } from "@/components/images/UploadMultipleImages"

export const ImagesModal = ({values, onChange, imageCategory, onClose }) => {


    const handleGetResults = (results) => {
        console.log(results)
    }

    return (
        <div className="w-[94vw] max-h-[97vh] px-4 py-5 sm:px-5 sm:p-5 sm:max-w-[40rem] overflow-y-auto">
            <ModalHeader 
                title="Imágenes" 
                onClose={onClose}
            />
            <div className="py-2 border-t border-b border-gray-200">
               <UploadMultipleImages
                    imageCategory={ imageCategory }
                    onGetResults={ handleGetResults }
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
