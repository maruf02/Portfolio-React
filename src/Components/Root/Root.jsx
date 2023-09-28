import React from "react";
import MenuBar from "../MenuBar/MenuBar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="h-[3000px] scroll-smooth overflow-x-hidden">
      <MenuBar></MenuBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
