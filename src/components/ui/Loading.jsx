import React, { useState, useEffect } from "react";
import 'tailwindcss/tailwind.css'; // Asegúrate de que Tailwind esté importado en tu proyecto

const LoadingPage = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-[#0d0d0d] overflow-hidden font-['Roboto']">
      <div className="relative text-center w-[200px]">
        <p className="text-[40px] font-light text-[#f60d54]">Loading</p>
        <h1 className="text-[60px] text-white mt-[-10px]">{progress}%</h1>
        <hr
          className="bg-[#f60d54] border-none h-[1px] mt-2"
          style={{ width: `${progress}%` }}
        />
        <div
          className="absolute top-0 w-full h-[1px] bg-[#f60d54]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default LoadingPage;
