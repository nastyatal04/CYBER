import React, { useState } from "react";
import { ButtonWithBackground } from "./Buttons";

export const CyberCard = ({ url, text, rating }) => {
  const [isLiked, setIsLiked] = useState(true);
  return (
    <div className="text-white bg-black-rock font-semibold text-[22px] p-8 flex flex-col gap-8 rounded-2xl">
      <div className="relative">
        <span class="material-symbols-rounded text-white z-10 absolute top-0 right-0 p-3 bg-[rgba(255,255,255,0.09)] m-2 rounded-lg cursor-pointer">
          favorite
        </span>
        <img
          className="gap-6 rounded-lg w-[300px] h-[400px] object-cover"
          src={url}
        />
      </div>
      <div className="flex flex-row justify-between">
        <span>{text}</span>
        <span className="flex flex-row gap-2">
          <span class="material-symbols-rounded text-[rgb(121,134,203)] ">
            diamond
          </span>
          <span>{rating}</span>
        </span>
      </div>
      {isLiked && <ButtonWithBackground text="Buy Product" width="w-full" />}
    </div>
  );
};
