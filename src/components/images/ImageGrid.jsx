import { ImageGridItem } from "@/components/images/ImageGridItem"
import { includesImage } from "@/utils/image"


export const ImageGrid = ({ images, selectedImages, onChangeSelectedImages }) => {
    return (
        <div className="md:h-[28rem]">
            <div className="my-3 w-full grid grid-cols-[repeat(auto-fill,minmax(7rem,1fr))] gap-4 px-2">
                {
                    images.map(image => (
                        <ImageGridItem
                            key={image.id}
                            image={image}
                            isSelectedImage={includesImage( image, selectedImages )}
                            onChangeSelectedImages={onChangeSelectedImages}
                        />
                    ))
                }
            </div>
        </div>
    )
}
