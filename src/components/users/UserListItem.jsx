import Image from "next/image"
import Link from "next/link"
import { BiEditAlt, BiTrash } from "react-icons/bi"


export const UserListItem = ({ user, onDelete }) => {
  return (
    <>
      <td className="py-3">
        {
          user.image
            ? (
              <figure className="relative overflow-hidden rounded-full w-12 h-12">
                <Image
                  src={user.image.url}
                  alt={user.name}
                  width={132}
                  height={132}
                  className="bg-slate-100 object-cover object-center w-full h-full"
                />
              </figure>
            ) : (
              <div className=" bg-slate-100 w-12 h-12 rounded-full flex justify-center items-center font-semibold text-primary-200">
                {user.name.slice(0, 1)}
              </div>
            )
        }
      </td>
      <td className="max-w-48 font-semibold">{user.name} {user.lastName}</td>
      <td>
        <span className="text-gray-600">{user.email}</span>
      </td>
      <td>
        <span className="px-2 py-1 rounded border text-sm">{user.role}</span>
      </td>
      <td>
        {user.active
          ? <span className="text-sm px-3 py-1 rounded-full text-green-600 bg-green-100 border border-green-500">Activo</span>
          : <span className="text-sm px-3 py-1 rounded-full text-gray-500 bg-gray-100 border border-gray-400">Bloqueado</span>
        }
      </td>
      <td className="pr-3">
        <div className="flex items-center gap-2">
          <Link
            href={`/admin/usuarios/${ user.id }`}
            className="items-center text-blue-600 hover:text-white bg-blue-100 hover:bg-blue-500 font-bold text-sm py-2 px-2 rounded-md transition"
          >
            <BiEditAlt />
          </Link>
          <button
            onClick={() => onDelete(user)}
            className="items-center text-red-600 hover:text-white bg-red-100 hover:bg-red-500 font-bold text-sm py-2 px-2 rounded-md transition"
          >
            <BiTrash />
          </button>
        </div>
      </td>
    </>
  )
}


