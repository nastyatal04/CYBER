import React from "react";

export const InfoBox = ({ text, data }) => {
  return (
    <div className="text-[rgb(205,204,210)] flex flex-col gap-4">
      <span className="text-xl leading-none">{text}</span>
      <span className="text-[32px] font-semibold leading-none">{data}</span>
    </div>
  );
};
