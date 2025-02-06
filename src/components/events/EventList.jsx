'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import { ModalContainer } from "@/components/ui/ModalContainer"
import { ModalDelete } from "@/components/ui/ModalDelete"
import { EventListItem } from "@/components/events/EventListItem"
import { EventForm } from "@/components/events/EventForm"
import { Table, TableContainer, TableFooter } from "@/components/ui/Table"
import { deleteEvent } from "@/actions/events"
import { MessageWithoutResults } from "../ui/MessageWithoutResults"
import { toastError, toastSuccess } from "@/libs/toast"

export const EventList = ({ events }) => {

    const { data, currentPage, pageSize, currentPageSize, totalPages, totalEvents } = events
    const [eventToEdit, setEventToEdit] = useState(null)
    const [eventToDelete, setEventToDelete] = useState(null)
    const [isDeleting, setIsDeleting] = useState(false)

    const router = useRouter()

    const handlePageClick = (pageSelected) => {
        router.push(`?page=${pageSelected}&pageSize=${pageSize}`)
    }

    const handleDeleteEvent = async(confirm) => {

        if (!confirm) {
            return setEventToDelete(null)
        }

        setIsDeleting(true)
        try {
            
            const { error, data } = await deleteEvent(eventToDelete.id)

            if (error) {
              throw new Error(error)
            }

            setTimeout(() => {
              toastSuccess(data.msg)
              setEventToDelete(null)
            }, 100)
        } catch (error) {
            console.log(error)
            toastError(error.message || 'Hubo un error al eliminar el evento')
        } finally {
            setIsDeleting(false)
        }
    }

    return (
        <>
            <div className="max-w-[75rem] mx-auto">
                <div className="my-4">Event Filter</div>
                {
                    data.length === 0
                        ? (
                            <MessageWithoutResults
                                message="No hay eventos publicados"
                            />
                        ) : (
                            <TableContainer className="bg-white">
                                <Table>
                                    <Table.Thead>
                                        <Table.THeadRow>
                                            <Table.Th className="max-w-20">Banner Escritorio</Table.Th>
                                            <Table.Th className="max-w-16">Banner Móvil</Table.Th>
                                            <Table.Th>Título</Table.Th>
                                            <Table.Th>Estado</Table.Th>
                                            <Table.Th>Acciones</Table.Th>
                                        </Table.THeadRow>
                                    </Table.Thead>
                                    <Table.TBody>
                                        {
                                            data.map((event, index) => (
                                                <Table.TBodyRow
                                                    key={event.id}
                                                    index={index}
                                                    pageSize={pageSize}
                                                    currentPage={currentPage}
                                                >
                                                    <EventListItem
                                                        key={event.id}
                                                        event={event}
                                                        onSetEventToEdit={ event => setEventToEdit(event) }
                                                        onSetEventToDelete={ event => setEventToDelete(event) }
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
                                    totalRegisters={totalEvents}
                                    handleChangePage={handlePageClick}
                                    label={'eventos'}
                                />
                            </TableContainer>
                        )
                }
            </div>
            <ModalContainer
                show={ !!eventToEdit }
                onClose={()=>setEventToEdit(null)}
            >
                <EventForm
                    title={'Editar evento'}
                    onClose={()=>setEventToEdit(null)}
                    eventEdit={ eventToEdit }

                />
            </ModalContainer>
            <ModalContainer
                show={!!eventToDelete}
                onClose={() => setEventToDelete(null)}
            >
                <ModalDelete
                    title={'Eliminar evento'}
                    subtitle={`¿Desea eliminar el evento ${eventToDelete?.title}?`}
                    onChange={handleDeleteEvent}
                    isDeleting={isDeleting}
                />
            </ModalContainer>
        </>
    )
}
