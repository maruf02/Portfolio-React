import React from "react";
import SkillsProgSpin from "../SkillsProgSpin/SkillsProgSpin";
import SkillsSOftProgs from "../SkillsSOftProgs/SkillsSOftProgs";

const SkillsPage = () => {
  return (
    <div className="pt-12 lg:pt-14">
      <section className=" h-full">
        <h1 className="text-[#79d2a6] text-6xl text-center font-f font-bold ">
          Skills
        </h1>
        <p className="border-b-4 border-double border-[#79d2a6] w-3/4 md:w-4/12 lg:w-2/12 mx-auto"></p>
        <section className="container mx-auto grid grid-cols-1 lg:grid-cols-3  h-full">
          <section className=" col-span-2 h-full">
            <SkillsProgSpin></SkillsProgSpin>
          </section>
          <section className="  h-full ">
            <section className=" h-full">
              <SkillsSOftProgs></SkillsSOftProgs>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
};

export default SkillsPage;
