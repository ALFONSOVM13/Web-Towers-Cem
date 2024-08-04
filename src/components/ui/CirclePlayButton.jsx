import React from 'react';
import './CirclePlayButton.scss';
import { IoMdPlay } from 'react-icons/io';

const CirclePlayButton = ({onClick}) => {
  const title = 'COMO·FUNCIONA·TC·'.split('');

  return (
    <button onClick={onClick} className="spinning-text-wrapper">
      <div className="spinning-text font-content font-bold">
        {title.map((char, index) => (
          <span key={index} style={{ transform: `rotate(${index * (360 / title.length)}deg)` }}>
            {char}
          </span>
        ))}
      </div>
      <IoMdPlay className='w-4 h-4 text-complementary-300 opacity-70' />
    </button>
  );
};

export default CirclePlayButton;
