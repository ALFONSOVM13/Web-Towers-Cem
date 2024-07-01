
import React from 'react';

function ButtonGeneric({ onClick, text }) {
  return (
    <button
      onClick={onClick}
      className="bg-secondary-300 text-white font-semibold text-xl py-2 px-8 rounded-full hover:bg-secondary-100 
      focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
    >
      {text}
    </button>
  );
}

export default ButtonGeneric;
