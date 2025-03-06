'use client'
import Image from "next/image"
import { BiEditAlt, BiTrash } from "react-icons/bi"

export const AuthorListItem = ({ author, onSetAuthorToEdit, onSetAuthorToDelete }) => {
  return (
    <>
      <td className="py-3">
        {
          author.photo
            ? (
              <figure className="relative overflow-hidden rounded-full w-12 h-12">
                <Image
                  src={author.photo.url}
                  alt={author.name}
                  width={132}
                  height={132}
                  className="bg-slate-100 object-cover object-center w-full h-full"
                />
              </figure>
            ) : (
              <div className=" bg-slate-100 w-12 h-12 rounded-full flex justify-center items-center font-semibold text-primary-200">
                {author.name.slice(0, 1)}
              </div>
            )
        }
      </td>
      <td className="md:min-w-[18rem] font-semibold">{author.name} {author.lastName}</td>
      <td className="pr-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onSetAuthorToEdit(author)}
            className="items-center text-blue-600 hover:text-white bg-blue-100 hover:bg-blue-500 font-bold text-sm py-2 px-2 rounded-md transition"
          >
            <BiEditAlt />
          </button>
          <button
            type="button"
            onClick={() => onSetAuthorToDelete(author)}
            className="items-center text-red-600 hover:text-white bg-red-100 hover:bg-red-500 font-bold text-sm py-2 px-2 rounded-md transition"
          >
            <BiTrash />
          </button>
        </div>
      </td>
    </>
  )
}
