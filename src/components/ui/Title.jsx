import React from 'react';

const Title = ({ text, className }) => {
  return (
    <h2 className={`font-title font-bold text-center text-3xl md:text-4xl xl:text-6xl ${className}`}>
      {text}
    </h2>
  );
};

export default Title;
