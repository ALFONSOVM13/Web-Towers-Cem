'use server'
import { towerscemServerApi } from "@/apis/towerscemServerApi"
import { revalidatePath } from "next/cache"



export const createEvent = async( formData ) => {
    try {
        const data = await towerscemServerApi.post('/events', formData)
        revalidatePath('/admin/events')
        return {
            error: null,
            data
        }
    } catch (error) {
        console.error(error)
        return {
            error: error.message,
            data: null
        }
    }
}