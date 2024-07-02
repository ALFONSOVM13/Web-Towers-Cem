// CrowdVideo.jsx
import React from "react";
import CustomButton from "../ui/CustomButton";

const CrowdVideo = ({ videoId, onClickButton }) => {
  return (
    <div className="bg-complementary-100 flex items-center justify-center">
      <div className=" relative h-96 w-1/2">
        <iframe
          className="w-full h-full "
          src={`https://www.youtube.com/embed/8D6RajGHWyM`}
          title="YouTube video player"
          allowFullScreen
        ></iframe>
        <div className=" bg-complementary-200 flex items-center justify-center p-5">
          <h1 className="text-3xl text-primary-100 font-bold flex-1">
            Ayúdanos a construir un mundo mejor
          </h1>
          <CustomButton type="primary" onClick={onClickButton} >
            Donar
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default CrowdVideo;
