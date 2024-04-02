import React from "react";
import logos from "../public/Frame.png";
import Ideatech from "../public/Ideatech Logo SVG 3.png";
import CustomeUI from "../public/div.customization-ui.png";
import MentorsImage from "../public/mentors.png";
import sponsorImage from "../public/sponsor.png";
import Vector from "../public/Vector.png";
import "../app/globals.css";
import Image from "next/image";
const Boxes_Section = () => {
  return (
    <section id="boxes" className="h-screen w-[100%] flex justify-center items-center section">
      <div className="w-[90vw] h-[86vh] rounded-[40px] relative flex items-center justify-center back">
        <Image
          src={logos}
          alt="two logo"
          className="w-[100px] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]"
        />
        <Image
          src={Vector}
          alt="Vector"
          className="absolute z-10 w-[100vw] top-[40px]"
        />
        <section className="boxes h-full py-[30px] w-[65%]">
          <article className=" h-full flex flex-col gap-[5px] w-full py-[16px] rounded-[32px]  bg-[#B8CEDC] box1">
            <h1 className="px-[26px] text-[24px] whitespace-nowrap text-[#52225E] font-[600]">
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
              className=" w-full z-0 -translate-x-5 mb-[30px] h-[70px] "
            />
            <span className="px-[26px] text-[#52225ECC] text-[14px] font-[500]">
              ideatech is the best <br /> ideathon in the world
            </span>
          </article>
          <article className=" relative h-full w-full z-50 items-end px-[26px] py-[30px] rounded-[32px] flex gap-4  bg-[#C9DA8F] box2">
            <div>
              <h1 className="font-[600] text-[24px] text-[#52225E] ">When</h1>
              <span className=" font-[500] text-[#52225ECC]">Prepare yourself swiftly as  <br /> the event is just around the corner</span>
            </div>
            <Image
              src={Ideatech}
              alt="ideatech"
              className="w-[300px] absolute top-[-15%] translate-x-[60%] -rotate-[35deg] px-[26px]"
            />
          </article>
          <article className=" h-full w-full flex flex-col  items-center z-50 rounded-[32px]  bg-[#FEDF6F] box3">
            <Image
              src={sponsorImage}
              alt="Custom UI"
              className="w-fit  object-fill"
            />
            <div className="px-[26px]"> 
              <h1 className="text-[#1C471F] text-[24px] font-[600]">Sponsors</h1>
              <p className="text-[#1C471F] text-[16px] font-[500]">
                The driving force behind this exceptional event!  
              </p>
            </div>
          </article>
          <article className=" h-full w-full z-50 flex items-center flex-col rounded-[32px] bg-[#F682A5] box4">
            <div className="px-[26px] pt-[26px]"> 
              <h1 className="text-[#4A411E] text-[26px] font-[600]">Mentors</h1>
              <p className="text-[#4A411E] text-[16px] font-[500]">Ready to lead you every step on your journey!</p>
            </div>
            <Image
              src={MentorsImage}
              alt="ideatech"
              className=" "
            />
          </article>
          <article className=" h-full w-full  z-50 rounded-[32px]  bg-[#F9A474] box5"></article>
          <article className=" h-full w-full z-50 rounded-[32px]  bg-[#B8CEDC] box6">
          </article>
        </section>
      </div>
    </section>
  );
};

export default Boxes_Section;
