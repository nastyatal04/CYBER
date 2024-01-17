import React from "react";
import { ButtonWithBackground } from "../components/buttons/ButtonWithBackground";
import { InfoBox } from "../components/InfoBox";
import { Heading, HeadingStart } from "../components/Heading";
import { Navigation } from "../components/Navigation";
import { ButtonNoBackground } from "../components/buttons/ButtonNoBackground";

export const ModernCryptoSelling = () => {
  return (
    <div className="w-screen h-full flex flex-col p-5 gap-24">
      <div className="flex flex-col gap-8">
        <Heading
          text={["Buy, Create & Sell", "File."]}
          accent_text="Unique NFTs"
        />
        <div className="text-[rgb(205,204,210)] w-1/2 text-xl leading-none">
          NFTs are used for digital art and collectibles, GameFi projects,
          metaverses, and more.
        </div>
        <ButtonWithBackground text="Explore NFTs" />
      </div>
      <div className="flex flex-col gap-8">
        <h2 className="text-[rgb(205,204,210)] text-[32px] font-bold">
          Nico NFT Marketplace Overview
        </h2>
        <div className="flex gap-16">
          <InfoBox text="World Arts" data="30.000 +" />
          <InfoBox text="Digital Artists" data="17.000 +" />
          <InfoBox text="Live Auctions" data="22.000 +" />
          <InfoBox text="Unique Products" data="50.000 +" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-8">
          <HeadingStart text="NFTs" accent_text="Most Popular" />
          <Navigation />
        </div>
        <div className="flex flex-col gap-8"></div>
        <ButtonNoBackground text="Explore All NFTs" />
      </div>
    </div>
  );
};
