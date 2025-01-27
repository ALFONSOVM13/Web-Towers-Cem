import Image from "next/image"
import { IoMdCheckmark } from "react-icons/io";

export const ImageGridItem = ({ image, isSelectedImage, onChangeSelectedImages  }) => {
    return (
        <div
            onClick={() => onChangeSelectedImages(image)}
            className={`relative flex flex-col rounded border transition cursor-pointer`}
        >
            <div className={`relative h-24 aspect-square ${isSelectedImage ? 'opacity-90 scale-90 bg-primary-300' : 'bg-slate-100'}`}>
                <Image
                    src={image.url}
                    alt={image.originalName}
                    title={image.originalName}
                    width={300}
                    height={100}
                    className="w-full h-full object-contain"
                />
            </div>
            <p className="text-xs whitespace-nowrap overflow-hidden text-ellipsis py-1">{image.originalName}</p>
            <div className="absolute -top-1 -left-1">
                <div className={`w-4 h-4 rounded-md shadow flex justify-center items-center ${ isSelectedImage ? 'bg-primary-200' : 'bg-complementary-200 border' }`}>
                    { isSelectedImage && <IoMdCheckmark className="w-3 h-3 text-white" /> }
                </div>
            </div>
        </div>
    )
}
