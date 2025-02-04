import { notFound } from 'next/navigation'
import { AddEventButtom } from '@/components/events/AddEventButtom'
import { EventList } from '@/components/events/EventList'
import { getEvents } from '@/actions/events'

export default async function EventosPage({ searchParams }) {
  
  const { page, pageSize } = searchParams
  
  const { data, error } = await getEvents({ page, pageSize })

  if( error ){
    notFound()
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-title font-bold">Eventos</h1>
        <AddEventButtom />
      </div>
      <div>
        <EventList
          events={ data }
        />
      </div>
    </>
  )
}

