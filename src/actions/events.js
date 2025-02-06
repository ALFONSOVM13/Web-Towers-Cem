'use server'
import { towerscemServerApi } from "@/apis/towerscemServerApi"
import { revalidatePath } from "next/cache"

export const getEvents = async({ page = 1, pageSize = 5 }) => {
    try {
        const data = await towerscemServerApi.get(`/events?page=${ page }&pageSize=${ pageSize }`, {
            headers: {
                'Cache-Control': 'no-store'
            }
        })
        return {
            error: null,
            data
        }
    } catch (error) {
        console.log(error.message)
        return {
          error: error.message,
          data: null
        }    
    }
}

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

export const updateEvent = async( formData ) => {

    const { id } = formData

    try {
        const data = await towerscemServerApi.patch(`/events/${ id }`, formData)
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

export const deleteEvent = async(id) => {
    try {
        const data = await towerscemServerApi.delete(`/events/${id}`)
        revalidatePath('/admin/events')
    
        return {
          error: null,
          data
        }

    } catch (error) {
        console.log(error.message)
        return {
          error: error.message,
          data: null
        }
    }
}