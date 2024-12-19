import { TOKEN_NAME_COOKIE } from "@/constants/auth";
import { cookies } from "next/headers";



export function getToken() {
    const token = cookies().get(TOKEN_NAME_COOKIE)?.value
    return token
}


export function setToken( token ) {
    cookies().set(TOKEN_NAME_COOKIE, token)
}

export function removeToken(){
    cookies().delete(TOKEN_NAME_COOKIE)
}