import React from 'react';

function TestimonialCard() {
  return (
    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <figure className="flex overflow-hidden relative flex-col justify-center self-stretch my-auto text-base tracking-normal min-h-[536px] max-md:mt-10 max-md:max-w-full">
        {/* <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/13f4270d931b42fff86eaf8247891e4359aad8162c9bb267fac16b27c3df1f91?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&"
          className="object-cover absolute inset-0 size-full"
          alt="Background image"
        /> */}
        <div className="flex overflow-hidden relative flex-col px-7 pt-20 pb-8 w-full min-h-[536px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/71fccaaad4b289f5ca75dd1a6971b2872e48439c77c47967fe51a12840f2ad9f?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&"
            className="object-cover absolute inset-0 size-full"
            alt="Overlay image"
          />
          <figcaption className="flex relative flex-col mt-80 max-md:mt-10 max-md:max-w-full">
            <blockquote className="text-white max-md:max-w-full">
              "Desarrollamos cementos inteligentes y sostenibles que purifican el aire eliminando hasta un 23% de CO₂."
            </blockquote>
            <cite className="mt-1.5 font-semibold text-white max-md:max-w-full">
              Carlos Torres
            </cite>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default TestimonialCard;