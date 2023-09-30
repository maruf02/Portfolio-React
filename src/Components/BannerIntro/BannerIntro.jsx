import React from "react";

import IconAnime from "../IconAnime/IconAnime";

const BannerIntro = () => {
  return (
    <div>
      <section className="">
        <div className="text-5xl font-bold text-white text-center lg:text-left pt-0 lg:pt-24 pb-4 ">
          Maruf
        </div>
        <div className=" textDev text-xl text-center lg:text-left font-extralight text-gray-300 pb-2">
          MERN stack developer
        </div>
        <hr className=" w-11/12 lg:w-8/12 lg:justify-start h-2 pb-6 mx-auto lg:mx-0" />
        <div className=" w-11/12 text-sm text-center lg:text-left font-thin text-gray-300 pb-4">
          Innovative Full Stack Developer with a passion for creating seamless
          web applications. Skilled in front-end and back-end technologies,
          ready to take on new challenges.
        </div>
        <div className="outer relative  h-12 w-80 rounded-[50px] mt-3 -top-2 left-2">
          <button
            className="btnn absolute top-[50%] left-[50%] bg-[#34347f] text-white outline-none
                          border-none text-lg z-[9] tracking-[1px]  cursor-pointer h-[44px] w-[315px] rounded-[50px]
                          hover:bg-lime-500"
          >
            Let's Work Together
          </button>
        </div>
        {/* banner intro icon list */}
        {/* banner intro icon list */}
        {/* <div className="mx-auto pt-6  container lg:-ml-36 text-center justify-center flex gap-4 ">
          <a href="">
            <BsFacebook className="text-2xl"></BsFacebook>
          </a>
          <a href="">
            <BsInstagram className="text-2xl"></BsInstagram>
          </a>
          <a href="">
            <BsTwitter className="text-2xl"></BsTwitter>
          </a>
          <a href="">
            <BsLinkedin className="text-2xl"></BsLinkedin>
          </a>
          <a href="">
            <BsGithub className="text-2xl"></BsGithub>
          </a>
        </div> */}
        <IconAnime></IconAnime>
        {/* <!-- draw line for mobile --> */}
        <p className="border-b-2 my-6 w-11/12 mx-auto md:hidden"></p>
      </section>
    </div>
  );
};

export default BannerIntro;
