'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Table, TableContainer, TableFooter } from "@/components/ui/Table"
import { AuthorListItem } from "@/components/authors/AuthorListItem"
import { ModalContainer } from "@/components/ui/ModalContainer"
import { ModalDelete } from "@/components/ui/ModalDelete"
import { toastError, toastSuccess } from "@/libs/toast"
import { deleteAuthor } from "@/actions/authors"
import { AuthorForm } from "./AuthorForm"
import { MessageWithoutResults } from "../ui/MessageWithoutResults"


export const AuthorsList = ({ authors }) => {

  const { data, currentPage, pageSize, currentPageSize, totalPages, totalAuthors } = authors
  const [authorToEdit, setAuthorToEdit] = useState(null)
  const [authorToDelete, setAuthorToDelete] = useState(null)
  const [isDeleting, setIsDeleting] = useState(false)
  const router = useRouter()

  const handlePageClick = (pageSelected) => {
    router.push(`?page=${pageSelected}&pageSize=${pageSize}`)
  }

  const handleDeleteAuthor = async (confirm) => {

    if (!confirm) {
      return setAuthorToDelete(null)
    }

    setIsDeleting(true)
    try {

      const { error, data } = await deleteAuthor(userToDelete.id)

      if (error) {
        throw new Error(error)
      }

      setTimeout(() => {
        toastSuccess(data.msg)
        setAuthorToDelete(null)
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
        <div className="my-4">Author Filters</div>
        {
          data.length === 0
            ? (
              <MessageWithoutResults
                message="No hay autores agregados"
              />
            ) : (
              <TableContainer className="bg-white">
                <Table>
                  <Table.Thead>
                    <Table.THeadRow>
                      <Table.Th>Foto</Table.Th>
                      <Table.Th>Nombre</Table.Th>
                      <Table.Th>Acciones</Table.Th>
                    </Table.THeadRow>
                  </Table.Thead>
                  <Table.TBody>
                    {
                      data.map((author, index) => (
                        <Table.TBodyRow
                          key={author.id}
                          index={index}
                          pageSize={pageSize}
                          currentPage={currentPage}
                        >
                          <AuthorListItem
                            author={author}
                            onSetAuthorToEdit={(value) => setAuthorToEdit(value)}
                            onSetAuthorToDelete={(value) => setAuthorToDelete(value)}
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
                  totalRegisters={totalAuthors}
                  handleChangePage={handlePageClick}
                  label={'autores'}
                />
              </TableContainer>
            )
        }
      </div>
      <ModalContainer
        show={!!authorToEdit}
        onClose={() => setAuthorToEdit(null)}
      >
        <AuthorForm
          title={'Editar Autor'}
          onClose={() => setAuthorToEdit(null)}
          authorEdit={authorToEdit}

        />
      </ModalContainer>
      <ModalContainer
        show={!!authorToDelete}
        onClose={() => setAuthorToDelete(null)}
      >
        <ModalDelete
          title={'Eliminar autor'}
          subtitle={`¿Desea eliminar el autor ${authorToDelete?.name} ${authorToDelete?.lastName ?? ''}?`}
          onChange={handleDeleteAuthor}
          isDeleting={isDeleting}
        />
      </ModalContainer>
    </>
  )
}
