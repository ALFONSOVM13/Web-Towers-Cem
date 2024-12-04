'use client'
import Image from "next/image"
import { BiEditAlt, BiTrash } from "react-icons/bi"
import { Pagination } from "../ui/Pagination"
import { useRouter } from "next/navigation"

export const UsersList = ({ users }) => {
  
  const router = useRouter()
  const { data, currentPage, pageSize, currentPageSize, totalPages, totalUsers } = users
  

  const handlePageClick = ( pageSelected )=> {
    router.push(`?page=${ pageSelected }&pageSize=${ pageSize }`)
  }

  return (
    <div className="max-w-[75rem] mx-auto">
      <div className="my-4">
        Filters
      </div>
      <div className="overflow-x-auto">
        <div className="border rounded overflow-hidden">
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-4 pl-4 text-left bg-slate-100 max-w-16" scope="col">Foto</th>
                <th className="py-4 text-left bg-slate-100" scope="col">Nombre</th>
                <th className="py-4 text-left bg-slate-100" scope="col">Correo</th>
                <th className="py-4 text-left bg-slate-100" scope="col">Role</th>
                <th className="py-4 text-left bg-slate-100" scope="col">Estado</th>
                <th className="py-4 pr-3 text-left bg-slate-100 max-w-16" scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map(user => (
                  <tr
                    key={user.id}
                    className="border-b first-of-type:border-t"
                  >
                    <td className="py-3 pl-3 pr-2 max-w-16">
                      {
                        user.image
                          ? (
                            <figure className="relative overflow-hidden rounded-full w-12 h-12">
                              <Image
                                src={user.image.url}
                                alt={user.name}
                                width={132}
                                height={132}
                                className="bg-slate-100 object-cover object-center w-full h-full"
                              />
                            </figure>
                          ) : (
                            <div className=" bg-slate-100 w-12 h-12 rounded-full flex justify-center items-center font-semibold text-primary-200">
                              {user.name.slice(0, 1)}
                            </div>
                          )

                      }
                    </td>
                    <td className="max-w-48">{user.name} {user.lastName}</td>
                    <td>
                        <span className="text-gray-600">{user.email}</span>
                    </td>
                    <td>
                      <span className="px-2 py-1 rounded border text-sm">{user.role}</span>
                    </td>
                    <td>
                      {user.active
                        ? <span className="text-sm px-3 py-1 rounded-full text-green-600 bg-green-100 border border-green-500">Activo</span>
                        : <span className="text-sm px-3 py-1 rounded-full text-gray-500 bg-gray-100 border border-gray-400">Bloqueado</span>
                      }
                    </td>
                    <td className="pr-3 max-w-16">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={()=>{}}
                          className="items-center text-blue-600 hover:text-white bg-blue-100 hover:bg-blue-500 font-bold text-sm py-2 px-2 rounded-md transition"
                        >
                          <BiEditAlt />
                        </button>
                        <button
                          onClick={()=>{}}
                          className="items-center text-red-600 hover:text-white bg-red-100 hover:bg-red-500 font-bold text-sm py-2 px-2 rounded-md transition"
                        >
                          <BiTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          <div className="flex flex-col sm:flex-row justify-between px-4 py-5">
            <div className="text-sm text-gray-500 flex items-center gap-1">
              <span>{ pageSize * ( currentPage - 1 ) + 1 }</span> -
              <span>{ pageSize * ( currentPage - 1) + currentPageSize  }</span>
              de { totalUsers } registros
            </div>
            <div>
              <Pagination
                currentPage={ currentPage }
                onPageChange={ handlePageClick } 
                pageSize={ totalPages }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
