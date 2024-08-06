import React from 'react';

const Title = ({ text, className }) => {
  return (
    <h2 className={`font-title text-primary-100 font-bold text-center text-3xl md:text-4xl xl:text-5xl  ${className} `}>
      {text}
    </h2>
  );
};

export default Title;
