import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";

const BannerIntro = () => {
  return (
    <div>
      <section className="">
        <div className="text-5xl font-bold text-white text-center lg:text-left pt-9 lg:pt-24 pb-4 ">
          Maruf
        </div>
        <div className="text-xl text-center lg:text-left font-extralight text-gray-300 pb-2">
          MERN stack developer
        </div>
        <hr className=" w-11/12 lg:w-8/12 lg:justify-start h-2 pb-6 mx-auto lg:mx-0" />
        <div className=" w-11/12 text-sm text-center lg:text-left font-thin text-gray-300 pb-4">
          Innovative Full Stack Developer with a passion for creating seamless
          web applications. Skilled in front-end and back-end technologies,
          ready to take on new challenges.
        </div>
        <div className="w-fit h-fit border-2 bg-black rounded-full mt-5 mx-auto lg:mx-0">
          <button className="p-2 text-base text-white hover:bg-gray-400 hover:rounded-full hover:text-black  ">
            Let's work together
          </button>
        </div>
        <div className="mx-auto pt-6  container lg:-ml-36 text-center justify-center flex gap-4 ">
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
        </div>
        {/* <!-- draw line for mobile --> */}
        <p className="border-b-2 my-6 w-11/12 mx-auto md:hidden"></p>
      </section>
    </div>
  );
};

export default BannerIntro;
