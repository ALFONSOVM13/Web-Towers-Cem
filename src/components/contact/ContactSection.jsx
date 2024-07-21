import React from 'react';
import ContactForm from './ContactForm';
import TestimonialCard from './TestimonialCard';

function ContactSection() {
  return (
    <section className="flex flex-col items-center justify-center w-full max-md:max-w-full pt-40 md:pt-20 bg-complementary-300">
      <div className="flex flex-col w-full max-w-[1092px] max-md:max-w-full  border-opacity-10">
        <header className="flex flex-col self-center max-md:max-w-full">
          <h1 className="text-7xl font-bold tracking-tighter text-complementary-200 max-md:max-w-full max-md:text-4xl mx-auto">
            Establece conexión
          </h1>
          <p className="mt-5 text-2xl font-normal tracking-normal text-center text-complementary-200 max-md:max-w-full max-md:text-lg">
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
