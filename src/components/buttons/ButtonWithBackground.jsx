import React from "react";

export const ButtonWithBackground = ({ text }) => {
  return (
    <div className="w-max font-bold text-white bg-gradient-to-r from-[#DF1CFF] to-[#EA0070] py-3 px-10 rounded-lg cursor-pointer">
      {text}
    </div>
  );
};
