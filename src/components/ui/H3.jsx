import React from 'react';

const H3 = ({ text, className }) => {
  return (
    <h3 className={`font-content text-center text-3xl md:text-4xl xl:text-7xl ${className}`}>
      {text}
    </h3>
  );
};

export default H3;
