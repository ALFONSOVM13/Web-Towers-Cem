"use client";
import React from 'react';
import CrowdVideo from '../../../components/videos/CrowdVideo';
import Collapsible from '../../../components/ui/Collapsible';

function CrowdfundingPage() {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <div className="bg-white min-w-full min-h-full h-screen flex flex-col items-center">
      <div className="max-w-screen-lg mx-auto mt-8 space-y-4 w-full lg:w-2/3 bg-white p-4">
        <div className="mt-20 flex justify-center w-full">
          <CrowdVideo videoId="VfBlqCjvtOA" onClickButton={handleClick} />
        </div>
        <div className="mt-32">
          <h1 className="text-complementary-300 font-semibold text-xl">Conoce nuestra campaña</h1>
          <Collapsible title="¿Cómo ganas?">
            <p className="text-complementary-300 bg-secondary-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Collapsible>
          
          <Collapsible title="¿Qué es crowfunding?">
            <p className="text-complementary-300 bg-secondary-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Collapsible>

          <Collapsible title="¿Qué es Vaki?">
            <p className="text-complementary-300 bg-secondary-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Collapsible>
        </div>
      </div>
    </div>
  );
}

export default CrowdfundingPage;
