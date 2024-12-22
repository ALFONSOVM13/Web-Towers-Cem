import { AddEventButtom } from '@/components/events/AddEventButtom'
import EventForm from '@/components/events/EventForm-old'

export default function EventosPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-title font-bold">Eventos</h1>
        <AddEventButtom />
      </div>
      <EventForm />
      <div>
        Events List
      </div>
    </>
  )
}

