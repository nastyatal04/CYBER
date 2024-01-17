import React, { useState } from "react";
import { ButtonWithBackground } from "./buttons/ButtonWithBackground";

export const CyberCard = ({ text, rating }) => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div>
      <div>
        <img />
        <span
          className="material-symbols-outlined"
          onClick={setIsLiked(!isLiked)}
        >
          favorite
        </span>
      </div>
      <div>
        <span>{text}</span>
        <span>{rating}</span>
      </div>
      {isLiked && <ButtonWithBackground text="Buy Product" />}
    </div>
  );
};
