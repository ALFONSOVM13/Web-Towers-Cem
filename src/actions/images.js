'use server'

import { getToken } from '@/utils/getToken'

export const uploadImage = async (formData) => {

  try {
    const response = await fetch(`${process.env.API_URL}/api/images`, {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: `Bearer ${ getToken() }`,
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
