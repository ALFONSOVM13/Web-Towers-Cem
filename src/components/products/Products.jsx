import React from "react"
import Image from 'next/image'
import Title from '../ui/Title'
import CustomButton from '../ui/CustomButton'
import SliderButton from '../ui/SliderButton'

const Products = () => {
  return (
    <div className='flex flex-col md:flex-row p-6 md:p-14 justify-center items-center min-h-screen'>
      <div className='w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center'>
        <div className='flex flex-col flex-2 md:ml-10 items-center md:items-start'>
          <Image
            src="/images/cemento.svg"
            width={400}
            height={400}
            alt="Cemento uso general"
          />
          <SliderButton className='mx-auto w-auto space-y-4 mt-2 md:mt-0'/>
        </div>
        <div className='flex flex-col space-y-8 flex-1 mt-10 md:mt-0 items-center md:items-start text-center md:text-left'>
          <Title
            text="X-CEM"
            className='font-title font-bold text-primary-100'
            size='large'
          />
          <Title
            text="CEMENTO USO GENERAL"
            className='font-title font-bold'
          />
          <p className='text-complementary-300 font-title text-xl px-4 md:px-0'>Nuestro cemento X-Cem utiliza tecnología avanzada para proporcionar altos niveles de durabilidad y sostenibilidad. Descubre cómo X-Cem puede transformar tus proyectos de construcción.</p>

          <div className='flex flex-col md:flex-row gap-6 mt-10'>
            <CustomButton
              type='primary'
              onClick={() => {}}
              className='rounded-2xl'
            >
              VER FICHA TECNICA
            </CustomButton>
            <CustomButton
              type='secundary'
              onClick={() => {}}
              className='rounded-2xl'
            >
              SOLICITAR MUESTRAS
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Products


// import React, { useState } from "react";
// import Image from 'next/image';
// import Title from '../ui/Title';
// import CustomButton from '../ui/CustomButton';
// import SliderButton from '../ui/SliderButton';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectFlip, Pagination, Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/effect-flip';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// const productData = [
//   {
//     image: URL="/public/images/cemento.svg",
//     title: "X-CEM",
//     subtitle: "USO GENERAL",
//     description: "Nuestro cemento X-Cem utiliza tecnología avanzada para proporcionar altos niveles de durabilidad y sostenibilidad. Descubre cómo X-Cem puede transformar tus proyectos de construcción."
//   },
//   {
//     image: URL="/public/images/bolsa-blanca-42.5.png",
//     title: "X-CEM",
//     subtitle: "USO ESTRUCTURAL",
//     description: "Revolucionamos los estándares de la construcción, minimizamos el impacto en el ecosistema y maximizamos la eficiencia de los recursos. Cada tonelada (t) de cemento X-cem remueve hasta 173.35 Kg de CO2 de la atmósfera."
//   },
//   {
//     image: URL="/public/images/bolsa-42.50kg-marron.png",
//     title: "X-CEM",
//     subtitle: "USO ESTRUCTURAL",
//     description: "Revolucionamos los estándares de la construcción, minimizamos el impacto en el ecosistema y maximizamos la eficiencia de los recursos. Cada tonelada (t) de cemento X-cem remueve hasta 173.35 Kg de CO2 de la atmósfera."
//   },
// ];

//   const Products = () => {
//   const [activeProduct, setActiveProduct] = useState(0);

//   const handleSlideChange = (swiper) => {
//     setActiveProduct(swiper.activeIndex);
//   };

//   return (
//     <div className='flex p-14 justify-center items-center'>
//       <div className='flex flex-col flex-2 ml-28'>
//         <Swiper
//           effect={'flip'}
//           grabCursor={true}
//           pagination={true}
//           navigation={true}
//           modules={[EffectFlip, Pagination, Navigation]}
//           className="mySwiper"
//           onSlideChange={handleSlideChange}
//         >
//           {productData.map((product, index) => (
//             <SwiperSlide key={index}>
//               <div style={{ width: 400, height: 400, position: 'relative' }}>
//                 <Image
//                   src={product.image}
//                   layout="fill"
//                   objectFit="cover"
//                   alt={product.title}
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <SliderButton className={'mx-auto w-auto space-y-4'} />
//       </div>
//       <div className='flex-col space-y-8 flex-1'>
//         <Title
//           text={productData[activeProduct].title}
//           className={'font-title font-bold text-primary-100'}
//           size={'large'}
//         />
//         <Title
//           text={productData[activeProduct].subtitle}
//           className={'font-title font-bold'}
//         />
//         <p className='text-complementary-300 font-title text-xl'>
//           {productData[activeProduct].description}
//         </p>

//         <div className='flex gap-6 mt-10'>
//           <CustomButton
//             type='primary'
//             onClick={() => {}}
//             className={'rounded-2xl'}
//           >
//             VER FICHA TECNICA
//           </CustomButton>
//           <CustomButton
//             type='secundary'
//             onClick={() => {}}
//             className={'rounded-2xl'}
//           >
//             SOLICITAR MUESTRAS
//           </CustomButton>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;
