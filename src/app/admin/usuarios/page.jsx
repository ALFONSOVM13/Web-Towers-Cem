import { notFound } from 'next/navigation'
import { UsersList } from '@/components/users/UsersList'
import { getUsers } from '@/actions/users'
import { BiPlusCircle } from "react-icons/bi";
import Link from 'next/link'


export default async function UsersPage({ searchParams }) {

  const { page, pageSize } = searchParams

  const { data, error } = await getUsers({ page, pageSize })

  if (error) {
    notFound()
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-title font-bold">Usuarios</h1>
        <Link
          href="/admin/usuarios/nuevo"
          className="flex items-center gap-1 px-3 py-2 bg-primary-200 hover:bg-primary-100 rounded text-white transition"
        >
           <BiPlusCircle size={20} />
           Nuevo usuario
        </Link>
      </div>
      <div>
        <UsersList users={ data } />
      </div>
    </>
  )
}
