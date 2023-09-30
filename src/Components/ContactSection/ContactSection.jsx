import React from "react";
import "./ContactSection.css";
import IconAnime from "../IconAnime/IconAnime";

const ContactSection = () => {
  return (
    <div>
      <section className="  bg-[#1D1B34] w-full h-fit lg:h-fit  ">
        <section className=" mx-auto w-full  pt-10 pb-5">
          <h1 className="text-[#79d2a6] text-5xl md:text-6xl text-center font-f font-bold ">
            Contant Me
          </h1>
          <p className="border-b-4 border-double border-[#79d2a6] w-3/4 md:w-7/12 lg:w-4/12 mx-auto"></p>
        </section>
        <section className="container mx-auto flex flex-col lg:flex-row gap-4  ">
          <section className=" h-fit lg:w-1/3 lg:pt-32 lg:pl-40  justify-center">
            <IconAnime></IconAnime>
          </section>
          <section className=" px-4 h-fit w-full lg:w-2/3 pt-10 pb-10 md:pb-12">
            <div className="contact-right">
              <form action="#">
                <input
                  type="text"
                  name=""
                  id=""
                  required
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  name=""
                  id=""
                  required
                  placeholder="Your Email"
                />
                <input
                  type="number"
                  name=""
                  id=""
                  required
                  placeholder="Your Number"
                />
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="4"
                  required
                  placeholder="Your Comment"
                ></textarea>
                <div className="mx-auto flex justify-center">
                  <div className="outer relative  h-12 w-40 rounded-[50px] mt-3 -top-2 left-2 ">
                    <button
                      className="btnn absolute top-[50%] left-[50%] bg-[#34347f] text-white outline-none
                          border-none text-lg z-[9] tracking-[1px]  cursor-pointer h-[44px] w-[155px] rounded-[50px]
                          hover:bg-lime-500 "
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default ContactSection;
