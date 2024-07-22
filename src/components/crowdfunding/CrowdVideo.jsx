import React from "react";

const CrowdVideo = () => {
  return (
    <div className="bg-black">
      <div className="aspect-video relative z-50"> {/* Use aspect-video for consistent aspect ratio */}
        <iframe
          src="https://www.youtube-nocookie.com/embed/9t4BtgRro1o?si=xwbCHCQdsIYr6pFj&controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 w-full h-full" // Fill the parent container
        ></iframe>
      </div>
    </div>
  );
};

export default CrowdVideo;
