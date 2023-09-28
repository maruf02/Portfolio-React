import React, { useEffect } from "react";
import "./MenuBarList.css";

const MenuBarList = () => {
  return (
    <div>
      <nav>
        <ul className=" hidden lg:inline-flex text-white text-lg flex flex-row items-center gap-6 font-f ">
          <li className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-lime-500 duration-100">
            <a href="#">Home</a>
          </li>
          <li className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-lime-500 duration-100">
            <a href="#About">About</a>
          </li>
          <li className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-lime-500 duration-100">
            <a href="#Skills">Skills</a>
          </li>
          <li className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-lime-500 duration-100">
            <a href="#Services">Service</a>
          </li>
          <li className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-lime-500 duration-100">
            <a href="#Portfolio">Portfolio</a>
          </li>
          <li className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-lime-500 duration-100">
            <a href="#Contact">Contact</a>
          </li>
          <div id="indicatorr"></div>
        </ul>
      </nav>
    </div>
  );
};

export default MenuBarList;
