import React from "react";

export const ButtonNoBackground = ({ text }) => {
  return (
    <div className="font-bold bg-[rgb(33,34,69)] py-3 px-10 border-2 border-[rgb(218,12,162)] text-white border-solid cursor-pointer rounded-lg">
      {text}
    </div>
  );
};
