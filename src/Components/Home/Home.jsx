import React from "react";
import BannerSection from "../BannerSection/BannerSection";
import AboutMeSection from "../AboutMeSection/AboutMeSection";
import SkillsSection from "../SkillsSection/SkillsSection";
import ServiceSection from "../ServiceSection/ServiceSection";

const Home = () => {
  return (
    <div>
      <BannerSection></BannerSection>
      <AboutMeSection></AboutMeSection>
      <SkillsSection></SkillsSection>
      <ServiceSection></ServiceSection>
    </div>
  );
};

export default Home;
