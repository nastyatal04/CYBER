import React from "react";

export const ButtonNoBackground = ({ text, width = "w-max" }) => {
  return (
    <div
      className={`font-bold bg-black-rock text-center py-3 px-10 border-2 border-fashion-fuchsia text-white border-solid cursor-pointer rounded-lg ${width}`}
    >
      {text}
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
      className={`font-bold text-white text-center bg-gradient-to-r from-[rgba(30,225,225,0.9)] to-[rgba(24, 254, 255, 0.00)] py-3 px-10 rounded-full cursor-pointer ${width}`}
    >
      {text}
    </div>
  );
};
