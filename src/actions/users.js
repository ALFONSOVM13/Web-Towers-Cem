'use server'
import { towerscemServerApi } from "@/apis/towerscemServerApi"
import { revalidatePath } from "next/cache"

export const getUsers = async ({ page=1, pageSize=10 }) => {
  try {
    const data = await towerscemServerApi.get(`/users?page=${page}&pageSize=${pageSize}`, {
      headers: {
        'Cache-Control': 'no-store',
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


export const createUser = async(formUserData) => {

  try {
    const data = await towerscemServerApi.post(`/users`, formUserData)

    revalidatePath('/admin/usuarios')
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