import { deleteCookie } from "cookies-next"
import { logout } from "./authSlice"
import { TOKEN_NAME_COOKIE } from "@/constants/auth"

export const startLogout = () => {
    return ( dispatch )=> {
        deleteCookie(TOKEN_NAME_COOKIE)
        dispatch( logout() )
    }
}