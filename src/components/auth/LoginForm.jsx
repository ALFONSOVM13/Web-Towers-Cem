"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiEnvelope, BiLock } from "react-icons/bi";

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [remindMe, setRemindMe] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <section className="px-4 animate-fade w-full max-w-xl">
      <div className="relative bg-white px-5 sm:px-9 pt-10 pb-8 rounded-lg shadow-xl">
        <div className="mb-10">
          <Image
            src="/logoContraido2.svg"
            alt="Logo"
            width={500}
            height={500}
            className="w-40 h-auto mx-auto"
          />
        </div>
        <h1 className="text-3xl text-slate-800 mb-10 font-title font-extrabold text-center uppercase">
          Iniciar Sesión
        </h1>
        <form
          //   onSubmit={handleSubmit(onLoginSubmit)}
          autoComplete="off"
          className="flex flex-col gap-8 font-content"
        >
          <div>
            <label htmlFor="email" className="block mb-1 font-semibold">
              Correo
            </label>
            <div className="flex">
              <span className="flex justify-center items-center px-3 py-2 border border-r-0 rounded-tl-md rounded-bl-md">
                <BiEnvelope className="text-slate-700" size={20} />
              </span>
              <input
                type="text"
                id="email"
                placeholder="correo@mail.com"
                className="border px-3 py-2 rounded-tr-md rounded-br-md flex-1"
                {...register("email", {
                  required: "Ingrese su correo",
                  validate: (value) =>
                    validators.isValidEmail(value)
                      ? undefined
                      : "Correo no válido",
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
                {/* bxs-lock */}
                <BiLock className="text-slate-700" size={20} />
              </span>
              <input
                type="password"
                id="password"
                placeholder="Contraseña"
                className="border px-3 py-2 rounded-tr-md rounded-br-md flex-1"
                {...register("password", {
                  required: "Ingrese su contraseña",
                })}
              />
            </div>
            {!!errors.password && (
              <span className="block text-sm text-red-600 mt-1 animate-fade-down animate-duration-100">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="flex justify-between gap-5 mt-2 mb-3">
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
                className={`flex items-center select-none ${
                  remindMe ? "" : "cursor-pointer"
                }`}
              >
                <div
                  className={`w-5 h-5 border border-gray-300 rounded-md mr-2 flex justify-center items-center ${
                    remindMe ? "bg-slate-800" : "border-gray-300 bg-white"
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
            <Link
              href="/auth/olvide-password"
              className="text-gray-800 hover:text-gray-950 font-medium leading-5"
            >
              Olvide mi contraseña
            </Link>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="uppercase bg-slate-800 hover:bg-slate-900 disabled:bg-slate-600 text-white font-medium rounded-md py-2 flex justify-center"
          >
            {loading ? (
              <div className="custom-loader-white"></div>
            ) : (
              "Iniciar Sesión"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};
