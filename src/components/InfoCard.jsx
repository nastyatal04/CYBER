import React from "react";

export const InfoCard = ({ title, text, symbol }) => {
  return (
    <div className="bg-black-rock text-white p-8 rounded-2xl relative my-1">
      <span className="bg-black-russian w-px h-px p-4 absolute top-0 right-20"></span>
      <span className="bg-black-russian w-px h-px p-4 absolute top-7 right-0"></span>
      <span class="material-symbols-rounded absolute -top-10 right-0 text-5xl bg-black-russian p-4 rounded-2xl">
        {symbol}
      </span>
      <span className="bg-black-rock w-px h-px p-4 absolute top-10 right-0 rounded-tr-2xl"></span>
      <span className="bg-black-rock w-px h-px p-4 absolute top-0 right-20 rounded-tr-2xl"></span>
      <span className="flex flex-col gap-6">
        <div className="font-semibold text-[22px]">{title}</div>
        <div className="font-normal text-[20px] text-light-gray">{text}</div>
      </span>
    </div>
  );
};
