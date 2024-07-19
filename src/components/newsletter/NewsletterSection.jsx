import NewsletterForm from "./NewsletterForm";

const NewsletterSection = () => {
  return (
    <section className="bg-zinc-700 text-white flex flex-col xl:items-center gap-10 py-10 md:px-20 lg:px-32 md:py-16 xl:py-20 p-5 max-w-[95%] mx-auto rounded-2xl">
      <p className="text-2xl font-semibold text-center leading-10 md:leading-[3.5rem] xl:leading-[4rem]">
        Suscríbete a nuestro newsletter para recibir artículos técnicos y
        novedades del sector de la construcción y la sostenibilidad
      </p>
      <NewsletterForm />
    </section>
  );
};

export default NewsletterSection;
