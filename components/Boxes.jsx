"use client"

import { useEffect, useState } from "react";
import CustomCursor from "@/utils/CustomCursor";
import Ideatech from "../public/Ideatech Logo SVG 3.png";
import CustomeUI from "../public/div.customization-ui.png";
import MentorsImage from "../public/mentors.png";
import AboutImage from "../public/About-Byte.png";
import sponsorImage from "../public/sponsor.png";
import Vector from "../public/Vector.png";
import { IoIosPause } from "react-icons/io";
import { SiConventionalcommits } from "react-icons/si";
import { FaFlag } from "react-icons/fa";
import "../app/globals.css";
import Image from "next/image";
import Link from 'next/link';

const Boxes = () => {

      const eventDate = new Date("2024-04-19T18:00:00");
      const calculateRemainingTime = () => {
      const currentDate = new Date();
      const timeDifference = eventDate - currentDate;
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      return { days, hours };
    };
    const [remainingTime, setRemainingTime] = useState(calculateRemainingTime);
    useEffect(() => {
      const interval = setInterval(() => {
        setRemainingTime(calculateRemainingTime);
      }, 1000);
      return () => clearInterval(interval);
    }, []);


  return (
    <section id="boxes" className=" h-screen w-[100%] flex justify-center items-center section">
      <div className="w-[90vw] py-[16px] h-[90vh] flex justify-center items-center back rounded-[40px] relative">
        <Image
          src={Vector}
          alt="Vector"
          className="absolute z-20 w-full [100vw] top-[60px]"
        />
        <section className="angry-grid">
          <article className="box-0 z-[10] py-[16px] flex justify-between flex-col w-full h-full bg-[#C3B2E7]">
            <h1 className="px-[26px] text-[20px] whitespace-nowrap text-[#52225E] font-clashDisplay font-semibold">
              About IdeaTech
            </h1>
            <Image
              src={Ideatech}
              alt="ideatech"
              className=" z-[0] w-[240px] px-[26px] mx-[auto]"
            />
            <Image
              src={CustomeUI}
              alt="Custom UI"
              className=" w-full z-0 -translate-x-5  "
            />
            <span className="px-[26px] font-inter Box-Desc text-[#52225ECC] font-medium">
              ideatech is the best <br /> ideathon in the world
            </span>
          </article>
          <article className="relative z-50 box-1 flex items-end p-[20px] w-full h-full bg-[#F682A5]">
            <div>
              <h1 className="Box-Title text-[#52225E] font-clashDisplay font-semibold">When</h1>
              <span className="font-medium font-inter Box-Desc text-[#52225ECC]">
                Prepare yourself swiftly as <br /> the event is just around the
                corner
              </span>
            </div>
            <div className="">
              {" "}
              <Image src={Ideatech} alt="ideatech" className="absolute w-[140px] rotate-[-10deg] top-[0px] right-[160px]" />
            </div>{" "}
            <div className="absolute right-[-30px] flex rotate-[12deg] p-[16px] justify-center items-end gap-[10px] rounded-[24px] bg-[rgba(28,_28,_30,_0.50)] backdrop-filter backdrop-blur-[20px]">
              <div className="flex flex-col gap-[10px]">
                <div><span className="text-[#FFF] text-[20px] not-italic font-clashDisplay font-medium"><span className="text-[#FFF] text-[60px] not-italic font-normal leading-[53.152px]">{remainingTime.days}</span> <span className="opacity-20">Days</span></span></div>
                <div><span className="text-[#FFF] text-[20px] not-italic font-clashDisplay font-medium"><span className="text-[#FFF] text-[60px] not-italic font-normal leading-[53.152px]">{remainingTime.hours}</span> <span className="opacity-20">Hours</span></span></div>
              </div>
              <div className="flex flex-col gap-[10px]">
                <div className="flex pl-[8px] pr-[8px] py-[8px] flex-col items-start gap-[10px] self-stretch rounded-[11px] bg-[rgba(62,_62,_62,_0.38)]">
                  <span className="text-[#FFF] text-[14px] font-inter">Target Time: <span className="pl-[36px]">{remainingTime.days}<span className="opacity-20">Days</span></span></span>
                  <span className="flex p-[6.666px] font-inter text-[14px] text-[#FFF] gap-[10px] items-center self-stretch rounded-[6px] bg-[rgba(0,_0,_0,_0.15)]">IDEATECH is waiting <FaFlag /></span>
                </div>
                <div className="flex gap-[50px] justify-center items-center bg-[rgba(62,_62,_62,_0.38)] py-[8px] px-[20px] rounded-[6px]">
                  <span><SiConventionalcommits className="text-[#FFF] text-[12px]" /></span>
                  <span><IoIosPause className="text-[#FFF]" /></span>
                  <span><SiConventionalcommits className="text-[#FFF] text-[12px] font-bold" /></span>
                </div>
              </div>
            </div>
          </article>
          <Link href="#sponsors" className="z-50">
            <article className=" pb-[16px] box-3 w-full h-full flex flex-col justify-between bg-[#C9DA8F]">
              <div className="h-[150px] w-full">
                <Image
                  src={sponsorImage}
                  alt="Custom UI"
                  className=" h-full w-full rounded-t-[40px] h-[100%]"
                />
              </div>
              <div className="px-[26px]">
                <h1 className="text-[#1C471F] Box-Title font-clashDisplay font-semibold">Sponsors</h1>
                <p className="text-[#1C471F] Box-Desc font-inter font-medium">
                  The driving force behind <br /> this exceptional event!
                </p>
              </div>
            </article>
          </Link>
          <Link href="#mentors" className="z-[1111]">
            <article className="box-2 z-50 flex flex-col w-full h-full bg-[#FEDF6F]">
            <div className="px-[26px] pt-[16px]">
              <h1 className="text-[#4A411E] Box-Title font-clashDisplay font-semibold">Mentors</h1>
              <p className="text-[#4A411E] Box-Desc font-inter font-medium">
                Ready to lead you every <br /> step on your journey!
              </p>
            </div>
            <div className=" w-full  flex justify-center items-start flex-1">
              <Image
                src={MentorsImage}
                alt="ideatech"
                className=" rounded-b-[32px] "
              />
            </div>
          </article>
          </Link>
          <article className="box-4 z-50 h-[182px] overflow-hidden relative px-[26px] py-[16px] flex flex-col justify-end w-full h-full bg-[#F9A474]">
            <div className="z-50 ">
              <h1 className="text-[#582614] font-clashDisplay font-semibold Box-Title">
                About <br /> bytecraft
              </h1>
              <p className="text-[#582614CC] font-inter font-medium Box-Desc">
                Our club is the best, <br /> no one can beat us!
              </p>
            </div>
            <Image
              src={AboutImage}
              alt="about bytecraft "
              className=" absolute Box-About z-10 right-0 w-[400px] bottom-0 top-0 translate-x-[15%]"
            />
          </article>
          <Link href="#agenda" className="z-50">
            <article className="box-5 w-full h-full bg-[#B8CEDC]">
              <div className="pt-[12px] px-[22px]">
                <h1 className="text-[#184363] font-clashDisplay font-semibold Box-Title">Agenda</h1>
                <p className="Box-Desc font-inter font-medium text-[#184363]">
                  Wait for us on 19th,20th <br /> April 2024
                </p>
              </div>
            </article>
          </Link>
        </section>
        <CustomCursor
          name={"Mehdi"}
          classDiv={
            "animate-bounce absolute right-[190px] top-[160px] z-[50] pl-[50px]"
          }
          classCursor={"w-[30px] rotate-[deg]"}
          classForName={
            "rounded-[6px] py-[4px] px-[10px] bg-[#282828] [box-shadow:0px_1px_4px_0px_rgba(0,_0,_0,_0.25),_0px_-1px_9px_0px_rgba(103,_103,_103,_0.25)] text-[#FFF] font-clashDisplay text-[12px] font-semibold"
          }
        />
        <CustomCursor
          name={"Abdou"}
          classDiv={"animate-bounce absolute right-[200px] bottom-[32%] z-[50]"}
          classCursor={"w-[30px]"}
          classForName={
            "rounded-[6px] py-[4px] px-[10px] bg-[#282828] [box-shadow:0px_1px_4px_0px_rgba(0,_0,_0,_0.25),_0px_-1px_9px_0px_rgba(103,_103,_103,_0.25)] text-[#FFF] font-clashDisplay text-[12px] font-semibold"
          }
        />
        <CustomCursor
          name={"Yacine"}
          classDiv={"animate-bounce absolute left-[160px] bottom-[46%] z-[50]"}
          classCursor={"w-[30px]"}
          classForName={
            "rounded-[6px] py-[4px] px-[10px] bg-[#282828] [box-shadow:0px_1px_4px_0px_rgba(0,_0,_0,_0.25),_0px_-1px_9px_0px_rgba(103,_103,_103,_0.25)] text-[#FFF] font-clashDisplay text-[12px] font-semibold"
          }
        />
      </div>
    </section>
  );
};

export default Boxes;
