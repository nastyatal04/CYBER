import React from "react";

const navigation_str = ["All", "Hape prime", "Lazy Lions", "Peaceful ape"];
const main_navigation_str = [
  "Home",
  "All NFTs",
  "Team",
  "Terms & Co.",
  "Contact",
];
export const Navigation = () => {
  return (
    <div className="flex font-medium text-xl leading-none flex-row gap-20 text-[rgb(122,126,147)]">
      {navigation_str.map((str) => (
        <span className="cursor-pointer">{str}</span>
      ))}
    </div>
  );
};
export const MainNavigation = () => {
  return (
    <div className="flex font-medium text-xl leading-none flex-row gap-11 text-[rgb(122,126,147)]">
      {main_navigation_str.map((str) => (
        <span className="cursor-pointer">{str}</span>
      ))}
    </div>
  );
};
