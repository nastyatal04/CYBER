import React from "react";
import { InfoBox } from "../components/InfoBox";
import { Heading } from "../components/Heading";
import { Navigation } from "../components/Navigation";
import { AccentText } from "../components/AccentText";
import { cyber_card_data } from "../api/cyber_card_data";
import {
  ButtonNoBackground,
  ButtonWithBackground,
  ButtonWithBackgroundBlue,
} from "../components/Buttons";
import { CyberCard } from "../components/CyberCard";
import { InfoCard } from "../components/InfoCard";
import { cyber_info_data } from "../api/cyber_info_data";

export const ModernCryptoSelling = () => {
  const data_card = cyber_card_data;
  const info_card = cyber_info_data;
  return (
    <div className="w-11/12 h-full flex flex-col p-5 gap-24">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col">
          <Heading text="Buy, Create & Sell" />
          <AccentText text="Unique NFT" />
          <Heading text="File." />
        </div>
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
          <div className="flex gap-4">
            <AccentText text="Most Popular" /> <Heading text="NFTs" />
          </div>
          <Navigation />
        </div>
        <div className="grid grid-cols-3 gap-8">
          {data_card.map((card) => (
            <CyberCard url={card.url} text={card.text} rating={card.rating} />
          ))}
        </div>
        <ButtonNoBackground text="Explore All NFTs" />
      </div>
      <div className="flex flex-col gap-20">
        <div className="flex flex-col items-center gap-6">
          <ButtonWithBackgroundBlue text="UNIQUE FILES" />
          <div className="flex flex-row gap-4">
            <Heading text="How to" />
            <AccentText text="Create & Sell" />
            <Heading text="Your NFT Files." />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          {info_card.map((info) => (
            <InfoCard
              title={info.title}
              text={info.text}
              symbol={info.symbol}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
