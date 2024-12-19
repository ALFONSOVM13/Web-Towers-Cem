"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation'
import { useForm } from "react-hook-form";
import { BiLock, BiUser } from "react-icons/bi";
import { authenticate } from "@/actions/auth";
import { LoadingCircle } from "../ui/LoadingCircle";

export const LoginForm = () => {
  const [loading, setLoading] = useState(false)
  const [remindMe, setRemindMe] = useState(true)
  const [hasError, setHasError] = useState()
  const router = useRouter()

  const { register, handleSubmit, formState: { errors }, } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLoginSubmit = async (formData) => {
    setLoading(true)
    const session = await authenticate(formData)
    
    if( session?.error ){
      setLoading(false)
      setHasError(session.error)
      setTimeout(() => {
        setHasError(undefined)
      },2000);
    } 
    
  }

  return (
    <section className="px-4 animate-fade w-full max-w-lg">
      <div className="relative bg-white px-5 sm:px-9 pt-10 pb-10 rounded-lg shadow-xl border border-slate-100">
        {
          hasError && (
            <div className="absolute inset-x-2 -top-5 py-1 border border-red-300 rounded-md text-center bg-red-100 text-red-600 animate-shake animate-duration-100">
              Credenciales invalidas
            </div>
          )
        }
        <div className="mb-12">
          <Image
            src="/logoContraido2.svg"
            alt="Logo Towers Cem"
            width={250}
            height={50}
            className="w-56 h-auto mx-auto"
          />
        </div>
        <form
          onSubmit={handleSubmit(handleLoginSubmit)}
          autoComplete="off"
          className="flex flex-col gap-8 font-content"
        >
          <div>
            <label htmlFor="user" className="block mb-1 font-semibold">
              Usuario
            </label>
            <div className="flex">
              <span className="flex justify-center items-center px-3 py-2 border border-r-0 rounded-tl-md rounded-bl-md">
                <BiUser className="text-slate-700" size={20} />
              </span>
              <input
                type="text"
                id="user"
                placeholder="Ingrese su usuario"
                disabled={loading}
                className="border px-3 py-2 rounded-tr-md rounded-br-md flex-1"
                {...register("email", {
                  required: "Ingrese su usuario",
                  validate: value => value.trim() === '' ? 'Ingrese su usuario' : undefined
                })}
              />
            </div>
            {!!errors.email && (
              <span className="block text-sm text-red-600 mt-1 animate-fade-down animate-duration-100">
                {errors.email.message}
              </span>
            )}
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 font-semibold">
              Contraseña
            </label>
            <div className="flex">
              <span className="flex justify-center items-center px-3 py-2 border border-r-0 rounded-tl-md rounded-bl-md">
                <BiLock className="text-slate-700" size={20} />
              </span>
              <input
                type="password"
                id="password"
                placeholder="Contraseña"
                disabled={loading}
                className="border px-3 py-2 rounded-tr-md rounded-br-md flex-1"
                {...register("password", {
                  required: "Ingrese su contraseña",
                  validate: value => value.trim() === '' ? 'Ingrese su contraseña' : undefined
                })}
              />
            </div>
            {!!errors.password && (
              <span className="block text-sm text-red-600 mt-1 animate-fade-down animate-duration-100">
                {errors.password.message}
              </span>
            )}
          </div>

          <div>
            <input
              type="checkbox"
              id="myCheckbox"
              disabled={loading}
              checked={remindMe}
              onChange={() => setRemindMe(!remindMe)}
              className="hidden"
            />
            <label
              htmlFor="myCheckbox"
              className={`flex items-center select-none ${remindMe ? "" : "cursor-pointer"
                }`}
            >
              <div
                className={`w-5 h-5 border border-gray-300 rounded-md mr-2 flex justify-center items-center ${remindMe ? "bg-primary-100" : "border-gray-300 bg-white"
                  }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style={{ fill: "#fff" }}
                  className={remindMe ? "block" : "hidden"}
                >
                  <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
                </svg>
              </div>
              <span className="text-gray-800 hover:text-gray-950 font-medium leading-5">
                Recordarme
              </span>
            </label>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="uppercase bg-primary-100 enabled:hover:bg-primary-200 disabled:bg-slate-600 text-white font-medium rounded-md py-2 flex justify-center"
          >
            {loading ? (
              <LoadingCircle className="w-6 h-6" />
            ) : (
              "Iniciar Sesión"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};
