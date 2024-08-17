import React from 'react';

const H3 = ({ text, className }) => {
  return (
    <h3 className={`font-title font-bold text-center text-4xl md:text-3xl xl:text-5xl ${className}`}>
      {text}
    </h3>
  );
};

export default H3;
