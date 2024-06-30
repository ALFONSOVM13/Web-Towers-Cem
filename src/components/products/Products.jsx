import React from "react"
import Image from 'next/image'
import Title from '../ui/Title'
import CustomButton from '../ui/CustomButton'
import SliderButton from '../ui/SliderButton'

const Products = () => {
  return (
    <div className='flex p-14 justify-center items-center'>
      <div className='flex flex-col flex-2 ml-28'>
        <Image
          src="/images/cemento.svg"
          width={400}
          height={400}
          alt="Cemento uso general"
        />
        <SliderButton className={'mx-auto w-auto space-y-4'}/>
      </div>
      <div className='flex-col space-y-8 flex-1'>
        <Title
          text="X-CEM"
          className={'font-title font-bold text-primary-100'}
          size={'large'}
        />
        <Title
          text="CEMENTO USO GENERAL"
          className={'font-title font-bold'}
        />
        <p className='text-complementary-300 font-title text-xl'>Nuestro cemento X-Cem utiliza tecnología avanzada para proporcionar altos niveles de durabilidad y sostenibilidad. Descubre cómo X-Cem puede transformar tus proyectos de construcción.</p>

        <div className='flex gap-6 mt-10'>
          <CustomButton
            type='primary'
            onClick={''}
            className={'rounded-2xl'}
          >
            VER FICHA TECNICA
          </CustomButton>
          <CustomButton
            type='secundary'
            onClick={''}
            className={'rounded-2xl'}
          >
            SOLICITAR MUESTRAS
          </CustomButton>
        </div>
      </div>
    </div>
  )
}
export default Products