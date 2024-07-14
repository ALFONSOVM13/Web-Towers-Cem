import React from "react";
import CrowdVideo from "./CrowdVideo";
import Collapsable from "./Collapsable";
import Carrusel from "./Carrusel";
import Title from "../ui/Title";

const CrowdfundingSection = () => {
  return (
    <>
      <section className="">
        <CrowdVideo/>
        <Collapsable />
        <Carrusel />
      </section>
    </>
  );
};

export default CrowdfundingSection;
