import React from 'react';
import CustomButton from "../ui/CustomButton"

function ContactForm() {

  return (

    <div className="flex flex-col w-7/12 max-md:ml-0 max-md:w-full bg-complementary-300">
      <div className="flex flex-col grow p-10 max-md:px-5 max-md:mt-10 max-md:max-w-full bg">
        <div className="flex flex-col text-white max-md:max-w-full ">
          <h2 className="text-3xl font-semibold tracking-tight max-md:max-w-full">
            Contactanos
          </h2>
          <p className="mt-2 text-base tracking-normal max-md:max-w-full">
            Podemos hacer de cada tonelada de cemento una contribución significativa hacia un mundo más saludable y resiliente.
          </p>
        </div>
        <form className="flex flex-col mt-10 text-base font-medium tracking-normal text-white text-opacity-60 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-3.5 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
            <input
              type="text"
              className="flex-1 justify-center items-start px-3.5 py-3 border border-solid bg-white bg-opacity-10 border-white border-opacity-20 max-md:pr-5"
              placeholder="Nombre"
              aria-label="Nombre"
            />
            <input
              type="text"
              className="flex-1 justify-center items-start px-3.5 py-3 border border-solid bg-white bg-opacity-10 border-white border-opacity-20 max-md:pr-5"
              placeholder="Asunto"
              aria-label="Asunto"
            />
          </div>
          <input
            type="email"
            className="justify-center items-start px-3.5 py-3 mt-3.5 whitespace-nowrap border border-solid bg-white bg-opacity-10 border-white border-opacity-20 max-md:pr-5 max-md:max-w-full"
            placeholder="Email"
            aria-label="Email"
          />
          <input
            type="tel"
            className="justify-center items-start px-3.5 py-3 mt-3.5 border border-solid bg-white bg-opacity-10 border-white border-opacity-20 max-md:pr-5 max-md:max-w-full"
            placeholder="Numero telefonico"
            aria-label="Numero telefonico"
          />
          <textarea
            className="justify-center items-start px-3.5 py-3 mt-3.5 whitespace-nowrap border border-solid bg-white bg-opacity-10 border-white border-opacity-20 max-md:pr-5 max-md:max-w-full"
            placeholder="Mensaje"
            aria-label="Mensaje"
          ></textarea>
          <button
            type="submit"
            className="flex justify-center items-center px-2.5 py-3 mt-3.5 text-white whitespace-nowrap rounded-md max-md:px-5 max-md:max-w-full"
          >
            <div className="flex gap-2.5">
               <div className="flex flex-col lg:flex-row ">
                    <CustomButton
                      type="primary"
                      className="rounded-2xl"
                    >
                      ENVIAR
                    </CustomButton>
                  </div>
              {/* <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e431d5f6afb77cc244f6efb04c30e5d135322d95fb295b5e1edbe81cc2a825f?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&"
                className="shrink-0 my-auto mix-blend-screen aspect-[2.08] w-[25px]"
                alt=""
              /> */}
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;