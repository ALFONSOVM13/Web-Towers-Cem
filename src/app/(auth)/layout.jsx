import { redirect } from "next/navigation"
import { verifySession } from "@/actions/auth"

export default async function AuthLayoutPage({ children }) {

    const session = await verifySession()

    if (session) {
        redirect('/admin')
    }

    return (
        <div>
            {children}
        </div>
    )
}