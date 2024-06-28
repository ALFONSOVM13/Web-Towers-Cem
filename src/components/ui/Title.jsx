// components/Title.js

import React from 'react';

const Title = ({ text, size, className }) => {
  // Determinar el tamaño del texto
  let textSizeClasses = 'text-3xl'; 
  if (size === 'large') {
    textSizeClasses = 'text-5xl'; 
  } else if (size === 'small') {
    textSizeClasses = 'text-lg'; 
  }

  return (
    <h1 className={`font-bold ${textSizeClasses}  leading-tight tracking-tight ${className}`}>
      {text}
    </h1>
  );
};

export default Title;
