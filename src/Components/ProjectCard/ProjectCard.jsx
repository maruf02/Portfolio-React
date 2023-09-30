import React from "react";
import "./ProjectCard.css";
import { Link } from "react-router-dom";
const ProjectCard = ({ card }) => {
  const { id, project_title, category, img, description } = card;
  return (
    <div>
      <section className="allCard p-2 justify-center lg:hover:m-2 lg:hover:p-2 xl:hover:mx-6 xl:hover:px-8">
        <div className="login-form-container relative w-[350px] h-[540px] bg-[#1b1b42] flex  justify-center content-center overflow-hidden">
          <div className="login-form absolute bg-[#1b1b42] inset-1 p-2 z-10 ">
            <div className="img-container relative w-full h-64 bg-[#1b1b42] flex  justify-center overflow-hidden">
              <div className="img-form absolute bg-[#1b1b42] inset-1 p-1 z-10">
                <img src={img} alt="" className="w-full h-full" />
              </div>
            </div>
            <div className="txt-container   relative w-full h-[255px] bg-[#34347f] mt-2  pl-4 text-[#00ccff]">
              <div className="flex flex-col h-3/4">
                <p className="text-xl font-bold ">{project_title}</p>
                <p className="pt-3  ">
                  <span className="text-sm bg-[#00ccff] font-semibold px-2 py-1 text-[#34347f] rounded-xl ">
                    {category}
                  </span>
                </p>
                <br />
                <p className="text-base font-semibold text-start  ">
                  {description}
                </p>
              </div>
              {/* ****************** */}
              <Link to={`/Projects/${id}`}>
                <div className="outer relative  h-12 w-56 rounded-[50px] mt-3 -top-2 left-10">
                  <button
                    className="btnn absolute top-[50%] left-[50%] bg-[#34347f] text-white outline-none
                          border-none text-xl z-[9] tracking-[1px] uppercase cursor-pointer h-[44px] w-[218px] rounded-[50px]"
                  >
                    Live/Demo
                  </button>
                </div>
              </Link>
              {/* ****************** */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectCard;
