import { towerscemClientApi } from "@/apis/towerscemClientApi"
import { toastError } from "@/libs/toast"
import { setImageCategories } from "@/store/images/imagesSlice"


export const startLoadImageCategories = ()=> {
    return async( dispatch )=> {
        try {
            const data = await towerscemClientApi.get('/imageCategories')
            dispatch( setImageCategories(data) )
        } catch (error) {
            toastError('Hubo un error al cargar las categorías')
        }
    }
}