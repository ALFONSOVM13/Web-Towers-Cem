import Image from "next/image"
import Link from "next/link"
import { BiEditAlt, BiTrash, BiLinkExternal } from "react-icons/bi"


export const EventListItem = ({ event }) => {
    console.log(event)
    return (
        <>
            <td className="w-48 py-3">
                <figure className="relative overflow-hidden w-20 h-14 bg-slate-100 ml-5">
                    <Image
                        src={event.bannerDesktop.url}
                        alt={event.title}
                        width={56}
                        height={80}
                        className="object-contain object-center w-full h-full"
                    />
                </figure>
            </td>
            <td className="w-40">
                <figure className="relative overflow-hidden w-14 h-16 bg-slate-100 ml-5">
                    <Image
                        src={event.bannerMobile.url}
                        alt={event.title}
                        width={56}
                        height={80}
                        className="object-contain object-center w-full h-full"
                    />
                </figure>
            </td>
            <td className="font-semibold md:min-w-[18rem]">{event.title}</td>
            <td>
                {event.isPublished
                    ? <span className="text-sm px-3 py-1 rounded-full text-green-600 bg-green-100 border border-green-500">Publicado</span>
                    : <span className="text-sm px-3 py-1 rounded-full text-gray-500 bg-gray-100 border border-gray-400">Borrador</span>
                }
            </td>
            <td className="pr-3">
                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        onClick={()=>{}}
                        className="items-center text-blue-600 hover:text-white bg-blue-100 hover:bg-blue-500 font-bold text-sm py-2 px-2 rounded-md transition"
                    >
                        <BiEditAlt />
                    </button>
                    <button
                        type="button"
                        onClick={() => {}}
                        className="items-center text-red-600 hover:text-white bg-red-100 hover:bg-red-500 font-bold text-sm py-2 px-2 rounded-md transition"
                    >
                        <BiTrash />
                    </button>
                    <a
                        href={ event.url ? event.url : `/admin/eventos`}
                        title={event.url}
                        target="_blank"
                        className={`items-center ${ event.url ? 'hover:text-white bg-green-100 hover:bg-green-500 text-green-600':'opacity-200 text-gray-500 bg-gray-100 pointer-events-none' } font-bold text-sm py-2 px-2 rounded-md transition`}
                    >
                        <BiLinkExternal />
                    </a>
                </div>
            </td>
        </>
    )
}
