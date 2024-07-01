import React from 'react';
import ButtonGeneric from '../ui/ButtonGeneric';

const CrowdVideo = ({ videoId, onClickButton }) => {
  return (
    <div className="relative flex justify-center items-center w-full lg:w-2/3">
      <div className="w-full relative" style={{ height: '35vh' }}>
        <iframe
          className="w-full h-full rounded-lg"
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
