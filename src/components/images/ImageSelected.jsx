'use client'
import { useState } from "react"
import Image from "next/image"
import { BiX } from "react-icons/bi"
import { ModalContainer } from "@/components/ui/ModalContainer"
import { ImagesModal } from "@/components/images/ImagesModal"

export const ImageSelected = ({ value, onChange, iconSize=8, object='cover', defaultImageCategory='' }) => {

    const [showImagesModal, setShowImagesModal] = useState(false)

    const handleChangeImage = (images=[]) => {
        if(images.length >= 1){
            onChange(images[0])
        }else {
            onChange(null)
        }
    }

    const handleDeleteImage = () => {
        onChange(null)
    }

    return (
        <>
            {
                value ? (
                    <div className="relative w-full h-full">
                        <figure
                            className={`relative w-full h-full cursor-pointer rounded ${object === 'contain' ? 'border border-gray-400 border-dashed' : undefined}`}
                            onClick={() => setShowImagesModal(true)}
                        >
                            <Image
                                width={400}
                                height={200}
                                src={value.url}
                                alt={'Imagen'}
                                className={`w-full h-full object-${object} object-center rounded`}
                            />
                        </figure>
                        <button
                            type="button"
                            onClick={handleDeleteImage}
                            className="absolute -top-3 -right-3 text-gray-500 hover:text-red-500"
                        >
                            <BiX className="text-[1.5rem]" />
                        </button>
                    </div>
                ) : (
                    <div
                        onClick={() => setShowImagesModal(true)}
                        className={`group flex justify-center items-center border border-gray-400 border-dashed rounded w-full h-full text-2xl text-gray-400 p-5 hover:border-blue-800 hover:text-blue-800 cursor-pointer`}
                    >
                        <svg
                            className={`mx-auto h-${iconSize} w-${iconSize}`}
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
            <ModalContainer
                show={showImagesModal}
                onClose={() => setShowImagesModal(false)}
            >
                <ImagesModal
                    values={ value ? [ value ] : []}
                    onChange={handleChangeImage}
                    imageCategory={defaultImageCategory}
                    onClose={ () => setShowImagesModal(false) }
                />
            </ModalContainer>
        </>
    )
}
