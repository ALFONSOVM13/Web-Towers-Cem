"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import './about.scss';

const Timeline = () => {
  const [focusedIndex, setFocusedIndex] = useState(null);
  const sectionsRef = useRef([]);

  const timelineItems = [
    {
      year: '1881',
      description: 'He was born in 1881 (probably in the spring) in Salonica, then an Ottoman city, now in Greece. His father Ali Riza, a customs official turned lumber merchant, died when Mustafa was still a boy. His mother Zubeyde, a devout and strong-willed woman, raised him and his sister.',
      img: '/images/cemento.png',
    },
    {
      year: '1893',
      description: 'Mustafa attended the military school in Manastir (now Bitola, Macedonia) and later went to the military academy in Istanbul, graduating in 1905.',
    },
    {
      year: '1894',
      description: 'pepe.',
    },
    {
      year: '1895',
      description: 'xexe',
    },
    {
      year: '1896',
      description: 'xaka',
    },
    {
      year: '1897',
      description: 'xxx',
    },
    {
      year: '1898',
      description: 'ddd',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFocusedIndex(Number(entry.target.dataset.index));
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="bg-slate-100 snap-container">
      <div className="mt-20 max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <h1 className="mt-32 text-4xl font-bold text-center text-blue-300">Mustafa Kemal Atatürk</h1>
          <div className="border-r-4 border-blue-200 absolute h-full" style={{ left: '50%' }}></div>
          {timelineItems.map((item, index) => (
            <div
              key={index}
              data-index={index}
              ref={(el) => (sectionsRef.current[index] = el)}
              className={`mb-16 flex justify-between items-center w-full snap-start ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
            >
              <div className="order-1 w-2/5"></div>
              <div
                className={`order-1 w-2/5 px-4 py-8 mt-8 ml-4 ${index % 2 === 0 ? 'text-left' : 'text-right'} ${
                  focusedIndex === index ? 'opacity-100' : 'opacity-40'
                } transition-opacity duration-300`}
              >
                <div className="bg-slate-400 rounded-lg shadow-md p-8">
                  {item.img && (
                    <div className="mb-4">
                      <Image src={item.img} width={200} height={200} alt="Image" />
                    </div>
                  )}
                  <h3 className="mb-1 font-bold text-xl">{item.year}</h3>
                  <p className="text-base leading-snug text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
