import { towerscemServerApi } from "@/apis/towerscemServerApi"

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

