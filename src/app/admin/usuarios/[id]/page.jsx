import Link from "next/link"
import { notFound } from "next/navigation"
import { getUserById } from "@/actions/users"
import { UserForm } from "@/components/users/UserForm"
import { BiArrowBack } from "react-icons/bi"



export default async function UpdateUserPage({ params }) {

  const { id } = params
  const { data, error } = await getUserById(id)

  if (error) {
    notFound()
  }
  

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Link
          href={"/admin/usuarios"}
          className="w-10 h-10 flex justify-center items-center rounded hover:bg-slate-100"
        >
          <BiArrowBack size={26} />
        </Link>
        <h1 className="text-2xl md:text-3xl font-title font-bold">Editar usuario</h1>
      </div>
      <div>
        <UserForm user={ data } />
      </div>
    </div>
  );
}