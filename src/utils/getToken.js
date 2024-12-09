import { cookies } from "next/headers";

export function getToken() {
    const token = cookies().get('session_token')?.value
    return token
}