'use client'
import { useEffect, useState } from "react"
import Link from "next/link"
import { Controller, useForm } from "react-hook-form"
import { IoReloadOutline } from "react-icons/io5";
import { CKEditorClassic } from "@/components/ui/CKEditorClassic"
import { ImageSelected } from "@/components/images/ImageSelected"
import { Switch } from "@/components/ui/Switch"
import { LoadingCircle } from "@/components/ui/LoadingCircle"
import { InputTags } from "@/components/ui/InputTags"
import { CKEditorAdvanced } from "@/components/ui/CKEditorAdvanced";
import { getSlug, isValidSlug } from "@/utils/getSlug"


const DEFAULT_IMAGE_CATEGORY=3
export const NewsForm = ({ articleEdit }) => {

  const [isLoading, setIsLoading] = useState(false)
  const { register, control, handleSubmit, formState: { errors }, getValues, setValue, watch } = useForm({
    defaultValues: {
      title: '',
      content: '',
      summary: '',
      coverImage: '',
      socialImage: '',
      slug: '',
      author: '',
      readTime: 5,
      publishedAt: '',
      tags: [],
      isPublished: true,
    }
  })

  useEffect(() => {
    const { unsubscribe } = watch((value, { name }) => {

      if (name === 'title' && value.title) {
        if (articleEdit) { return }
        handleChangeSlug()
      }
    })
    return () => unsubscribe()
  }, [watch])

  const handleChangeSlug = () => {
    const slug = getSlug(getValues('title'))
    setValue('slug', slug, { shouldValidate: true })
  }

  const handleNewsSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <div className="max-w-[80rem] mx-auto">
      <form
        onSubmit={handleSubmit(handleNewsSubmit)}
        className="space-y-4 lg:space-y-0 lg:space-x-6 flex items-start flex-wrap"
      >
        <div className="flex-1 flex flex-col gap-3 py-6 px-4 sm:px-8 sm:pb-8 sm:pt-6 bg-white rounded-md shadow">
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
              placeholder="Título de la noticia"
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
              htmlFor="news-content"
              className="block text-sm sm:text-base font-medium text-gray-600"
            >
              Contenido<span className="text-red-600 text-xs align-top">*</span>
            </label>
            <Controller
              control={control}
              name="content"
              render={({ field }) => (
                <CKEditorAdvanced
                  value={'Hola mundo'}
                  onChange={(data) => field.onChange(data)}
                  placeholder="Contenido de la noticia"
                  id="news-content"
                  defaultImageCategory={ DEFAULT_IMAGE_CATEGORY }
                />
              )}
              rules={{
                required: 'El contenido de la noticia es requerido',
              }}
            />
            {errors.content && (
              <span className="text-sm text-red-600">{errors.content.message}</span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="news-summary"
              className="block text-sm sm:text-base font-medium text-gray-600"
            >
              Resumen<span className="text-red-600 text-xs align-top">*</span>
            </label>
            <Controller
              control={control}
              name="summary"
              render={({ field }) => (
                <CKEditorClassic
                  value={field.value}
                  onChanche={(data) => field.onChange(data)}
                  placeholder="Resumen de la noticia"
                  id="news-summary"
                />
              )}
              rules={{
                required: 'El resumen de la noticia es requerido',
              }}
            />
            {errors.summary && (
              <span className="text-sm text-red-600">{errors.summary.message}</span>
            )}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-5">
            <div className="sm:flex-1">
              <label
                htmlFor="banner-desktop"
                className="inline-block mb-1 text-sm sm:text-base font-medium text-gray-600"
              >
                Imagen de portada<span className="text-red-600 text-xs align-top">*</span>
              </label>
              <div className="h-36 sm:h-52">
                <Controller
                  control={control}
                  name="coverImage"
                  render={({ field }) => (
                    <ImageSelected
                      value={field.value}
                      onChange={field.onChange}
                      defaultImageCategory='3'
                      object='contain'
                    />
                  )}
                  rules={{
                    required: 'La imagen de portada es requerida'
                  }}
                />
              </div>
              {errors.coverImage && (
                <span className="text-sm text-red-600">{errors.coverImage.message}</span>
              )}
            </div>
            <div className="sm:w-[18rem]">
              <label
                htmlFor="banner-movil"
                className="inline-block mb-1 text-sm sm:text-base font-medium text-gray-600"
              >
                Imagen redes sociales
              </label>
              <div className="h-36 sm:h-52">
                <Controller
                  control={control}
                  name="socialImage"
                  render={({ field }) => (
                    <ImageSelected
                      value={field.value}
                      onChange={field.onChange}
                      defaultImageCategory='3'
                      object='contain'
                    />
                  )}
                />
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="slug"
              className="flex items-center w-auto text-sm sm:text-base font-medium text-gray-600 mb-1"
            >
              Slug<span className="text-red-600 text-xs align-top">*</span>
              <button 
                type="button"
                onClick={handleChangeSlug}
                className="ml-1 rounded-full flex justify-center items-center w-4 h-4 bg-slate-100 hover:bg-slate-300 active:scale-90"
              >
                <IoReloadOutline size={12} />
              </button>
            </label>
            <input
              type="text"
              id="slug"
              placeholder="slug-de-la-noticia"
              className="block w-full border p-2 rounded focus:outline-blue-800 hover:border-blue-800 text-gray-400 focus:text-black"
              {...register('slug', {
                required: 'El slug es requerido',
                validate: ( value )=> !isValidSlug( value ) ? 'El slug no es válido' : undefined 
              })}
            />
            {errors.slug && (
              <span className="text-sm text-red-600">{errors.slug.message}</span>
            )}
          </div>
        </div>

        {/* Right */}
        <div className="w-full lg:w-[18rem] flex flex-col gap-5 py-6 px-2 sm:px-4 sm:py-6 bg-white rounded-md shadow sticky top-16">
          <div>
            <label htmlFor="autor" className="block text-sm sm:text-base font-medium text-gray-600 mb-1">
              Autor<span className="text-red-600 text-xs align-top">*</span>
            </label>
            <select
              id="autor"
              disabled={isLoading}
              {...register('author', {
                required: 'El autor es requerido',
              })}
              className="px-2 py-2 block w-full rounded border focus:outline-blue-800 hover:border-blue-800"
            >
              <option disabled selected value="">Seleccione el autor</option>
              <option value="1">Autor 2</option>
              <option value="2">Autor 3</option>
            </select>
            {errors.author && (
              <span className="text-sm text-red-600">{errors.author.message}</span>
            )}
          </div>
          <div>
            <label
              htmlFor="readTime"
              className="block text-sm sm:text-base font-medium text-gray-600 mb-1"
            >
              Tiempo de lectura<span className="text-red-600 text-xs align-top">*</span>
            </label>
            <div className="flex border rounded overflow-hidden">
              <input
                type="number"
                id="readTime"
                min={1}
                max={20}
                placeholder="5"
                className="block w-full py-2 px-3 focus:outline-blue-800 hover:border-blue-800"
                {...register('readTime', {
                  required: 'Mínimo 1, Maximo 20',
                })}
              />
              <div className="bg-slate-50 flex items-center border-l px-2 text-gray-500 min-w-16">
                min
              </div>
            </div>
            {errors.readTime && (
              <span className="text-sm text-red-600">{errors.readTime.message}</span>
            )}
          </div>
          <div>
            <label
              htmlFor="publishedAt"
              className="block text-sm sm:text-base font-medium text-gray-600 mb-1"
            >
              Fecha de publicación
            </label>
            <input
              type="datetime-local"
              id="publishedAt"
              className="block w-full border p-2 rounded focus:outline-blue-800 hover:border-blue-800"
              {...register('publishedAt') }
            />
          </div>
          <div>
            <label
              htmlFor="tags"
              className="block text-sm sm:text-base font-medium text-gray-600 mb-1"
            >
              Etiquetas
            </label>
            <Controller
              name="tags"
              control={control}
              render={({ field }) => (
                <InputTags
                  onChange={field.onChange}
                  value={field.value}
                  placeholder="Presiona [coma] para agregar"
                  id="tags"
                />
              )}
            />
          </div>
          <div className="flex items-center gap-2 mt-2">
            <Controller
              name="isPublished"
              control={control}
              render={({ field }) => (
                <Switch
                  value={field.value}
                  onChange={field.onChange}
                  id="is-published"
                  disabled={isLoading}
                />
              )}
            />
            <label
              htmlFor="is-published"
              className="block text-sm sm:text-base font-medium text-gray-600"
            >
              Publicado
            </label>
          </div>
          <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2 mt-5">
            <Link
              href={'/admin/noticias'}
              className="block hover:bg-slate-100 font-semibold text-gray-500 hover:text-gray-700 text-sm py-2 px-2 rounded-md transition text-center min-w-28 w-auto border"
            >
              Cancelar
            </Link>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 sm:flex-initial bg-primary-200 text-white enabled:hover:bg-primary-100 disabled:opacity-60 font-semibold text-sm min-w-[8rem] px-5 py-2 rounded transition"
            >
              {isLoading
                ? <LoadingCircle className="w-6 h-6" />
                : articleEdit ? 'Guardar'
                  : watch('isPublished') ? 'Publicar' : 'Guardar'
              }
            </button>
          </div>


        </div>
      </form>
    </div>
  )
}
