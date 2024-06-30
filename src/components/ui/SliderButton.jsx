import React from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const SliderButton = ({onClickLeft, onClickRight, className}) => {
  return (
    <div className={className}>
      <button onClick={onClickLeft} className='rounded-l-2xl border border-black p-4'><FaChevronLeft /></button>

      <button onClick={onClickRight} className='rounded-r-2xl border border-black p-4'><FaChevronRight /></button>
    </div>
  )
}
export default SliderButton