import { UserForm } from "@/components/users/UserForm";
import Link from "next/link"
import { BiArrowBack } from "react-icons/bi"

export default function NewUserPage() {
    return (
        <div>
            <div className="flex items-center gap-2 mb-6">
                <Link
                    href={"/admin/usuarios"}
                    className="w-10 h-10 flex justify-center items-center rounded hover:bg-slate-100"
                >
                    <BiArrowBack size={26} />
                </Link>
                <h1 className="text-2xl md:text-3xl font-title font-bold">Agregar usuario</h1>
            </div>
            <div>
                <UserForm />
            </div>
        </div>
    );
}