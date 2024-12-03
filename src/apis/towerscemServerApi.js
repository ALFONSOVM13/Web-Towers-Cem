// Se ejecuta del lado del servidor
import { cookies } from 'next/headers'

const cookieStore = cookies()
const token = cookieStore.get('session_token')
const API_URL = process.env.API_URL

const towerscemServerApi = {
    fetch: async (endpoint, options = {}) => {
        const url = `${API_URL}/api${endpoint}`
        const defaultOptions = {
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                Cookie: `session_token=${token?.value}`,
            },
        }

        const mergedOptions = {
            ...defaultOptions,
            ...options,
            headers: {
                ...defaultOptions.headers,
                ...options.headers,
            },
        }

        const response = await fetch(url, mergedOptions)

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        return response.json()
    },

    get: (endpoint, options = {}) => {
        return towerscemServerApi.fetch(endpoint, { ...options, method: 'GET' })
    },

    post: (endpoint, body, options = {}) => {
        return towerscemServerApi.fetch(endpoint, {
            ...options,
            method: 'POST',
            body: JSON.stringify(body),
        })
    },

    put: (endpoint, body, options = {}) => {
        return towerscemServerApi.fetch(endpoint, {
            ...options,
            method: 'PUT',
            body: JSON.stringify(body),
        })
    },

    delete: (endpoint, options = {}) => {
        return towerscemServerApi.fetch(endpoint, { ...options, method: 'DELETE' })
    },
}

export { towerscemServerApi }