"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const EventForm = () => {
   const [formData, setFormData] = useState({
      title: '',
      date: '',
      description: '',
      image: ''
   })

   const router = useRouter()

   const handleChange = (e) => {
      const { name, value } = e.target
      setFormData(prevState => ({
         ...prevState,
         [name]: value
      }))
   }

   const handleSubmit = async (e) => {
      e.preventDefault()
      try {
         console.log('Evento creado:', formData)
         alert('Evento creado con éxito!')
         router.push('/admin/eventos')
      } catch (error) {
         console.error('Error al crear el evento:', error)
         alert('Hubo un error al crear el evento. Por favor, intenta de nuevo.')
      }
   }

   return (
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <h2 className="text-2xl font-title font-bold text-complementary-300 text-center">Crear Nuevo Evento</h2>
        </div>
        <form onSubmit={handleSubmit} className=" font-content p-6 space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Título del Evento
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E293B]"
              required
            />
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
              Fecha del Evento
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E293B]"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Descripción del Evento
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E293B]"
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
              Imagen
            </label>
            <input
              type="file"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E293B]"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-primary-100 text-complementary-200 font-bold py-2 px-4 rounded-md hover:bg-primary-200 focus:outline-none transition duration-300"
            >
              Crear Evento
            </button>
          </div>
        </form>
      </div>
   )
}

export default EventForm

