'use client'
import { BiTrash } from "react-icons/bi"
import { LoadingCircle } from "./LoadingCircle"


export const ModalDelete = ({ title, subtitle, onChange, isDeleting }) => {
  return (
    <div className="flex flex-col gap-4 p-1 max-w-[28rem]">
      <div className="flex flex-col items-center sm:flex-row gap-4">
        <div className="w-12 h-12 aspect-square text-lg rounded-full bg-red-100 text-red-500 flex justify-center items-center">
          <BiTrash />
        </div>
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <p className="font-title text-gray-600">{subtitle}</p>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row md:justify-end gap-2">
        <button
          className="hover:bg-slate-100 font-semibold text-gray-500 hover:text-gray-700 text-sm py-2 px-2 rounded-md transition min-w-24"
          disabled={isDeleting}
          onClick={() => onChange(false)}
        >
          Cancelar
        </button>
        <button
          className="text-red-600 enabled:hover:text-white bg-red-100 enabled:hover:bg-red-500 font-semibold text-sm py-2 px-2 rounded-md transition min-w-24"
          disabled={isDeleting}
          onClick={() => onChange(true)}
        >

          {isDeleting
            ? <LoadingCircle className="w-6 h-6" />
            : 'Eliminar'
          }

        </button>
      </div>
    </div>
  )
}
