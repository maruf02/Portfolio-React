import React, { useEffect } from "react";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { FaUserAlt, FaTools, FaBriefcase } from "react-icons/fa";
import { BsFillChatSquareDotsFill } from "react-icons/bs";
import "./MenuBottomBar.css";
import { NavLink } from "react-router-dom";

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
                <div className="a">
                  <span className="icon">
                    <NavLink to="/">
                      <AiFillHome></AiFillHome>
                    </NavLink>
                  </span>

                  <span className="text">Home</span>
                </div>
              </li>
              <li className="list">
                <div className="a">
                  <span className="icon">
                    <NavLink to="/About">
                      <FaUserAlt></FaUserAlt>
                    </NavLink>
                  </span>

                  <span className="text">About</span>
                </div>
              </li>
              <li className="list">
                <div className="a">
                  <span className="icon">
                    <NavLink to="/Skills">
                      <FaTools></FaTools>
                    </NavLink>
                  </span>

                  <span className="text">Skills</span>
                </div>
              </li>
              <li className="list">
                <div className="a">
                  <span className="icon">
                    <NavLink to="/Services">
                      <AiFillSetting></AiFillSetting>
                    </NavLink>
                  </span>
                  <span className="text">Service</span>
                </div>
              </li>
              <li className="list">
                <div className="a">
                  <span className="icon">
                    <NavLink to="/Projects">
                      <FaBriefcase></FaBriefcase>
                    </NavLink>
                  </span>

                  <span className="text">Projects</span>
                </div>
              </li>
              <li className="list">
                <div className="a">
                  <span className="icon">
                    <NavLink to="/Contact">
                      <BsFillChatSquareDotsFill></BsFillChatSquareDotsFill>
                    </NavLink>
                  </span>

                  <span className="text">Contact</span>
                </div>
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
