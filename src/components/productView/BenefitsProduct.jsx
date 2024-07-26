import Image from 'next/image'
import CustomButton from '../ui/CustomButton'


const BenefitsProduct = ({ benefits, image, dataSheet }) => {
  return (
    <section className="px-4 md:px-10 pb-10 md:pb-20 pt-10">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-5xl font-title text-primary-100 pb-6">
          Beneficios del <span className="font-bold">Cemento X</span>
        </h2>
        <p className="text-lg md:text-xl font-title text-complementary-300 mt-2">
          Descubre cómo el Cemento X puede transformar tus proyectos de construcción.
        </p>
      </div>
      <div className="flex flex-wrap justify-between items-center">
        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center mb-6 md:mb-0 ">
          <figure className="relative h-[350px] w-[350px] md:h-[420px] md:w-[250px] pt-4">
            <Image
              src={image}
              height={500}
              width={500}
              alt="X-Cem Image"
              className="object-cover h-full cursor-pointer object-center"
            />
          </figure>
        </div>
        <div className="w-full md:w-1/2 md:pl-10">
          <ul className="flex flex-col list-inside font-title text-primary-100 md:text-xl list-none gap-4 md:gap-8">
            {benefits?.map((benefit) => (
              <li
                key={benefit?.id}
                className="flex items-center gap-2 md:gap-4 text-primary-100"
              >
                <Image
                  src="/images/products/iconos/LISTO.png"
                  height={30}
                  width={30}
                  alt="check"
                />
                {benefit?.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center pt-7 md:pt-10">
        <CustomButton>
          <a
            href={dataSheet}
            target="_blank"
            title="Ver ficha"
            rel="noopener noreferrer"
          >
            VER FICHA TECNICA
          </a>
        </CustomButton>
      </div>
    </section>
  )
}

export default BenefitsProduct
