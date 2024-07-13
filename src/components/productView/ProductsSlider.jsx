
import CirclePlayButton from '@/components/products/CirclePlayButton'
import CustomButton from '@/components/ui/CustomButton'
import SliderButton from '@/components/ui/SliderButton'
import Title from '@/components/ui/Title'
import Image from 'next/image'
import { MdOutlineArrowRightAlt } from "react-icons/md"
import "./styles.scss"



const ProductsSlider = () => {
  return (
   <section className='flex justify-center py-40 px-40'>
   <div className='flex-1'>
      <Title
         text={'Tecnología'}
         className={'text-complementary-300 !text-left'}
      />
      <h2 className='text-primary-100 font-title text-4xl font-bold pl-2 mb-10'>X-CEM</h2>
      <hr className='bg-complementary-300 h-1 max-w-56 mb-10 ml-2' />
      <p className='font-content mb-12'>Elimina el CO₂ y ofrece mayor resistencia y duración.</p>
      <div className='flex gap-8 items-center'>
         <div className='flex items-center gap-2 cursor-pointer'>
            <CustomButton
               className={'rounded-sm'}>
               <MdOutlineArrowRightAlt />
            </CustomButton>
            <p className='font-content'>Solicitar Muestra</p>
         </div>
         <p className='w-24 text-sm font-content'>mira nuestro video como funciona</p>
         <CirclePlayButton
         />
      </div>
   </div>


   <div className='flex-1 border-l-complementary-400 border-l'>
      <div className='relative w-[550px] ml-auto'>
      <Image 
      src={'/images/cemento.png'}
      alt='cemento'
      width={400}
      height={400}
      />
      <div className='bg-complementary-400 h-96 w-96 rounded-l-[120px] absolute -z-10 top-0 right-0'></div>
      </div>
      <div className='flex justify-end items-center gap-20 font-bold'>
         <p className='text-8xl text-transparent borderText'>01</p>
      <SliderButton
      className={''}
      />
      </div>
   </div>


   <div>
      
   </div>
</section>
  )
}
export default ProductsSlider