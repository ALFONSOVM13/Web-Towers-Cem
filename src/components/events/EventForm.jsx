import React, { useRef, useState } from 'react'
import { MdClose } from 'react-icons/md'
import { Controller, useForm } from 'react-hook-form'
import { CKEditorClassic } from '@/components/ui/CKEditorClassic'
import { UploadImage } from '../ui/UploadImage'
import { isValidUrl } from '@/utils/validators'
import { Switch } from '../ui/Switch'

export const EventForm = ({ title, onClose }) => {

  const [loading, setLoading] = useState(false)
  const { register, control, handleSubmit, formState:{ errors }, getValues, setValue, watch } = useForm({
    defaultValues: {
      title: '',
      url: '',
      description: '',
      bannerDesktop: null,
      bannerDesktopFile: null,
      bannerMovil: null,
      bannerMovilFile: null,
      published: true
    }
  })

  const bannerDesktopRef = useRef({})
  bannerDesktopRef.current = watch('bannerDesktop', '')

  const handleRemoveBannerDesktop = () => {
    setValue('bannerDesktop', null, { shouldValidate: true })
  }

  const bannerMovilRef = useRef({})
  bannerMovilRef.current = watch('bannerMovil', '')

  const handleRemoveBannerMovil = () => {
    setValue('bannerMovil', null, { shouldValidate: true })
  }


  const handleEventSubmit = ( formData ) => {
    console.log(formData)
  }

  return (
    <div className="w-[94vw] max-h-[97vh] px-4 py-5 sm:px-5 sm:p-5 sm:max-w-[40rem] overflow-y-auto">
      <header className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <button
          onClick={onClose}
          className="p-1 border rounded hover:bg-gray-100 text-gray-500 hover:text-gray-800"
        >
          <MdClose />
        </button>
      </header>
      <form 
        onSubmit={handleSubmit( handleEventSubmit )}
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
            { ...register('title',{
              required: 'El título es requerido',
              validate: value => value.trim() === '' ? 'El título es requerido' : undefined
            })}
          />
          { errors.title && (
            <span className="text-sm text-red-600">{ errors.title.message }</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="url-event"
            className="block text-sm sm:text-base font-medium text-gray-600"
          >
            Url<span className="text-red-600 text-xs align-top">*</span>
          </label>
          <input
            type="text"
            id="url-event"
            placeholder="URL del evento"
            className="block w-full border p-2 rounded focus:outline-blue-800 hover:border-blue-800"
            { ...register('url', {
              required: 'La URL es requerida',
              validate: value => !isValidUrl(value) ? 'La URL del evento no es válida' : undefined
            })}
          />
          { errors.url && (
            <span className="text-sm text-red-600">{ errors.url.message }</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="event-description"
            className="block text-sm sm:text-base font-medium text-gray-600"
          >
            Descripción
          </label>
          <Controller
            control={control}
            name="description"
            render={({field}) => (
              <CKEditorClassic
                value={field.value}
                onChanche={(data) => field.onChange(data)}
                placeholder="Descripción del evento"
                id="event-description"
              />
            )}
          />
        </div>
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
                name="bannerDesktopFile"
                render={({field}) => (
                  <UploadImage
                    id='banner-desktop'
                    defaultImage={ getValues('bannerDesktop') }
                    onRemoveDefaultImage={handleRemoveBannerDesktop}
                    file={field.value}
                    onChange={field.onChange}
                    disabled={loading}
                    iconSize={10}
                    object="contain"
                  />
                )}
                rules={{
                  validate: value => (value === null && getValues('bannerDesktop') === null) ? 'Banner del evento para desktop requerido' : undefined
                }}
              />
              { errors.bannerDesktopFile && (
                <span className="text-sm text-red-600">{ errors.bannerDesktopFile.message }</span>
              )}
            </div>
          </div>
          <div className="sm:w-[10rem]">
            <label
              htmlFor="banner-movil"
              className="inline-block mb-1 text-sm sm:text-base font-medium text-gray-600"
            >
              Banner Móvil<span className="text-red-600 text-xs align-top">*</span>
            </label>
            <div className="h-36 sm:h-52">
              <Controller
                control={control}
                name="bannerMovilFile"
                render={({field}) => (
                  <UploadImage
                    id='banner-movil'
                    defaultImage={ getValues('bannerMovil') }
                    onRemoveDefaultImage={handleRemoveBannerMovil}
                    file={field.value}
                    onChange={field.onChange}
                    disabled={loading}
                    iconSize={10}
                    object="contain"
                  />
                )}
                rules={{
                  validate: value => (value === null && getValues('bannerMovil') === null) ? 'Banner del evento para móvil requerido' : undefined
                }}
              />
              { errors.bannerMovilFile && (
                <span className="text-sm text-red-600">{ errors.bannerMovilFile.message }</span>
              )}
            </div>
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
              name="published"
              control={control}
              render={({ field }) => (
                  <Switch
                    value={field.value}
                    onChange={field.onChange}
                    id="published-event"
                    disabled={loading}
                  />
              )}
            />
        </div>
        <div className="flex justify-end mt-2">
          <button className="bg-primary-200 hover:bg-primary-100 text-white px-4 py-2 rounded">
            { getValues('published') ? 'Publicar' : 'Guardar' }
          </button>
        </div>
      </form>
    </div>
  )
}
