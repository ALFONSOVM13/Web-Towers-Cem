'use client'

import React from 'react';
import CrowdVideo from '../../../components/videos/CrowdVideo';
import Collapsible from '../../../components/ui/Collapsible';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function CrowdfundingPage() {
  const handleClick = () => {
    console.log('Button clicked');
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="bg-white min-w-full min-h-full h-screen flex flex-col items-center">
      <div className="max-w-screen-lg mx-auto mt-8 space-y-4 w-full lg:w-2/3 bg-white p-4">
        <div className="mt-8 flex justify-center w-full">
          <CrowdVideo videoId="VfBlqCjvtOA" onClickButton={handleClick} />
        </div>
        <div className="mt-16">
          <h1 className="text-complementary-300 font-semibold text-xl mb-8">Conoce nuestra campaña</h1>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            removeArrowOnDeviceType={['tablet', 'mobile']}
            containerClass="carousel-container"
            itemClass="carousel-item"
          >
            <div className="h-96">
              <Collapsible title="¿Cómo ganas?" className="h-full">
                <p className="text-complementary-300 bg-secondary-300">
                  1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="text-complementary-300 bg-secondary-300">
                  2. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-complementary-300 bg-secondary-300">
                  3. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p className="text-complementary-300 bg-secondary-300">
                  4. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </Collapsible>
            </div>
            <div className="h-96">
              <Collapsible title="¿Qué es crowdfunding?" className="h-full">
                <p className="text-complementary-300 bg-secondary-300">
                  1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="text-complementary-300 bg-secondary-300">
                  2. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-complementary-300 bg-secondary-300">
                  3. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p className="text-complementary-300 bg-secondary-300">
                  4. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </Collapsible>
            </div>
            <div className="h-96">
              <Collapsible title="¿Qué es Vaki?" className="h-full">
                <p className="text-complementary-300 bg-secondary-300">
                  1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="text-complementary-300 bg-secondary-300">
                  2. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-complementary-300 bg-secondary-300">
                  3. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p className="text-complementary-300 bg-secondary-300">
                  4. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </Collapsible>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default CrowdfundingPage;
