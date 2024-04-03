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

const Boxes_Section = () => {
  return (
    <section
      id="boxes"
      className="h-screen w-[100%] flex justify-center items-center section"
    >
      <div className="w-[90vw] back h-[86vh]  rounded-[40px] relative flex items-center justify-center">
        <Image
          src={logos}
          alt="two logo"
          className="w-[100px] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]"
        />
        <Image
          src={Vector}
          alt="Vector"
          className="absolute z-10 w-full [100vw] top-[40px]"
        />
        <section className="boxes max-w-[900px]  px-[13px] h-full py-[10px]">
          <article className=" h-full  flex flex-col justify-between gap-[5px] w-full py-[16px] rounded-[32px]  bg-[#B8CEDC] box1">
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
          <article className=" relative h-full w-full z-50 items-end px-[26px] py-[30px] rounded-[32px] flex gap-4  bg-[#C9DA8F] box2">
            <div>
              <h1 className="font-[600] Box-Title text-[#52225E] ">When</h1>
              <span className=" font-[500] Box-Desc text-[#52225ECC]">
                Prepare yourself swiftly as <br /> the event is just around the
                corner
              </span>
            </div>
            <Image src={Ideatech} alt="ideatech" className="When-Light" />
          </article>
          <article className=" relative overflow-hidden h-full w-full flex flex-col justify-between z-50 rounded-[32px]  bg-[#FEDF6F] box3">

          </article>
          <article className=" h-full overflow-hidden w-full z-50 flex items-center flex-col  justify-between rounded-[32px] bg-[#F682A5] box4">
            <div className="px-[26px] pt-[26px]">
              <h1 className="text-[#4A411E] Box-Title font-[600]">Mentors</h1>
              <p className="text-[#4A411E] Box-Desc font-[500]">
                Ready to lead you every step on your journey!
              </p>
            </div>
            <Image src={MentorsImage} alt="ideatech" className=" " />
          </article>
          <article className=" relative Box-About-container overflow-hidden  pl-[26px] pb-[26px] h-full w-full  flex items-end z-50 rounded-[32px]  bg-[#F9A474] box5">
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
              className=" absolute Box-About  z-10 right-0 top-0 translate-x-[15%]"
            />
          </article>
          <article className=" h-full  w-full z-50 rounded-[32px]  bg-[#B8CEDC] box6">
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

export default Boxes_Section;
