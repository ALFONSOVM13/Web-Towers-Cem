'use server'
import { cookies } from 'next/headers'

const cookieStore = cookies()
const token = cookieStore.get('session_token')

export const uploadImage = async (formData) => {

  try {
    const response = await fetch(`${process.env.API_URL}/api/images`, {
      method: 'POST',
      body: formData,
      credentials: 'include',
      headers: {
          Cookie: `session_token=${token?.value}`,
      },
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.msg)
    }

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
