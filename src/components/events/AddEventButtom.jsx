'use client'
import { useState } from "react"
import { BiPlusCircle } from "react-icons/bi"
import { ModalContainer } from "@/components/ui/ModalContainer"
import { EventForm } from "@/components/events/EventForm"


export const AddEventButtom = () => {

    const [showEventForm, setShowEventForm] = useState(false)

    return (
        <>
            <button
                onClick={()=>setShowEventForm( true )} 
                className="flex items-center gap-1 px-3 py-2 font-semibold text-sm bg-primary-200 hover:bg-primary-100 rounded text-white transition"
            >
                <BiPlusCircle size={20} />
                Agregar Evento
            </button>
            <ModalContainer
                onClose={()=>setShowEventForm(false)}
                show={showEventForm}
            >
                <EventForm
                    title="Nuevo Evento"
                    onClose={ ()=>setShowEventForm(false) }
                />
            </ModalContainer>
        </>
    )
}
