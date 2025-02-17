import NewsForm from '@/components/ui/NewsForm'
import Link from 'next/link'
import React from 'react'
import { BiPlusCircle } from 'react-icons/bi'

const page = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-title font-bold">Noticias</h1>
        <Link
          href="/admin/noticias/nuevo"
          className="flex items-center gap-1 px-3 py-2 font-semibold text-sm bg-primary-200 hover:bg-primary-100 rounded text-white transition"
        >
          <BiPlusCircle size={20} />
          Agregar noticia
        </Link>
      </div>
      <div>
        <h2>Noticias List</h2>
      </div>
    </>
  )
}

export default page