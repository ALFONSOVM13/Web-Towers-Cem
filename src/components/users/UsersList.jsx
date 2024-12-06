'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Pagination } from "../ui/Pagination"
import { UserListItem } from "./UserListItem"
import { ModalContainer } from "../ui/ModalContainer"
import { ModalDelete } from "../ui/ModalDelete"
import { toastError, toastSuccess } from "@/libs/toast"
import { deleteUser } from "@/actions/users"

export const UsersList = ({ users }) => {
  
  const { data, currentPage, pageSize, currentPageSize, totalPages, totalUsers } = users
  const [userToDelete, setUserToDelete] = useState(null)
  const [isDeleting, setIsDeleting] = useState(false)
  const router = useRouter()

  const handlePageClick = ( pageSelected )=> {
    router.push(`?page=${ pageSelected }&pageSize=${ pageSize }`)
  }

  const handleDeleteUser = async( confirm ) => {

    if(!confirm){
      return setUserToDelete(false)
    }

    setIsDeleting(true)
    try {

      const { error, data } = await deleteUser(userToDelete.id)

      if( error ){
        throw new Error( error )
      }

      setTimeout(() => {
        toastSuccess(data.msg)
        setUserToDelete(null)
      }, 100)

    } catch (error) {
      toastError(error.message || 'Hubo un error al eliminar el usuario')
    }finally {
      setIsDeleting(false)
    }
  }

  return (
    <>
      <div className="max-w-[75rem] mx-auto">
        <div className="my-4">
          Filters
        </div>
        <div className="overflow-x-auto">
          <div className="border rounded overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="py-4 pl-4 text-left max-w-16" scope="col">Foto</th>
                  <th className="py-4 text-left" scope="col">Nombre</th>
                  <th className="py-4 text-left" scope="col">Correo</th>
                  <th className="py-4 text-left" scope="col">Role</th>
                  <th className="py-4 text-left" scope="col">Estado</th>
                  <th className="py-4 pr-3 text-left max-w-16" scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map(user => (
                  <tr
                    key={user.id}
                    className="border-b first-of-type:border-t"
                  >
                    <UserListItem 
                      user={ user }
                      onDelete={ (value)=> setUserToDelete(value) }
                    />
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
      <ModalContainer
        show={ !!userToDelete }
        onClose={()=> setUserToDelete(null)}
      >
        <ModalDelete
          title={'Eliminar usuario'}
          subtitle={`¿Desea eliminar el usuario ${userToDelete?.name} ${userToDelete?.lastName}?`}
          onChange={handleDeleteUser}
          isDeleting={ isDeleting }
        />
      </ModalContainer>
    </>
  )
}
