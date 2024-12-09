'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import { UserListItem } from "./UserListItem"
import { ModalContainer } from "../ui/ModalContainer"
import { ModalDelete } from "../ui/ModalDelete"
import { toastError, toastSuccess } from "@/libs/toast"
import { deleteUser } from "@/actions/users"
import { Table, TableContainer, TableFooter } from "../ui/Table"
import { MessageWithoutResults } from "../ui/MessageWithoutResults"

export const UsersList = ({ users }) => {

  const { data, currentPage, pageSize, currentPageSize, totalPages, totalUsers } = users
  const [userToDelete, setUserToDelete] = useState(null)
  const [isDeleting, setIsDeleting] = useState(false)
  const router = useRouter()

  const handlePageClick = (pageSelected) => {
    router.push(`?page=${pageSelected}&pageSize=${pageSize}`)
  }

  const handleDeleteUser = async (confirm) => {

    if (!confirm) {
      return setUserToDelete(false)
    }

    setIsDeleting(true)
    try {

      const { error, data } = await deleteUser(userToDelete.id)

      if (error) {
        throw new Error(error)
      }

      setTimeout(() => {
        toastSuccess(data.msg)
        setUserToDelete(null)
      }, 100)

    } catch (error) {
      toastError(error.message || 'Hubo un error al eliminar el usuario')
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <>
      <div className="max-w-[75rem] mx-auto">
        <div className="my-4">
          Filters
        </div>
        {
          data.length === 0
            ? (
              <MessageWithoutResults
              message="No hay usuarios registrados"
              />
            ):(
              <TableContainer>
                <Table>
                  <Table.Thead>
                    <Table.THeadRow>
                      <Table.Th className="w-24 max-w-24">Foto</Table.Th>
                      <Table.Th className="min-w-[7rem]">Nombre</Table.Th>
                      <Table.Th>Correo</Table.Th>
                      <Table.Th>Role</Table.Th>
                      <Table.Th>Estado</Table.Th>
                      <Table.Th className="pr-3 w-28">Acciones</Table.Th>
                    </Table.THeadRow>
                  </Table.Thead>
                  <Table.TBody>
                    {
                      data.map((user, index) => (
                        <Table.TBodyRow
                          key={user.id}
                          index={ index }
                          pageSize={ pageSize }
                          currentPage={ currentPage }

                        >
                          <UserListItem
                            user={user}
                            onDelete={(value) => setUserToDelete(value)}
                          />
                        </Table.TBodyRow>
                      ))
                    }
                  </Table.TBody>
                </Table>
                <TableFooter
                  currentPage={currentPage}
                  currentPageSize={currentPageSize}
                  pageSize={pageSize}
                  totalPages={totalPages}
                  totalRegisters={totalUsers}
                  handleChangePage={handlePageClick}
                />
              </TableContainer>
            )
        }
      </div>
      <ModalContainer
        show={!!userToDelete}
        onClose={() => setUserToDelete(null)}
      >
        <ModalDelete
          title={'Eliminar usuario'}
          subtitle={`¿Desea eliminar el usuario ${userToDelete?.name} ${userToDelete?.lastName}?`}
          onChange={handleDeleteUser}
          isDeleting={isDeleting}
        />
      </ModalContainer>
    </>
  )
}
