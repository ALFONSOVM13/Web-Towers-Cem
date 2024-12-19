"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { BiSolidUser, BiShieldQuarter } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { toggleSideMenu } from "@/store/ui";
import { isDescendantHtmlElement } from "@/utils/isDescendantHtmlElement";


export const Navbar = ({ user }) => {

  const dispatch = useDispatch()
  const [showDropdown, setShowDropdown] = useState(false)

  const dropdownRef = useRef(null)

  const handleOutsideClick = (ev) => {
    if (
      ev.target !== dropdownRef.current &&
      !isDescendantHtmlElement(ev.target, dropdownRef.current)
    ) {
      setShowDropdown(false)
    }
  }

  useEffect(() => {
    const body = document.querySelector('body')
    body?.addEventListener('click', handleOutsideClick)

    return () => {
      body?.removeEventListener('click', handleOutsideClick)
    }
  }, [])


  return (
    <header className="sticky top-0 z-10 flex justify-between items-center bg-white py-2 px-5 shadow">
      <button
        onClick={() => dispatch(toggleSideMenu())}
        className="group flex justify-center items-center w-9 h-9 bg-slate-100 hover:bg-primary-100 rounded-md px-1 active:scale-95"
      >
        <BiMenu size={25} className="text-slate-700 group-hover:text-white" />
      </button>
      <div className="relative flex items-center gap-2">
        <p className="font-bold text-slate-700 capitalize">{user.name}</p>
        <figure
          onClick={() => setShowDropdown(!showDropdown)}

          className="relative w-10 h-10 rounded-full overflow-hidden cursor-pointer group border bg-white">
          {
            user.photo
              ? (
                <Image
                  priority
                  src={user.photo}
                  alt={user.name}
                  width={125}
                  height={125}
                  className='cover rounded-full bg-gray-200 border-2 border-white aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-75 lg:aspect-none'
                />
              ) : (
                <div className="w-full h-full flex justify-center items-center rounded-full bg-gray-200 border-2 border-white">
                  <p className="font-bold text-xl text-slate-700 uppercase">{user.name.slice(0, 1)}</p>
                </div>
              )
          }

        </figure>
        {
          showDropdown &&
          <div
            ref={dropdownRef}
            className="absolute top-full right-5 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none min-w-24" role="menu">
            <div className="p-1">
              <button
                className="w-full text-left text-sm text-gray-700 flex items-center gap-2 px-2 py-2 hover:bg-gray-100 hover:text-gray-900 rounded">
                <BiSolidUser size={20} />
                <span>Perfil</span>
              </button>
              {
                user.role === 'super_admin' &&
                <>
                  <Link
                    href="/admin/usuarios"
                    onClick={()=>setShowDropdown(false)}
                    className="w-full text-left text-sm text-gray-700 flex items-center gap-2 px-2 py-2 hover:bg-gray-100 hover:text-gray-900 rounded"
                  >
                    <BiShieldQuarter size={20} />
                    <span>Usuarios</span>
                  </Link>
                </>

              }
            </div>
          </div>
        }
      </div>
    </header>
  )
}
