'use client'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { UploadMultipleImages } from "@/components/images/UploadMultipleImages"
import { ImageModalHeader } from "@/components/images/ImageModalHeader"
import { startLoadImages } from "@/store/images/imagesThunk"
import { ImageGrid } from "@/components/images/ImageGrid"
import { includesImage } from "@/utils/image"
import { Pagination } from "@/components/ui/Pagination"


export const ImagesModal = ({ values = [], onChange, onClose, imageCategory = '', multiple = false }) => {

    const [selectedImages, setSelectedImages] = useState(values)
    const [isLoadingImages, setIsLoadingImages] = useState(false)
    const [currentImageCategory, setCurrentImageCategory] = useState(imageCategory)
    const [page, setPage] = useState(1)

    const { images } = useSelector(state => state.images)
    const dispatch = useDispatch()

    const currentImages = images[`cat:${currentImageCategory}-page:${page}`]

    const loadImages = async () => {
        setIsLoadingImages(true)
        await dispatch(startLoadImages({
            page,
            imageCategory: currentImageCategory
        }))
        setIsLoadingImages(false)
    }

    useEffect(() => {
        if (!currentImages) {
            loadImages()
        }
    }, [page, currentImageCategory])

    const onChangeSelectedImages = (image) => {

        const imageIsSelected = includesImage(image, selectedImages)

        if (imageIsSelected) {
            const selectedImagesUpdated = selectedImages.filter(img => img.url !== image.url)
            return setSelectedImages(selectedImagesUpdated)
        }

        if (multiple) {
            setSelectedImages([...selectedImages, image])
        } else {
            setSelectedImages([image])
        }
    }

    const onChangeCurrentImageCategory = (imageCategoryId) => {
        setPage(1)
        setCurrentImageCategory(imageCategoryId)
    }

    const handleChangePage = (pageSelected) => {
        setPage(pageSelected)
    }

    const handleGetImagesResults = (imagesLoaded) => {
        console.log(imagesLoaded)
        // TODO: Hacer el dispatch de la nuevas imagenes subidas
    }

    const handleSelectImages = () => {
        onChange(selectedImages)
        onClose()
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
                    imageCategory={imageCategory}
                    onGetResults={handleGetImagesResults}
                />
            </div>
            <div>
                {
                    isLoadingImages && (<div>Cargando...</div>)
                }
                {
                    (currentImages?.data?.length > 0 && !isLoadingImages) && (
                        <>
                            <ImageGrid
                                images={currentImages.data}
                                selectedImages={selectedImages}
                                onChangeSelectedImages={onChangeSelectedImages}
                            />
                            <div className={`flex flex-row flex-wrap ${currentImages.totalPages > 1 ? 'justify-between':'justify-end'} py-2 border-t`}>
                                <Pagination
                                    currentPage={currentImages.currentPage}
                                    onPageChange={handleChangePage}
                                    totalPages={currentImages.totalPages}
                                />
                                <div className="flex flex-col-reverse md:flex-row md:justify-end gap-2">
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        disabled={isLoadingImages}
                                        className="enabled:hover:bg-slate-100 font-semibold text-gray-500 enabled:hover:text-gray-700 text-sm py-2 px-2 rounded-md transition min-w-32"
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleSelectImages}
                                        disabled={isLoadingImages}
                                        className="bg-primary-200 text-white enabled:hover:bg-primary-100 font-semibold text-sm px-4 py-2 rounded transition min-w-32"
                                    >
                                        Aceptar
                                    </button>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}
