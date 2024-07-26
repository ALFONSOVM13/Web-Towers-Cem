"use client"
import SliderButton from "@/components/ui/SliderButton"
import Title from "@/components/ui/Title"
import "./styles.scss"
import { useRef, useState } from "react"
import CirclePlayButton from "../ui/CirclePlayButton"
import Button from '../ui/Button'

const ProductsSlider = ({ title, name, description, image }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const descriptionRef = useRef(null)

  const images = [image.front, image.back, image.left, image.right]

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <section className="flex justify-center pt-40  md:pt-28 pb-4 p-4 md:px-40 flex-col md:flex-row bg-slate-200 ">
      <div className="flex-1 pr-7 ">
        <Title text={title} className={"text-primary-100 !text-left"} />
        <h2 className="text-customGreen font-title text-2xl md:text-4xl font-bold md:pl-2 mb-4 md:mb-10">
          {name}
        </h2>
        <hr className="bg-primary-100 h-1 max-w-56 mb-4 md:mb-10 md:ml-2" />
        <p
          className="font-content mb-4 md:mb-12 animate-fade-right animate-duration-[2000ms]"
          ref={descriptionRef}
        >
          {description}
        </p>
        <div className="flex  md:gap-8 items-center justify-around ">
          <div className="flex items-center gap-2 cursor-pointer">
            <Button className={"rounded-sm"}>
              SOLICITAR MUESTRA
            </Button>
          </div>
          <p className="w-24 text-sm font-title hidden sm:block">
            mira nuestro video como funciona
          </p>
          <CirclePlayButton />
        </div>
      </div>

      <div className="flex-1 border-l-slate-600 pl-4 md:border-l flex flex-col items-center">
        <div className="relative flex justify-center items-center w-full">
          <figure
            className="relative h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] md:h-[400px] md:w-[300px] animate-fade-right" >
            <img
              src={images[currentImageIndex]}
              alt="cemento"
              className="object-cover h-full w-full cursor-pointer object-center"
            />
          </figure>
          <div className="bg-complementary-200 h-48 w-64 sm:h-64 sm:w-96 md:h-96 md:w-96 rounded-l-[120px] absolute -z-10 top-0 right-0"></div>
        </div>

        <div className="flex flex-col items-center gap-2 mt-4 md:flex-row md:justify-end md:mt-0 md:gap-24 font-bold">
          {/* <p className="text-5xl sm:text-6xl md:text-8xl hidden sm:block text-transparent borderText">
            0{ 1}
          </p> */}
          <SliderButton onClickLeft={handlePreviousImage} onClickRight={handleNextImage} />
        </div>
      </div>
    </section>
  )
}
export default ProductsSlider
