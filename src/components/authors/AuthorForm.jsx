'use client'

import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { MdClose } from "react-icons/md"
import { LoadingCircle } from "../ui/LoadingCircle"
import { UploadImage } from "../ui/UploadImage"
import { toastError, toastSuccess } from "@/libs/toast"
import { createAuthor } from "@/actions/authors"

export const AuthorForm = ({ title, onClose, authorEdit }) => {
  console.log(authorEdit)
  const [isLoading, setIsLoading] = useState(false)
  const { register, control, handleSubmit, formState: { errors }, getValues, setValue } = useForm({
    defaultValues: {
      name: authorEdit?.name || '',
      lastName: authorEdit?.lastName || null,
      photo: authorEdit?.photo?.url ?? null,
      photoFile: null
    }
  })


  const handleRemoveCurrentPhoto = () => {
    setValue('photo', null, { shouldValidate: true })
  }

  const handleAuthorSubmit = async (formAuthorData) => {
    setIsLoading(true)
    const { photoFile, photo, ...authorData } = formAuthorData

    const formData = new FormData()

    Object.keys(authorData).forEach(key => {
      formData.append(key, authorData[key])
    })

    if (photo === null) {
      formData.append('image', '')
    }

    if (photoFile) {
      formData.append('image', photoFile)
    }

    try {

      if (authorEdit) {
        // Editar author

      } else {
        // Crear nuevo author
        const { error } = await createAuthor(formData)

        if (error) {
          throw new Error(error)
        }

        setTimeout(() => {
          toastSuccess('¡Autor agregado correctamente!')
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
    <div className="w-[94vw] max-h-[97vh] px-4 py-5 sm:px-5 sm:p-5 sm:max-w-[24rem] overflow-y-auto">
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
        onSubmit={handleSubmit(handleAuthorSubmit)}
        className="space-y-4 sm:space-y-6"
      >
        <Controller
          control={control}
          name="photoFile"
          render={({ field }) => (
            <div className="w-28 h-28 mx-auto">
              <UploadImage
                defaultImage={getValues('photo')}
                onRemoveDefaultImage={handleRemoveCurrentPhoto}
                file={field.value}
                onChange={field.onChange}
                disabled={isLoading}
              />
            </div>
          )}
        />
        <div className="flex-1">
          <label htmlFor="name" className="block text-sm sm:text-base font-medium text-gray-600 mb-1">
            Nombres
          </label>
          <input
            type="text"
            id="name"
            placeholder="Ingrese los nombres"
            disabled={isLoading}
            {...register('name', {
              required: 'Los nombres son requeridos',
              validate: (value) => value.trim() === '' ? 'Los nombres son requeridos' : undefined
            })}
            className="px-2 py-2 block w-full rounded border focus:outline-blue-800 hover:border-blue-800"
          />
          {errors.name && (
            <span className="text-sm text-red-600">{errors.name.message}</span>
          )}
        </div>
        <div className="flex-1">
          <label htmlFor="lastName" className="block text-sm sm:text-base font-medium text-gray-600 mb-1">
            Apellidos
          </label>
          <input
            type="text"
            id="lastName"
            disabled={isLoading}
            placeholder="Ingrese los apellidos"
            {...register('lastName', {
              validate: (value) => value && value.trim() === '' ? 'Apellidos no válidos' : undefined
            })}
            className="px-2 py-2 block w-full rounded border focus:outline-blue-800 hover:border-blue-800"
          />
          {errors.lastName && (
            <span className="text-sm text-red-600">{errors.lastName.message}</span>
          )}
        </div>
        <div className="flex justify-center gap-4">
          <button
            type="submit"
            disabled={isLoading}
            className="flex items-center justify-center font-semibold text-sm gap-1 px-3 min-w-[12rem] w-full sm:w-auto py-2 bg-primary-200 enabled:hover:bg-primary-100 disabled:opacity-80 rounded text-white transition"
          >
            {isLoading ? <LoadingCircle className="w-6 h-6" /> : authorEdit ? 'Guardar' : 'Crear Usuario'}
          </button>
        </div>
      </form>
    </div>
  )
}
