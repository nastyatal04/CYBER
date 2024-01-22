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
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-row gap-4">
          <AccentText text="Browse by" />
          <Heading text="Category" />
        </div>
        <div className="font-normal text-[20px] text-light-gray w-2/5 text-center">
          Set a secondary sales fee and add social links, a description, profile
          and banner images, and a description.
        </div>
        <div className="flex flex-wrap gap-8">
          <img
            src="https://avatars.mds.yandex.net/i?id=00dd7ff40347a3408954b0ae7fa12035c9e5506d-9181886-images-thumbs&n=13"
            alt=""
            className="aspect-square rounded-2xl h-[400px]"
          />
          <img
            src="https://www.forexscamreview.com/wp-content/uploads/2023/09/3767-what-is-capital-formation-in-forex-trading.jpg"
            alt=""
            className="rounded-2xl h-[400px]"
          />
          <img
            src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/d2db4de9-c6f4-4d82-b850-20eb23f2cad2.__CR0,291,1800,768_PT0_SX1464_V1___.jpg"
            alt=""
          />
          <img
            src="https://i.pinimg.com/originals/12/e7/26/12e726e230f10eafae492579bd3d2405.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
