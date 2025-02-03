export const arrayFilesToFileList = (array) => {
    const dataTransfer = new DataTransfer()
    array.forEach(file => {
        dataTransfer.items.add(file)
    })
    return dataTransfer.files
}
