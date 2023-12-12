import React from "react";
import BannerSection from "../BannerSection/BannerSection";
import AboutMeSection from "../AboutMeSection/AboutMeSection";
import SkillsSection from "../SkillsSection/SkillsSection";
import ServiceSection from "../ServiceSection/ServiceSection";
import ProjectsSection from "../ProjectsSection/ProjectsSection";
import MyTeamSection from "../MyTeamSection/MyTeamSection";
import ContactSection from "../ContactSection/ContactSection";

const Home = () => {
  return (
    <div>
      <button id="myBtn">&#8593;</button>
      <BannerSection></BannerSection>
      <AboutMeSection></AboutMeSection>
      <SkillsSection></SkillsSection>
      {/* <ServiceSection></ServiceSection> */}
      {/* <MyTeamSection></MyTeamSection> */}
      <ProjectsSection></ProjectsSection>
      <ContactSection></ContactSection>
    </div>
  );
};

export default Home;
