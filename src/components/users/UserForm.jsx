"use client"
import { useRef, useState } from 'react'
import { Controller, useForm } from "react-hook-form"
import { Switch } from "../ui/Switch"
import { UploadImage } from "../ui/UploadImage"
import { LoadingCircle } from '../ui/LoadingCircle'
import { uploadImage } from "@/actions/images"
import { createUser } from '@/actions/users'
import { USER_ROLES, USER_ROLES_OPTIONS } from "@/constants/users"
import { isValidEmail } from '@/utils/validators'

const UserForm = () => {

   const [loading, setLoading] = useState(false)

   const { register, control, handleSubmit, formState: { errors }, watch, getValues, setValue, reset } = useForm({
      defaultValues: {
         name: '',
         lastName: '',
         image: null,
         email: '',
         password: '',
         passwordConfirm: '',
         role: 'editor',
         active: true,
         imageFile: null
      }
   })

   const passwordRef = useRef({})
   passwordRef.current = watch('password', '')

   const handleRemoveCurrentImage = () => {
      setValue('image', null, { shouldValidate: true })
   }

   const handleUserSubmit = async (formUserData) => {

      setLoading(true)
      const { imageFile } = formUserData

      if (imageFile) {
         const formData = new FormData()
         formData.append('image', imageFile)

         const { error, data } = await uploadImage(formData)

         if (error) {
            setLoading(false)
            return console.log('Hubo un error al subir la imagen', error)
         }

         formUserData.image = data.id
         delete formUserData.imageFile
      }

      const { error } = await createUser(formUserData)
      setLoading(false)

      if (error) {
         return console.log(error)
      }

      reset()
   }


   return (
      <div className="max-w-[44rem] mx-auto py-6 px-4 sm:p-8 bg-white rounded-md border shadow-lg">
         <form
            onSubmit={handleSubmit(handleUserSubmit)}
            className="space-y-4 sm:space-y-6"
         >
            <Controller
               control={control}
               name="imageFile"
               render={({ field }) => (
                  <div className="w-28 h-28">
                     <UploadImage
                        defaultImage={getValues('image')}
                        onRemoveDefaultImage={handleRemoveCurrentImage}
                        file={field.value}
                        onChange={field.onChange}
                        disabled={loading}
                     />
                  </div>
               )}
            />
            <div className="flex items-center gap-5">
               <div className="flex-1">
                  <label htmlFor="name" className="block text-sm sm:text-base font-medium text-gray-600 mb-1">
                     Nombres
                  </label>
                  <input
                     type="text"
                     id="name"
                     placeholder="Ingrese los nombres del usuario"
                     disabled={loading}
                     {...register('name', {
                        required: 'Los nombres son requeridos',
                        validate: (value)=> value.trim() === '' ? 'Los nombres son requeridos' : undefined
                     })}
                     className="px-2 py-2 block w-full rounded bg-gray-100 border-gray-400 shadow-sm focus:border-indigo-300"
                  />
                  { errors.name && (
                    <span className="text-sm text-red-600">{ errors.name.message }</span>
                  )}
               </div>
               <div className="flex-1">
                  <label htmlFor="lastName" className="block text-sm sm:text-base font-medium text-gray-600 mb-1">
                     Apellidos
                  </label>
                  <input
                     type="text"
                     id="lastName"
                     disabled={loading}
                     placeholder="Ingrese los apellidos del usuario"
                     {...register('lastName', {
                        required: 'Los apellidos son requeridos',
                        validate: (value)=> value.trim() === '' ? 'Los apellidos son requeridos' : undefined
                     })}
                     className="px-2 py-2 block w-full rounded bg-gray-100 border-gray-400 shadow-sm focus:border-indigo-300"
                  />
                  { errors.lastName && (
                    <span className="text-sm text-red-600">{ errors.lastName.message }</span>
                  )}
               </div>
            </div>

            <div>
               <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-600 mb-1">
                  Correo
               </label>
               <input
                  type="text"
                  id="email"
                  disabled={loading}
                  placeholder="Ingrese el correo del usuario"
                  {...register('email', {
                     required: 'El correo es requerido',
                     validate: value => !isValidEmail(value) ? 'EL correo no es válido': undefined
                  })}
                  className="px-2 py-2 block w-full rounded bg-gray-100 border-gray-400 shadow-sm focus:border-indigo-300"
               />
               { errors.email && (
                  <span className="text-sm text-red-600">{ errors.email.message }</span>
               )}
            </div>
            <div className="flex items-center gap-5">
               <div className="flex-1">
                  <label htmlFor="password" className="block text-sm sm:text-base font-medium text-gray-600 mb-1">
                     Contraseña
                  </label>
                  <input
                     type="password"
                     id="password"
                     disabled={loading}
                     placeholder="******"
                     {...register('password',{
                        required: 'La contraseña es requerida',
                        minLength: { value: 6, message: 'Contraseña muy corta, min 6 caracteres' }
                     })}
                     className="px-2 py-2 block w-full rounded bg-gray-100 border-gray-400 shadow-sm focus:border-indigo-300"
                  />
                  { errors.password && (
                     <span className="text-sm text-red-600">{ errors.password.message }</span>
                  )}
               </div>
               <div className="flex-1">
                  <label htmlFor="passwordConfirm" className="block text-sm sm:text-base font-medium text-gray-600 mb-1">
                     Confirme la contraseña
                  </label>
                  <input
                     type="password"
                     id="passwordConfirm"
                     disabled={loading}
                     placeholder="******"
                     {...register('passwordConfirm', {
                        required: 'Confirme la contraseña',
                        minLength: { value: 6, message: 'Contraseña muy corta, min 6 caracteres' },
                        validate: ( value ) => passwordRef.current !== value ? 'Las contraseña no son iguales' : undefined 
                     })}
                     className="px-2 py-2 block w-full rounded bg-gray-100 border-gray-400 shadow-sm focus:border-indigo-300"
                  />
                  { errors.passwordConfirm && (
                     <span className="text-sm text-red-600">{ errors.passwordConfirm.message }</span>
                  )}
               </div>
            </div>

            <div>
               <label htmlFor="role" className="block text-sm sm:text-base font-medium text-gray-600 mb-1">
                  Rol
               </label>
               <select
                  id="role"
                  disabled={loading}
                  {...register('role', {
                     required: 'El rol es requerido',
                     validate: value => !USER_ROLES.includes(value) ? 'El rol no es válido' : undefined
                  })}
                  className="px-2 py-2 block w-full rounded bg-gray-100 border-gray-400 shadow-sm focus:border-indigo-300"
               >
                  {
                     USER_ROLES_OPTIONS.map(({ value, label }) => (
                        <option key={value} value={value}>
                           {label}
                        </option>
                     ))
                  }
               </select>
            </div>

            <div className="flex flex-col items-start gap-1">
               <label
                  htmlFor="toggle-active"
                  className="block text-sm sm:text-base font-medium text-gray-600"
               >
                  {getValues('active') ? 'Activado' : 'Bloqueado'}
               </label>
               <Controller
                  name="active"
                  control={control}
                  render={({ field }) => (
                     <Switch
                        value={field.value}
                        onChange={field.onChange}
                        id="toggle-active"
                        disabled={loading}
                     />
                  )}
               />
            </div>

            <div className="flex justify-center gap-4">
               <button
                  type="submit"
                  disabled={ loading }
                  className="flex items-center justify-center gap-1 px-3 min-w-[12rem] w-full sm:w-auto py-2 bg-primary-200 enabled:hover:bg-primary-100 disabled:opacity-80 rounded text-white transition uppercase"
               >
                  {loading ? <LoadingCircle className="w-6 h-6" /> : 'Crear Usuario'}
               </button>
            </div>
         </form>
      </div>
   )
}

export default UserForm
