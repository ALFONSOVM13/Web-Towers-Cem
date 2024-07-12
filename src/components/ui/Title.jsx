import React from 'react';

const Title = ({ text, className }) => {
  return (
    <h1 className={`font-title font-bold text-center text-3xl md:text-4xl xl:text-7xl ${className}`}>
      {text}
    </h1>
  );
};

export default Title;
