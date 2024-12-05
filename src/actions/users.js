'use server'
import { towerscemServerApi } from "@/apis/towerscemServerApi"
import { revalidatePath } from "next/cache"
import { cookies } from 'next/headers'

const cookieStore = cookies()
const token = cookieStore.get('session_token')


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


export const createUser = async(formData) => {

  try {
  
    const resp = await fetch(`${process.env.API_URL}/api/users`, {
      method: 'POST',
      body: formData,
      credentials: 'include',
      headers: {
          Cookie: `session_token=${token?.value}`,
      },
    })

    const data = await resp.json()

    if (!resp.ok) {
      console.log(data)
      throw new Error(data.msg)
    }

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