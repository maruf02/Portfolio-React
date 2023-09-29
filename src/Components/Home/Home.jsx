import React from "react";
import BannerSection from "../BannerSection/BannerSection";
import AboutMeSection from "../AboutMeSection/AboutMeSection";
import SkillsSection from "../SkillsSection/SkillsSection";
import ServiceSection from "../ServiceSection/ServiceSection";
import ProjectsSection from "../ProjectsSection/ProjectsSection";
import MyTeamSection from "../MyTeamSection/MyTeamSection";

const Home = () => {
  return (
    <div>
      <BannerSection></BannerSection>
      <AboutMeSection></AboutMeSection>
      <SkillsSection></SkillsSection>
      <ServiceSection></ServiceSection>
      <MyTeamSection></MyTeamSection>
      <ProjectsSection></ProjectsSection>
    </div>
  );
};

export default Home;
