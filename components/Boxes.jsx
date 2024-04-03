import React from "react";
import logos from "../public/Frame.png";
import Ideatech from "../public/Ideatech Logo SVG 3.png";
import CustomeUI from "../public/div.customization-ui.png";
import MentorsImage from "../public/mentors.png";
import AboutImage from "../public/About-Byte.png";
import sponsorImage from "../public/sponsor.png";
import Vector from "../public/Vector.png";
import "../app/globals.css";
import Image from "next/image";
const Boxes = () => {
  return (
    <section className="bg-cyan-200 h-screen w-[100%] flex justify-center items-center section">
      <div className="w-[90vw] bg-slate-600 py-[16px] h-[90vh] flex justify-center items-center back rounded-[40px] relative">
        <section className="angry-grid ">
          <article className="box-0 py-[16px] flex flex-col justify-between w-full h-full bg-[#B8CEDC]">
            <h1 className="px-[26px] whitespace-nowrap text-[#52225E] font-[600]">
              About ideatech
            </h1>
            <Image
              src={Ideatech}
              alt="ideatech"
              className=" z-[0] w-[267px] px-[26px]"
            />
            <Image
              src={CustomeUI}
              alt="Custom UI"
              className=" w-full z-0 -translate-x-5  "
            />
            <span className="px-[26px]  Box-Desc text-[#52225ECC] font-[500]">
              ideatech is the best <br /> ideathon in the world
            </span>
          </article>
          <article className="relative box-1 flex items-end p-[20px] w-full h-full bg-[#F682A5]">
            <div>
              <h1 className="font-[600] Box-Title text-[#52225E] ">When</h1>
              <span className=" font-[500] Box-Desc text-[#52225ECC]">
                Prepare yourself swiftly as <br /> the event is just around the
                corner
              </span>
            </div>
            <div>
              {" "}
              <Image src={Ideatech} alt="ideatech" className=" When-Light" />
            </div>{" "}
          </article>
          <article className="box-2 flex flex-col justify-between w-full h-full bg-[#FEDF6F]">
            <div className="px-[26px] pt-[26px]">
              <h1 className="text-[#4A411E] Box-Title font-[600]">Mentors</h1>
              <p className="text-[#4A411E] Box-Desc font-[500]">
                Ready to lead you every step on your journey!
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
          <article className="box-3 w-full h-full bg-[#C9DA8F]">
            <div className="h-[172px] w-full">
              <Image
                src={sponsorImage}
                alt="Custom UI"
                className=" h-full w-full rounded-t-[32px]"
              />
            </div>
            <div className="px-[26px]">
              <h1 className="text-[#1C471F] Box-Title font-[600]">Sponsors</h1>
              <p className="text-[#1C471F] Box-Desc font-[500]">
                The driving force behind this exceptional event!
              </p>
            </div>
          </article>
          <article className="box-4 overflow-y-hidden relative p-[16px] flex flex-col justify-end w-full h-full bg-[#F9A474]">
            <div className="z-50 ">
              <h1 className="text-[#582614] font-[600] Box-Title">
                About <br /> bytecraft
              </h1>
              <p className="text-[#582614CC] font-[500] Box-Desc">
                Our club is the best
              </p>
            </div>
            <Image
              src={AboutImage}
              alt="about bytecraft "
              className=" absolute Box-About  z-10 right-0 bottom-0 top-0 translate-x-[15%]"
            />
          </article>
          <article className="box-5 z-50 w-full h-full bg-[#B8CEDC]">
            <div className="pt-[18px] px-[26px]">
              <h1 className="text-[#184363] font-[600] Box-Title">Agenda</h1>
              <p className="font-[600] Box-Desc">
                Wait for us on 19th,20th April 2024
              </p>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
};

export default Boxes;
