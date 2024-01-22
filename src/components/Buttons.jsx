import React from "react";

export const ButtonNoBackground = ({ text, width = "w-max" }) => {
  return (
    <div className="relative">
      <div className="bg-gradient-to-r from-[rgba(255,255,255,0)] w-full h-full to-[rgba(5,4,34,0.8)] absolute top-0 left-0 rounded-lg"></div>
      <div
        className={`font-bold bg-[rgb(24,19,54)] text-center py-3 px-10 border-2 border-fashion-fuchsia text-white border-solid cursor-pointer rounded-lg ${width}`}
      >
        <span className="relative">{text}</span>
      </div>
    </div>
  );
};

export const ButtonWithBackground = ({ text, width = "w-max" }) => {
  return (
    <div
      className={`font-bold text-white text-center bg-gradient-to-r from-[#DF1CFF] to-[#EA0070] py-3 px-10 rounded-lg cursor-pointer ${width}`}
    >
      {text}
    </div>
  );
};

export const ButtonWithBackgroundBlue = ({ text, width = "w-max" }) => {
  return (
    <div
      className={`font-bold text-white text-center bg-gradient-to-r from-[rgb(13,106,124)] to-[rgba(24, 254, 255, 0.00)] py-3 px-10 rounded-full cursor-pointer ${width}`}
    >
      {text}
    </div>
  );
};
