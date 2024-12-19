'use client'
import { useEffect } from "react";
import { setCookie } from "cookies-next";
import { useDispatch } from "react-redux";
import { login } from "@/store/auth";
import { TOKEN_NAME_COOKIE } from "@/constants/auth";

export const InitializerSessionState = ({ session }) => {
    
    const dispatch = useDispatch();

    useEffect(()=>{
        if(session){
            setCookie(TOKEN_NAME_COOKIE, session.token)
            dispatch( login( session.user ) )
        }
    },[session])

    return null
}
