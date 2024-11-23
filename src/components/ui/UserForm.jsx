"use client"
import React, { useState } from "react"
import Button from './Button'

const UserForm = () => {
   const [user, setUser] = useState({
      fullName: "",
      username: "",
      password: "",
      role: "publisher",
      isActive: true,
   })

   const [users, setUsers] = useState([])

   const handleInputChange = (e) => {
      const { name, value } = e.target
      setUser((prevUser) => ({ ...prevUser, [name]: value }))
   }

   const handleSwitchChange = () => {
      setUser((prevUser) => ({ ...prevUser, isActive: !prevUser.isActive }))
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      // Agregar el usuario creado a la lista
      setUsers((prevUsers) => [...prevUsers, user])
      console.log("User created:", user)
      // Limpiar el formulario
      setUser({
         fullName: "",
         username: "",
         password: "",
         role: "publisher",
         isActive: true,
      })
   }

   const handleDelete = (username) => {
      // Eliminar el usuario de la lista
      setUsers((prevUsers) => prevUsers.filter((u) => u.username !== username))
      console.log("User deleted:", username)
   }

   return (
      <div className="max-w-4xl mx-auto p-4 sm:p-8 bg-white rounded-lg shadow-lg">
         <h2 className="text-2xl sm:text-3xl font-title font-bold text-primary-100 text-center mb-6 sm:mb-8">
            Crear Usuario
         </h2>

         <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            <div>
               <label htmlFor="fullName" className="block text-base sm:text-lg font-medium text-gray-700">
                  Nombre Completo
               </label>
               <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={user.fullName}
                  onChange={handleInputChange}
                  className="mt-1 sm:mt-2 block w-full rounded-md bg-gray-100 border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  required
               />
            </div>

            <div>
               <label htmlFor="username" className="block text-base sm:text-lg font-medium text-gray-700">
                  Usuario
               </label>
               <input
                  type="text"
                  id="username"
                  name="username"
                  value={user.username}
                  onChange={handleInputChange}
                  className="mt-1 sm:mt-2 block w-full rounded-md bg-gray-100 border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  required
               />
            </div>

            <div>
               <label htmlFor="password" className="block text-base sm:text-lg font-medium text-gray-700">
                  Contraseña
               </label>
               <input
                  type="password"
                  id="password"
                  name="password"
                  value={user.password}
                  onChange={handleInputChange}
                  className="mt-1 sm:mt-2 block w-full rounded-md bg-gray-100 border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  required
               />
            </div>

            <div>
               <label htmlFor="role" className="block text-base sm:text-lg font-medium text-gray-700">
                  Rol
               </label>
               <select
                  id="role"
                  name="role"
                  value={user.role}
                  onChange={handleInputChange}
                  className="mt-1 sm:mt-2 block w-full rounded-md bg-gray-100 border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
               >
                  <option value="admin">Admin</option>
                  <option value="publisher">Publicador</option>
               </select>
            </div>

            <div className="flex items-center space-x-4">
               <label htmlFor="isActive" className="text-base sm:text-lg font-medium text-gray-700">
                  Usuario Habilitado
               </label>
               <div
                  onClick={handleSwitchChange}
                  className={`w-12 h-6 flex items-center ${user.isActive ? 'bg-green-500' : 'bg-gray-400'} rounded-full cursor-pointer`}
               >
                  <div
                     className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${user.isActive ? 'translate-x-6' : 'translate-x-0'}`}
                  />
               </div>
            </div>

            <div className="flex justify-center gap-4">
               <Button className="bg-primary-100 text-white">
                  Crear Usuario
               </Button>
            </div>
         </form>

         {/* Lista de usuarios creados */}
         <div className="mt-8">
            <h3 className="text-xl sm:text-2xl font-bold text-primary-100 mb-4">Usuarios Creados</h3>
            {users.length === 0 ? (
               <p className="text-gray-500">No se han creado usuarios aún.</p>
            ) : (
               <ul className="space-y-4">
                  {users.map((createdUser) => (
                     <li key={createdUser.username} className="flex justify-between items-center p-4 bg-gray-50 rounded-md shadow-sm">
                        <div>
                           <p className="font-medium text-gray-800">{createdUser.fullName}</p>
                           <p className="text-sm text-gray-600">{createdUser.username}</p>
                        </div>
                        <Button
                           type="button"
                           className="bg-red-500 text-white"
                           onClick={() => handleDelete(createdUser.username)}
                        >
                           Eliminar
                        </Button>
                     </li>
                  ))}
               </ul>
            )}
         </div>
      </div>
   )
}

export default UserForm
