'use client'
import { useEffect, useState } from "react"
import { MdClose } from "react-icons/md"
import { towerscemClientApi } from "@/apis/towerscemClientApi"
import { toastError } from "@/libs/toast"

export const ImageModalHeader = ({ title, onClose, onChangeImageCategory, currentImageCategory='' }) => {

    const [imageCategories, setImageCategories] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        towerscemClientApi.get('/imageCategories')
            .then(data => setImageCategories(data) )
            .catch(()=> toastError('Hubo un error al cargar las categorías') )
            .finally(()=> setIsLoading(false) )
    }, [])


    return (
        <header className="flex items-center justify-between w-full mb-2">
            <div className="flex items-center gap-2 sm:gap-4">
                <h3 className="text-xl font-bold">{title}</h3>
                {
                    imageCategories?.data?.length > 0 && (
                        <select
                            disabled={ isLoading }
                            value={ currentImageCategory }
                            onChange={({ target })=>onChangeImageCategory( target.value )}
                            className="px-1 py-1 block w-full rounded border text-sm focus:outline-blue-800 hover:border-blue-800"
                        >
                            <option value="">Todas</option>
                            {
                                imageCategories.data.map( imageCategoryItem => (
                                    <option 
                                        key={imageCategoryItem.id} 
                                        value={ String(imageCategoryItem.id) }
                                    >
                                        { imageCategoryItem.name }
                                    </option>
                                ))
                            }
                        </select>
                    )
                }
            </div>
            <button
                onClick={onClose}
                className="p-1 border rounded hover:bg-gray-100 text-gray-500 hover:text-gray-800"
            >
                <MdClose />
            </button>
        </header>
    )
}
