'use server'
import { towerscemServerApi } from "@/apis/towerscemServerApi"
import { getToken } from "@/utils/token"
import { revalidatePath } from "next/cache"

export const getAuthors = async ({ page = 1, pageSize = 5 }) => {
  try {
    const data = await towerscemServerApi.get(`/authors?page=${page}&pageSize=${pageSize}`, {
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



export const createAuthor = async (formData) => {
  try {

    const resp = await fetch(`${process.env.API_URL}/api/authors`, {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    })

    const data = await resp.json()

    if (!resp.ok) {
      throw new Error(data.msg)
    }

    revalidatePath('/admin/noticias/autores')

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

export const deleteAuthor = async(id) => {
  try {
    const data = await towerscemServerApi.delete(`/authors/${id}`)
    revalidatePath('/admin/noticias/autores')

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