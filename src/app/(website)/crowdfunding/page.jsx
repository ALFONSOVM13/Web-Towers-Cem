"use client";
import React from 'react';
import CrowdVideo from '../../../components/videos/CrowdVideo';
import Collapsible from '../../../components/ui/Collapsible';

function CrowdfundingPage() {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <div className="bg-complementary-100 min-w-full min-h-full h-screen">
      <div className="max-w-screen-lg mx-auto mt-8 flex justify-center">
        <CrowdVideo videoId="VfBlqCjvtOA" onClickButton={handleClick} className="w-full sm:w-1/3" />
      </div>

      <div className="max-w-screen-lg mx-auto mt-8 space-y-4">
        <h1 className="text-primary-100">Conoce nuestra campaña</h1>
        <Collapsible title="¿Cómo ganas?">
          <p className="text-complementary-300 bg-secondary-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Collapsible>
        
        <Collapsible title="¿Qué es un crowdfunding?">
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
  );
}

export default CrowdfundingPage;
