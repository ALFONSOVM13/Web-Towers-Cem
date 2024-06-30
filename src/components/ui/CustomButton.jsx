// components/CustomButton.js

import React from 'react';



const CustomButton = ({ type = 'primary', onClick, children, className }) => {
  const baseClasses = 'px-4 py-2 rounded font-semibold focus:outline-none transition duration-300';

  // Estilos para el botón primario y secundario
  const typeClasses = type === 'primary'
    ? 'bg-primary-100 text-white hover:bg-primary-200'
    : 'border border-complementary-200 text-commplementary-200 hover:bg-gray-100 hover:text-primary-100';

  return (
    <button
      className={`${baseClasses} ${typeClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
