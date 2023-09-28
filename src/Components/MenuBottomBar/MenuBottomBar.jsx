import React, { useEffect } from "react";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { FaUserAlt, FaTools, FaBriefcase } from "react-icons/fa";
import { BsFillChatSquareDotsFill } from "react-icons/bs";
import "./MenuBottomBar.css";

const MenuBottomBar = () => {
  useEffect(() => {
    const list = document.querySelectorAll(".list");
    function activeLink() {
      list.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    }
    list.forEach((item) => item.addEventListener("click", activeLink));
  }, []);
  return (
    <div>
      {/* previous */}
      {/* <div className="flex fixed  bottom-0  w-full h-10 items-center justify-center bg-gradient-to-r from-[#114250] to-[#131514]   z-50 lg:hidden ">
        <div className="container mx-auto  w-11/12  items-center justify-center flex flex-wrap gap-5 md:gap-10 ">
          <a className="text-2xl" href="#">
            <AiFillHome></AiFillHome>
          </a>
          <a className="text-2xl" href="#About">
            <FaUserAlt></FaUserAlt>
          </a>
          <a className="text-2xl" href="#Skills">
            <FaTools></FaTools>
          </a>
          <a className="text-2xl" href="#Services">
            <AiFillSetting></AiFillSetting>
          </a>
          <a className="text-2xl" href="#Portfolio">
            <FaBriefcase></FaBriefcase>
          </a>
          <a className="text-2xl" href="#Contact">
            <BsFillChatSquareDotsFill></BsFillChatSquareDotsFill>
          </a>
        </div>
      </div> */}
      {/* previous */}
      {/* new */}
      <div className="flex fixed  bottom-0  w-full h-10 items-center justify-center bg-gradient-to-r from-[#114250] to-[#131514]   z-50 lg:hidden ">
        <div className="container mx-auto  w-11/12  items-center justify-center flex flex-wrap gap-5 md:gap-10 ">
          <div className="navigation">
            <ul>
              <li className="list active">
                <a href="#">
                  <span className="icon">
                    <AiFillHome></AiFillHome>
                  </span>

                  <span className="text">Home</span>
                </a>
              </li>
              <li className="list">
                <a href="#">
                  <span className="icon">
                    <FaUserAlt></FaUserAlt>
                  </span>

                  <span className="text">About</span>
                </a>
              </li>
              <li className="list">
                <a href="#">
                  <span className="icon">
                    <FaTools></FaTools>
                  </span>

                  <span className="text">Skills</span>
                </a>
              </li>
              <li className="list">
                <a href="#">
                  <span className="icon">
                    <AiFillSetting></AiFillSetting>
                  </span>
                  <span className="text">Service</span>
                </a>
              </li>
              <li className="list">
                <a href="#">
                  <span className="icon">
                    <FaBriefcase></FaBriefcase>
                  </span>

                  <span className="text">Portfolio</span>
                </a>
              </li>
              <li className="list">
                <a href="#">
                  <span className="icon">
                    <BsFillChatSquareDotsFill></BsFillChatSquareDotsFill>
                  </span>

                  <span className="text">Contact</span>
                </a>
              </li>

              <div className="indicator"></div>
            </ul>
          </div>
        </div>
      </div>
      {/* new */}
    </div>
  );
};

export default MenuBottomBar;
