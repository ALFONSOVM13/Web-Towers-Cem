export const includesImage = ( image , images ) => {
    return images.some( img => img.id === image.id )
}
