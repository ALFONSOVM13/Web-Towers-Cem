'use server'

import { USER_ROLES_ACCESS_DASHBOARD } from "@/constants/users"
import { setToken } from "@/utils/token"
import { revalidatePath } from "next/cache"

const { towerscemServerApi } = require("@/apis/towerscemServerApi")

export const authenticate = async(formData) => {
    try {

        const data = await towerscemServerApi.post('/auth/login', formData)
        const { user, token } = data

        if( !USER_ROLES_ACCESS_DASHBOARD.includes(user.role) ){
            throw new Error('Credenciales invalidas')
        }

        setToken(token)

        revalidatePath('/iniciar-sesion')

        
    } catch (error) {
        console.log(error.message)
        return {
            error: error.message
        }
    }
}


export const verifySession = async() => {

    try {
     
        const data = await towerscemServerApi.get('/auth/verify-session')

        const { user } = data
        
        if( !USER_ROLES_ACCESS_DASHBOARD.includes(user.role) ){
            throw new Error('Credenciales invalidas')
        }

        return data

    } catch (error) {
        console.log(error.message)
        return null
    }
}