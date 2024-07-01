import React from 'react';
import ButtonGeneric from '../ui/ButtonGeneric';

const CrowdVideo = ({ videoId, onClickButton }) => {
  return (
    <div className="relative flex justify-center items-center h-screen">
      <div className="w-full relative" style={{ maxWidth: '100vw', maxHeight: '70vh' }}>
        <iframe
          className="w-full h-1/3"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allowFullScreen
        ></iframe>
        <div className="absolute bottom-0 right-0 m-4">
          <ButtonGeneric onClick={onClickButton} text="Donar" />
        </div>
      </div>
    </div>
  );
};

export default CrowdVideo;
