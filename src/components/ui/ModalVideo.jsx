import React from 'react';
import { FaTimes } from 'react-icons/fa';

const ModalVideo = ({ videoSrc, modalView, onClose }) => {
  if (!modalView) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg overflow-hidden w-full max-w-4xl relative">
        <button
          className="absolute top-2 right-2 m-2 text-white text-xl md:text-2xl z-10"
          onClick={onClose}
        >
          <FaTimes />
        </button>
        <video className="w-full h-auto" controls autoPlay>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default ModalVideo;
