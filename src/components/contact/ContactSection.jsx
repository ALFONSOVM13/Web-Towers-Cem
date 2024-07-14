import React from 'react';
import ContactForm from './ContactForm';
import TestimonialCard from './TestimonialCard';

function ContactSection() {
  return (
    <section className="flex justify-center items-center px-16 py-14 bg-primary-100 max-md:px-5">
      <div className="flex flex-col w-full max-w-[1092px] max-md:max-w-full">
        <header className="flex flex-col self-center max-md:max-w-full">
          <h1 className="text-7xl font-bold tracking-tighter text-white max-md:max-w-full max-md:text-4xl mx-auto">
            Establece conexión
          </h1>
          <p className="mx-auto mt-2 text-2xl font-medium tracking-tight text-white max-md:mr-2.5 max-md:max-w-full">
            Nuestra misión es más que construir; es construir con conciencia.
          </p>
        </header>
        <main className="p-5 mt-11 border-2 border-solid backdrop-blur-[190px] bg-complementary-300  border-gray-950 border-opacity-10 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <ContactForm />
            <TestimonialCard />
          </div>
        </main>
      </div>
    </section>
  );
}

export default ContactSection;
