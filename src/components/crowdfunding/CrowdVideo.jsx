import React from "react";
import CustomButton from "../ui/CustomButton";
import Title from "../ui/Title";

const CrowdVideo = ({ onClickButton }) => {
  return (
    <section className="flex flex-col px-12 items-center justify-center min-h-screen p-4 bg-primary-100">
      <Title
        text="Nuestra campaña de Crowdfunding"
        size="large"
        className="text-complementary-200 p-10"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <div className="aspect-video">
          <iframe
            src="https://www.youtube.com/embed/8D6RajGHWyM?si=6V-oxig4DWJFtk4M"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-[430px]"
            ></iframe>
        </div>
        <div className="aspect-video">
          <iframe
            id="vakiIframe"
            title="Una Vaca Por La Red Independiente"
            src="https://vaki.co/iframe/1570380639500"
            className="w-full h-[500px]"
            ></iframe>
        </div>
      </div>

      {/* Potentially add a <CustomButton /> here if needed */}
    </section>
  );
};

export default CrowdVideo;
