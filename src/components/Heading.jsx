import React from "react";
import { AccentText } from "./AccentText";

export const Heading = ({ text, accent_text }) => {
  return (
    <h1 className="text-white text-[55px] font-bold w-2/3">
      {text[0]} <AccentText text={accent_text} /> {text[1]}
    </h1>
  );
};
export const HeadingStart = ({ text, accent_text }) => {
  return (
    <h1 className="text-white text-[55px] font-bold">
      <AccentText text={accent_text} /> {text}
    </h1>
  );
};
export const HeadingEnd = ({ text, accent_text }) => {
  return (
    <h1 className="text-white text-[55px] font-bold">
      {text} <AccentText text={accent_text} />
    </h1>
  );
};
