"use client";
import React, { useState } from 'react';

const Collapsible = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-300 rounded-md mb-4 bg-white">
      <button
        onClick={toggleCollapse}
        className={`w-full flex justify-between items-center px-4 py-3 text-primary-100 bg-complementary-100 rounded-t-md focus:outline-none ${isOpen ? 'border-b-2 border-dotted border-black' : ''}`}
      >
        <h2 className='font-title text-lg md:text-xl font-bold text-left'>{title}</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 md:h-5 md:w-5 transition-transform transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3.293 7.293a1 1 0 0 1 1.414 0L10 12.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414z"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="px-4 py-3 font-content text-primary-100 bg-complementary-100">
          {children}
        </div>
      )}
    </div>
  );
};

export default Collapsible;
