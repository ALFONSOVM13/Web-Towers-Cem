'use client'
import React, { useState } from 'react'
import { MdClose } from 'react-icons/md'
import { Controller, useForm } from 'react-hook-form'
import { CKEditorClassic } from '@/components/ui/CKEditorClassic'
import { Switch } from '@/components/ui/Switch'
import { LoadingCircle } from '@/components/ui/LoadingCircle'
import { ImageSelected } from '@/components/images/ImageSelected'
import { createEvent, updateEvent } from '@/actions/events'
import { isValidUrl } from '@/utils/validators'
import { toastError, toastSuccess } from '@/libs/toast'

export const EventForm = ({ title, onClose, eventEdit }) => {

  const [isLoading, setIsLoading] = useState(false)
  const { register, control, handleSubmit, formState: { errors }, getValues } = useForm({
    defaultValues: {
      title        : eventEdit?.title || '',
      url          : eventEdit?.url || '',
      bannerDesktop: eventEdit?.bannerDesktop || null,
      bannerMobile : eventEdit?.bannerMobile || null,
      isPublished  : eventEdit?.isPublished ?? true
    }
  })

  const handleEventSubmit = async (formData) => {

    const { title, url, bannerDesktop, bannerMobile, isPublished } = formData

    setIsLoading(true)
    try {

      if (eventEdit) {
        // Editar evento
        const { error } = await updateEvent({
          id: eventEdit.id,
          title,
          url,
          bannerDesktop: bannerDesktop.id,
          bannerMobile: bannerMobile.id,
          isPublished
        })

        if(error){
          throw new Error(error)
        }

        setTimeout(() => {
          toastSuccess('¡Evento actualizado correctamente!')
        }, 100);
        onClose()

      } else {
        // Crear evento
        const { error } = await createEvent({
          title,
          url,
          bannerDesktop: bannerDesktop.id,
          bannerMobile: bannerMobile.id,
          isPublished
        })

        if (error) {
          throw new Error(error)
        }

        setTimeout(() => {
          toastSuccess('¡Evento creado correctamente!')
        }, 100);
        onClose()
      }

    } catch (error) {
      toastError(error.message)
    } finally {
      setIsLoading(false)
    }
  }


  return (
    <div className="w-[94vw] max-h-[97vh] px-4 py-5 sm:px-5 sm:p-5 sm:max-w-[40rem] overflow-y-auto">
      <header className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <button
          onClick={onClose}
          disabled={isLoading}
          className="p-1 border rounded hover:bg-gray-100 text-gray-500 hover:text-gray-800"
        >
          <MdClose />
        </button>
      </header>
      <form
        onSubmit={handleSubmit(handleEventSubmit)}
        className="flex flex-col gap-3"
      >
        <div>
          <label
            htmlFor="title"
            className="block text-sm sm:text-base font-medium text-gray-600 mb-1"
          >
            Título<span className="text-red-600 text-xs align-top">*</span>
          </label>
          <input
            type="text"
            id="title"
            placeholder="Título del evento"
            className="block w-full border p-2 rounded focus:outline-blue-800 hover:border-blue-800"
            {...register('title', {
              required: 'El título es requerido',
              validate: value => value.trim() === '' ? 'El título es requerido' : undefined
            })}
          />
          {errors.title && (
            <span className="text-sm text-red-600">{errors.title.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="url-event"
            className="block text-sm sm:text-base font-medium text-gray-600"
          >
            Url
          </label>
          <input
            type="text"
            id="url-event"
            placeholder="URL del evento"
            className="block w-full border p-2 rounded focus:outline-blue-800 hover:border-blue-800"
            {...register('url', {
              validate: value => value && !isValidUrl(value) ? 'La URL del evento no es válida' : undefined
            })}
          />
          {errors.url && (
            <span className="text-sm text-red-600">{errors.url.message}</span>
          )}
        </div>
        {/* <div className="flex flex-col gap-1">
          <label
            htmlFor="event-description"
            className="block text-sm sm:text-base font-medium text-gray-600"
          >
            Descripción
          </label>
          <Controller
            control={control}
            name="description"
            render={({ field }) => (
              <CKEditorClassic
                value={field.value}
                onChanche={(data) => field.onChange(data)}
                placeholder="Descripción del evento"
                id="event-description"
              />
            )}
          />
        </div> */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
          <div className="sm:flex-1">
            <label
              htmlFor="banner-desktop"
              className="inline-block mb-1 text-sm sm:text-base font-medium text-gray-600"
            >
              Banner de Escritorio<span className="text-red-600 text-xs align-top">*</span>
            </label>
            <div className="h-36 sm:h-52">
              <Controller
                control={control}
                name="bannerDesktop"
                render={({ field }) => (
                  <ImageSelected
                    value={field.value}
                    onChange={field.onChange}
                    defaultImageCategory='2'
                    object='contain'
                  />
                )}
                rules={{
                  required: 'El Banner de escritorio es requerido'
                }}
              />
            </div>
            {errors.bannerDesktop && (
              <span className="text-sm text-red-600">{errors.bannerDesktop.message}</span>
            )}
          </div>
          <div className="sm:w-[13rem]">
            <label
              htmlFor="banner-movil"
              className="inline-block mb-1 text-sm sm:text-base font-medium text-gray-600"
            >
              Banner Móvil<span className="text-red-600 text-xs align-top">*</span>
            </label>
            <div className="h-36 sm:h-52">
              <Controller
                control={control}
                name="bannerMobile"
                render={({ field }) => (
                  <ImageSelected
                    value={field.value}
                    onChange={field.onChange}
                    defaultImageCategory='2'
                    object='contain'
                  />
                )}
                rules={{
                  required: 'El Banner Movíl es requerido'
                }}
              />
            </div>
            {errors.bannerMobile && (
              <span className="text-sm text-red-600">{errors.bannerMobile.message}</span>
            )}
          </div>
        </div>
        <div className="flex flex-col items-start gap-1 mt-2">
          <label
            htmlFor="published-event"
            className="block text-sm sm:text-base font-medium text-gray-600"
          >
            Publicar
          </label>
          <Controller
            name="isPublished"
            control={control}
            render={({ field }) => (
              <Switch
                value={field.value}
                onChange={field.onChange}
                id="published-event"
                disabled={isLoading}
              />
            )}
          />
        </div>

        <div className="flex flex-col-reverse md:flex-row md:justify-end gap-2 mt-2">
          <button
            type="button"
            onClick={onClose}
            disabled={isLoading}
            className="enabled:hover:bg-slate-100 font-semibold text-gray-500 enabled:hover:text-gray-700 text-sm py-2 px-2 rounded-md transition min-w-32"
          >
            Cancelar
          </button>
          <button
            type="submit"
            onClick={() => { }}
            disabled={isLoading}
            className="bg-primary-200 text-white enabled:hover:bg-primary-100 disabled:opacity-60 font-semibold text-sm px-4 py-2 rounded transition min-w-32"
          >
            {isLoading
              ? <LoadingCircle className="w-6 h-6" />
              : eventEdit ? 'Guardar' 
                : getValues('isPublished') ? 'Publicar' : 'Guardar'
            }
          </button>
        </div>
      </form>
    </div>
  )
}
