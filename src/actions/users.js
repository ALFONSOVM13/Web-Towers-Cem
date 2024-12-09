'use server'
import { revalidatePath } from "next/cache"
import { towerscemServerApi } from "@/apis/towerscemServerApi"
import { getToken } from "@/utils/getToken"

export const getUsers = async ({ page = 1, pageSize = 10 }) => {
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

export const getUserById = async (id) => {
  try {

    const data = await towerscemServerApi.get(`/users/${id}`, {
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


export const createUser = async (formData) => {
  try {

    const resp = await fetch(`${process.env.API_URL}/api/users`, {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: `Bearer ${ getToken() }`,
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

export const updateUser = async (formData) => {

  const userId = formData.get('id')

  try {

    const resp = await fetch(`${process.env.API_URL}/api/users/${userId}`, {
      method: 'PATCH',
      body: formData,
      headers: {
        Authorization: `Bearer ${ getToken() }`,
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

export const deleteUser = async (id) => {
  try {

    const data = await towerscemServerApi.delete(`/users/${id}`)

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