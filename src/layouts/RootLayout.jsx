import React from "react";
import { Outlet } from "react-router-dom";
import { MainNavigation } from "../components/Navigation";
import { ButtonNoBackground } from "../components/Buttons";

export const RootLayout = () => {
  return (
    <div className="bg-black-russian flex flex-col w-screen h-full justify-center items-center">
      <div className="p-5 items-center w-11/12 flex flex-row justify-between text-white">
        <span className="text-fashion-fuchsia font-bold text-[28px]">
          KNFT.
        </span>
        <MainNavigation />
        <ButtonNoBackground text="Get in Touch" />
      </div>
      <Outlet />
      <div className="p-5 w-11/12 flex flex-row justify-between font-medium text-[rgb(205,204,210)]">
        <span>Copyright &copy; 2022 Nazmul Shanto/ All Rights Reserved</span>
        <MainNavigation />
      </div>
    </div>
  );
};
