'use client'
import { useRouter } from "next/navigation"
import { Table, TableContainer, TableFooter } from "../ui/Table"
import { EventListItem } from "./EventListItem"
import { useState } from "react"
import { ModalContainer } from "../ui/ModalContainer"
import { EventForm } from "./EventForm"

export const EventList = ({ events }) => {

    const { data, currentPage, pageSize, currentPageSize, totalPages, totalEvents } = events
    const [eventToEdit, setEventToEdit] = useState(null)
    const [eventToDelete, setEventToDelete] = useState(null)

    const router = useRouter()

    const handlePageClick = (pageSelected) => {
        router.push(`?page=${pageSelected}&pageSize=${pageSize}`)
    }




    const handleDeleteEvent = (confirm) => {
        if (confirm) {
            return console.log('Eliminación cancelada!');
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
                                message="No hay usuarios registrados"
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
        </>
    )
}
